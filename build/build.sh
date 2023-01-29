#!/bin/bash

TARGET_NAME="rnnoise.js"
EXPORT_NAME="initRNNoiseModule"
EXPORTED_FUNCTIONS="['_rnnoise_process_frame', '_rnnoise_init', '_rnnoise_destroy', '_rnnoise_create', '_malloc', '_free']"

echo "[build] start"

cd rnnoise

./autogen.sh

# not compile examples and doc
emconfigure ./configure --disable-examples --disable-doc

emmake make clean
# build rnnoise (show verbose)
emmake make V=1

# check if .so file exists
if [ ! -f ".libs/librnnoise.so" ]; then
    echo "librnnoise.so not exists"
    exit
fi

# build wasm target
emcc -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT="worker" -s EXPORT_ES6=1 -s USE_ES6_IMPORT_META=1 -s MODULARIZE=1 -s SINGLE_FILE=1 -s WASM_ASYNC_COMPILATION=0 -s EXPORT_NAME=${EXPORT_NAME} -s EXPORTED_FUNCTIONS="${EXPORTED_FUNCTIONS}" .libs/librnnoise.so -o ${TARGET_NAME}

# check if target file exists
if [ ! -f ${TARGET_NAME} ]; then
    echo "${TARGET_NAME} not exists"
    exit
fi

mv ${TARGET_NAME} ..

# clean possible changes
git clean -f -d

echo "[build] success"
