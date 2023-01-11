# noise-suppression-util

noise uppression util for web based on [rnnoise](https://github.com/xiph/rnnoise.git).

## Build

### Build rnnoise

We suggest to build inside a docker container (refer to [Dockerfile](./Dockerfile)).

```bash
git clone https://github.com/Chatog/noise-suppression-util.git
cd noise-suppression-tuil
git clone https://github.com/xiph/rnnoise.git
./build.sh
```

If success, `rnnoise.js` will be generated.

It is a wasm module that exports rnnoise c++ api for js in web env to call.