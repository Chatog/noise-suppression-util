# noise-suppression-util

noise suppression util for web based on [rnnoise](https://github.com/xiph/rnnoise.git).

## Quick Start

You can try in [example](./example/index.html).

## Build

### Build rnnoise

We suggest to build inside a docker container (refer to [Dockerfile](./Dockerfile)).

```bash
cd noise-suppression-util/build
git clone https://github.com/xiph/rnnoise.git
./build.sh
```

If success, `rnnoise.js` will be generated.

It is a wasm module that exports rnnoise c++ api for js in web env to call.

### Build frontend artifact

```bash
npm run build
```

Artifacts will be generated in [dist](./dist) folder.

`ns-util.js` is a ESM module which export the key class `NoiseSuppressionUtil`.

`ns-worklet.js` is a web worker script, which should be able to be accessed by `NoiseSuppressionUtil`.

```js
import { NoiseSuppressionUtil } from "ns-util";

const nsUtil = new NoiseSuppressionUtil("./ns-worklet.js");

const denoisedStream = nsUtil.start(originalMediaStream);

console.log(nsUtil.isOn());

nsUtil.stop();
```
