# noise-suppression-util

noise suppression util for web based on [rnnoise](https://github.com/xiph/rnnoise.git).

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