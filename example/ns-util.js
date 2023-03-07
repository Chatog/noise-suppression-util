/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class NoiseSuppressionUtil {
    constructor(workletPath) {
        this.workletPath = "./ns-worklet.js";
        if (workletPath)
            this.workletPath = workletPath;
    }
    /**
     * @attention only allow one MediaStream be denoised at the same time
     */
    isOn() {
        return this._worklet !== undefined;
    }
    /**
     * @param stream original stream
     * @returns denoised stream
     */
    start(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            if (stream.getAudioTracks().length === 0) {
                throw new Error("[noise-suppression-util] stream don't have audio tracks");
            }
            if (this.isOn()) {
                console.debug("[noise-suppression-util] already on");
                yield this.stop();
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
                    this._worklet = new AudioWorkletNode(this._ctx, "NoiseSuppressionWorklet");
                    this._source.connect(this._worklet).connect(this._dest);
                }
            })
                .catch((e) => {
                console.error("[noise-suppression-util]", e);
            });
            return this._dest.stream;
        });
    }
    stop() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            console.debug("[noise-suppression-util] stopping...");
            (_a = this._worklet) === null || _a === void 0 ? void 0 : _a.port.close();
            (_b = this._dest) === null || _b === void 0 ? void 0 : _b.disconnect();
            (_c = this._worklet) === null || _c === void 0 ? void 0 : _c.disconnect();
            (_d = this._source) === null || _d === void 0 ? void 0 : _d.disconnect();
            yield ((_e = this._ctx) === null || _e === void 0 ? void 0 : _e.close());
            this._dest = undefined;
            this._worklet = undefined;
            this._source = undefined;
            this._ctx = undefined;
        });
    }
}

export { NoiseSuppressionUtil };
