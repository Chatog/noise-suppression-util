import { RnnoiseAdapter, RNNOISE_SAMPLE_NUM } from "./RNNoiseAdapter";

const WEB_AUDIO_SAMPLE_NUM = 128;

function gcd(n1: number, n2: number): number {
  const min = n1 > n2 ? n2 : n1;
  const max = n1 > n2 ? n1 : n2;
  if (max % min === 0) return min;
  return gcd(max % min, min);
}
function lcm(n1: number, n2: number) {
  return (n1 / gcd(n1, n2)) * n2;
}

class CircularBuffer {
  private _pushAndPullSize: number;
  private _processableSize: number;
  private _processFunction: (data: Float32Array) => void;
  private _data: Float32Array;
  private _dataSize: number;

  private _pushPtr = 0;
  private _pullPtr = 0;
  private _processedPtr = 0;
  private _dataCanPull = 0;

  constructor(
    pushAndPullSize: number,
    processableSize: number,
    processFunction: (data: Float32Array) => void
  ) {
    this._pushAndPullSize = pushAndPullSize;
    this._processableSize = processableSize;
    this._processFunction = processFunction;
    // use lcm to avoid cut-in-middle
    this._dataSize = lcm(pushAndPullSize, processableSize);
    this._data = new Float32Array(this._dataSize);
  }

  push(input: Float32Array) {
    // from _pushPtr, copy data
    this._data.set(input, this._pushPtr);

    // advance _pushPtr
    this._pushPtr += this._pushAndPullSize;

    // if has enough data to process, process in place
    if (this._pushPtr - this._processedPtr >= this._processableSize) {
      const dataToProcess = this._data.subarray(
        this._processedPtr,
        this._processableSize
      );
      this._processFunction(dataToProcess);
      // advance _processedPtr
      this._processedPtr += this._processableSize;
      // more data can be pull
      this._dataCanPull += this._processableSize;
    }

    // if arrive at the tail, start from the head
    // _pushPtr and _processedPtr always arrive at the same time!!!
    if (this._pushPtr === this._dataSize) {
      this._pushPtr = 0;
      this._processedPtr = 0;
    }
  }

  pull(): Float32Array | null {
    // enough data can be pull
    if (this._dataCanPull >= this._pushAndPullSize) {
      const processedData = this._data.subarray(
        this._pullPtr,
        this._pushAndPullSize
      );
      this._dataCanPull -= this._pushAndPullSize;
      // advance _pullPtr
      this._pullPtr += this._pushAndPullSize;
      if (this._pullPtr === this._dataSize) this._pullPtr = 0;
      return processedData;
    }
    return null;
  }
}

class NoiseSuppressionWorklet extends AudioWorkletProcessor {
  // https://developer.chrome.com/blog/audio-worklet-design-pattern/#handling-buffer-size-mismatch
  private _circularBuffer: CircularBuffer;
  private _rnnoiseAdapter: RnnoiseAdapter;

  constructor() {
    super();
    this._rnnoiseAdapter = new RnnoiseAdapter();
    this._circularBuffer = new CircularBuffer(
      WEB_AUDIO_SAMPLE_NUM,
      RNNOISE_SAMPLE_NUM,
      (data) => {
        this._rnnoiseAdapter.process(data);
      }
    );
  }

  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process
   * @param input input contains 1 or 2 channels; each channel contains 128 samples; each sample is 32-bit in [-1, 1]
   * @param output same as input, default all 0, should be filled
   */
  process(input: Float32Array[][], output: Float32Array[][]): boolean {
    // only process one channel
    const inputSingleChannelAudioData = input[0][0];
    const outputSingleChannelAudioData = output[0][0];

    // push raw data to _circularBuffer
    this._circularBuffer.push(inputSingleChannelAudioData);

    // try to pull denoised data from _circularBuffer
    const denoisedAudioData = this._circularBuffer.pull();
    // if data is available, copy it to output, otherwise do nothing
    if (denoisedAudioData) {
      outputSingleChannelAudioData.set(denoisedAudioData, 0);
    }

    return true;
  }
}

registerProcessor("NoiseSuppressionWorklet", NoiseSuppressionWorklet);
