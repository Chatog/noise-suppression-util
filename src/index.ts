export class NoiseSuppressionUtil {
  workletPath = "./ns-worklet.js";

  private _ctx?: AudioContext;
  private _source?: MediaStreamAudioSourceNode;
  private _dest?: MediaStreamAudioDestinationNode;
  private _worklet?: AudioWorkletNode;

  constructor(workletPath?: string) {
    if (workletPath) this.workletPath = workletPath;
  }

  /**
   * @attention only allow one MediaStream be denoised at the same time
   */
  isOn(): boolean {
    return this._worklet !== undefined;
  }

  /**
   * @param stream original stream
   * @returns denoised stream
   */
  async start(stream: MediaStream): Promise<MediaStream> {
    if (stream.getAudioTracks().length === 0) {
      throw new Error(
        "[noise-suppression-util] stream don't have audio tracks"
      );
    }

    if (this.isOn()) {
      console.debug("[noise-suppression-util] already on");
      await this.stop();
    }

    this._ctx = new AudioContext();
    this._source = this._ctx.createMediaStreamSource(stream);
    this._dest = this._ctx.createMediaStreamDestination();

    // rnnoise only support single channel audio
    this._dest.channelCount = 1;

    this._ctx.audioWorklet
      .addModule(this.workletPath)
      .then(() => {
        console.debug("[noise-suppression-util] worklet loaded");

        if (this._ctx && this._source && this._dest) {
          this._worklet = new AudioWorkletNode(
            this._ctx,
            "NoiseSuppressionWorklet"
          );
          this._source.connect(this._worklet).connect(this._dest);
        }
      })
      .catch((e) => {
        console.error("[noise-suppression-util]", e);
      });

    return this._dest.stream;
  }

  async stop() {
    console.debug("[noise-suppression-util] stopping...");

    this._worklet?.port.close();

    this._dest?.disconnect();
    this._worklet?.disconnect();
    this._source?.disconnect();

    await this._ctx?.close();

    this._dest = undefined;
    this._worklet = undefined;
    this._source = undefined;
    this._ctx = undefined;
  }
}
