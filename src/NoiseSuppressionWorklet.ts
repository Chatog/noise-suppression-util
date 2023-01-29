class NoiseSuppressionWorklet extends AudioWorkletProcessor {
  // https://developer.chrome.com/blog/audio-worklet-design-pattern/#handling-buffer-size-mismatch
  private _ringBuffer;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process
   * @param input input contains 1 or 2 channels; each channel contains 128 samples; each sample is 16-bit in [-1, 1]
   * @param output same as input, default all 0, should be filled
   */
  process(input: Float32Array[][], output: Float32Array[][]): boolean {
    return true;
  }
}

registerProcessor("NoiseSuppressionWorklet", NoiseSuppressionWorklet);
