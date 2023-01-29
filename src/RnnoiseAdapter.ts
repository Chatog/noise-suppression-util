import initRNNoiseModule from "../build/rnnoise";

// RnnoiseModule API
export interface RnnoiseModule extends EmscriptenModule {
  _rnnoise_create(): number;
  _rnnoise_destroy(context: number): void;
  _rnnoise_process_frame(
    context: number,
    input: number,
    output: number
  ): number;
}

// rnnoise only recv 480 samples
export const RNNOISE_SAMPLE_NUM = 480;
// 32-bit => 4-bytes
const RNNOISE_BUFFER_SIZE = RNNOISE_SAMPLE_NUM * (32 / 8);

export class RnnoiseAdapter {
  private _rnnoiseModule?: RnnoiseModule;
  private _rnnoiseContext?: number;

  private _rnnoiseBuffer?: number;
  private _rnnoiseBufferIndex?: number;

  constructor() {
    try {
      this._rnnoiseModule = initRNNoiseModule() as RnnoiseModule;

      this._rnnoiseBuffer = this._rnnoiseModule._malloc(RNNOISE_BUFFER_SIZE);
      this._rnnoiseBufferIndex = this._rnnoiseBuffer >> 2;

      this._rnnoiseContext = this._rnnoiseModule._rnnoise_create();
    } catch (e) {
      this.clean();
    }
  }

  /**
   * process raw frame to denoised frame in place
   * @param frame  480 samples, 32-bit
   */
  process(frame: Float32Array) {
    if (
      !this._rnnoiseModule ||
      !this._rnnoiseBufferIndex ||
      !this._rnnoiseContext ||
      !this._rnnoiseBuffer
    )
      return;

    // convert 32-bit raw samples to 16-bit for rnnoise
    for (let i = 0; i < RNNOISE_SAMPLE_NUM; ++i) {
      this._rnnoiseModule.HEAP32[this._rnnoiseBufferIndex + i] = bit_32_to_16(
        frame[i]
      );
    }
    // use _rnnoiseBuffer as input and also output
    this._rnnoiseModule._rnnoise_process_frame(
      this._rnnoiseContext,
      this._rnnoiseBuffer,
      this._rnnoiseBuffer
    );
    // convert 16-bit denoised samples to 32-bit and copy back
    for (let i = 0; i < RNNOISE_SAMPLE_NUM; ++i) {
      frame[i] = bit_16_to_32(
        this._rnnoiseModule.HEAP[this._rnnoiseBufferIndex + i]
      );
    }
  }

  /**
   * clean memory
   */
  clean() {
    if (!this._rnnoiseModule) {
      return;
    }
    if (this._rnnoiseBuffer) {
      this._rnnoiseModule._free(this._rnnoiseBuffer);
      this._rnnoiseBuffer = undefined;
      this._rnnoiseBufferIndex = undefined;
    }
    if (this._rnnoiseContext) {
      this._rnnoiseModule._rnnoise_destroy(this._rnnoiseContext);
      this._rnnoiseContext = undefined;
    }
  }
}

const SQUARE_2_15 = Math.pow(2, 15);
/**
 * @param raw 32-bit number
 * @returns 16-bit number
 */
function bit_32_to_16(raw: number): number {
  return raw * SQUARE_2_15;
}
/**
 * @param raw 16-bit number
 * @returns 32-bit number
 */
function bit_16_to_32(raw: number): number {
  return raw / SQUARE_2_15;
}
