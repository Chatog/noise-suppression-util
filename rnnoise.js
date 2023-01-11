
var initRNNoiseModule = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(initRNNoiseModule) {
  initRNNoiseModule = initRNNoiseModule || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof initRNNoiseModule != 'undefined' ? initRNNoiseModule : {};

// See https://caniuse.com/mdn-javascript_builtins_object_assign

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_rnnoise_process_frame')) {
        Object.defineProperty(Module['ready'], '_rnnoise_process_frame', { configurable: true, get: function() { abort('You are getting _rnnoise_process_frame on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_rnnoise_process_frame', { configurable: true, set: function() { abort('You are setting _rnnoise_process_frame on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_rnnoise_init')) {
        Object.defineProperty(Module['ready'], '_rnnoise_init', { configurable: true, get: function() { abort('You are getting _rnnoise_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_rnnoise_init', { configurable: true, set: function() { abort('You are setting _rnnoise_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_rnnoise_destroy')) {
        Object.defineProperty(Module['ready'], '_rnnoise_destroy', { configurable: true, get: function() { abort('You are getting _rnnoise_destroy on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_rnnoise_destroy', { configurable: true, set: function() { abort('You are setting _rnnoise_destroy on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_rnnoise_create')) {
        Object.defineProperty(Module['ready'], '_rnnoise_create', { configurable: true, get: function() { abort('You are getting _rnnoise_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_rnnoise_create', { configurable: true, set: function() { abort('You are setting _rnnoise_create on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = true;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  if (e && typeof e == 'object' && e.stack) {
    toLog = [e, e.stack];
  }
  err('exiting due to exception: ' + toLog);
}

if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      const data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    let data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer == 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data == 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(() => onload(readBinary(f)), 0);
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit == 'function') {
    quit_ = (status, toThrow) => {
      logExceptionOnExit(toThrow);
      quit(status);
    };
  }

  if (typeof print != 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console == 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr != 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js


  read_ = (url) => {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

if (Module['quit']) quit_ = Module['quit'];legacyModuleProp('quit', 'quit_');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('read', 'read_');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';
function alignMemory() { abort('`alignMemory` is now a library function and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line'); }

assert(!ENVIRONMENT_IS_WEB, "web environment detected but not enabled at build time.  Add 'web' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");




var STACK_ALIGN = 16;
var POINTER_SIZE = 4;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': case 'u8': return 1;
    case 'i16': case 'u16': return 2;
    case 'i32': case 'u32': return 4;
    case 'i64': case 'u64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length - 1] === '*') {
        return POINTER_SIZE;
      } else if (type[0] === 'i') {
        const bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// This gives correct answers for everything less than 2^{14} = 16384
// I hope nobody is contemplating functions with 16384 arguments...
function uleb128Encode(n) {
  assert(n < 16384);
  if (n < 128) {
    return [n];
  }
  return [(n % 128) | 128, n >> 7];
}

// Converts a signature like 'vii' into a description of the wasm types, like
// { parameters: ['i32', 'i32'], results: [] }.
function sigToWasmTypes(sig) {
  var typeNames = {
    'i': 'i32',
    'j': 'i64',
    'f': 'f32',
    'd': 'f64',
    'p': 'i32',
  };
  var type = {
    parameters: [],
    results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
  };
  for (var i = 1; i < sig.length; ++i) {
    assert(sig[i] in typeNames, 'invalid signature char: ' + sig[i]);
    type.parameters.push(typeNames[sig[i]]);
  }
  return type;
}

// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function == "function") {
    return new WebAssembly.Function(sigToWasmTypes(sig), func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'p': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection = typeSection.concat(uleb128Encode(sigParam.length));
  for (var i = 0; i < sigParam.length; ++i) {
    assert(sigParam[i] in typeCodes, 'invalid signature char: ' + sigParam[i]);
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the section code and overall length of the type section into the
  // section header
  typeSection = [0x01 /* Type section code */].concat(
    uleb128Encode(typeSection.length),
    typeSection
  );

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

function updateTableMap(offset, count) {
  for (var i = offset; i < offset + count; i++) {
    var item = getWasmTableEntry(i);
    // Ignore null values.
    if (item) {
      functionsInTableMap.set(item, i);
    }
  }
}

/**
 * Add a function to the table.
 * 'sig' parameter is required if the function being added is a JS function.
 * @param {string=} sig
 */
function addFunction(func, sig) {
  assert(typeof func != 'undefined');

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    updateTableMap(0, wasmTable.length);
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    setWasmTableEntry(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig != 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    setWasmTableEntry(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(getWasmTableEntry(index));
  freeTableIndexes.push(index);
}

// end include: runtime_functions.js
// include: runtime_debug.js


function legacyModuleProp(prop, newName) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get: function() {
        abort('Module.' + prop + ' has been replaced with plain ' + newName + ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort('`Module.' + prop + '` was supplied but `' + prop + '` not included in INCOMING_MODULE_JS_API');
  }
}

function unexportedMessage(sym, isFSSybol) {
  var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
  if (isFSSybol) {
    msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
  }
  return msg;
}

function unexportedRuntimeSymbol(sym, isFSSybol) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get: function() {
        abort(unexportedMessage(sym, isFSSybol));
      }
    });
  }
}

function unexportedRuntimeFunction(sym, isFSSybol) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Module[sym] = () => abort(unexportedMessage(sym, isFSSybol));
  }
}

// end include: runtime_debug.js
var tempRet0 = 0;
var setTempRet0 = (value) => { tempRet0 = value; };
var getTempRet0 = () => tempRet0;



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');
var noExitRuntime = Module['noExitRuntime'] || true;legacyModuleProp('noExitRuntime', 'noExitRuntime');

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') {
      
      return UTF8ToString(ret);
    }
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }

  ret = onDone(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// include: runtime_legacy.js


var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

/**
 * allocate(): This function is no longer used by emscripten but is kept around to avoid
 *             breaking external users.
 *             You should normally not use allocate(), and instead allocate
 *             memory using _malloc()/stackAlloc(), initialize it with
 *             setValue(), and so forth.
 * @param {(Uint8Array|Array<number>)} slab: An array of data.
 * @param {number=} allocator : How to allocate memory, see ALLOC_*
 */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator == 'number', 'allocate no longer takes a type argument')
  assert(typeof slab != 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (!slab.subarray && !slab.slice) {
    slab = new Uint8Array(slab);
  }
  HEAPU8.set(slab, ret);
  return ret;
}

// end include: runtime_legacy.js
// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.
/**
 * heapOrArray is either a regular array, or a JavaScript typed array view.
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heapOrArray[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heapOrArray[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heapOrArray[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 0x10FFFF) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === (str.charCodeAt(i) & 0xff));
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

var HEAP,
/** @type {!ArrayBuffer} */
  buffer,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;legacyModuleProp('INITIAL_MEMORY', 'INITIAL_MEMORY');

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAP32[((max)>>2)] = 0x2135467;
  HEAP32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten at 0x' + max.toString(16) + ', expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' 0x' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

function keepRuntimeAlive() {
  return noExitRuntime;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
/** @param {boolean=} fixedasm */
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile;
  wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABi4GAgAAVYAABf2ABfwF/YAF/AGAAAGADf39/AGADf39/AX9gAXwBfGACf38Bf2AEf39/fwBgBX9/f39/AGAFf39/f38Bf2AGf39/f39/AGADf39/AX1gB39/f39/f30BfWACf38AYAZ/f39/f38Bf2ACfHwBfGACfH8Bf2ADfHx/AXxgAnx/AXxgA39+fwF+ArqAgIAAAgNlbnYVZW1zY3JpcHRlbl9tZW1jcHlfYmlnAAQDZW52FmVtc2NyaXB0ZW5fcmVzaXplX2hlYXAAAQO9gICAADwDBwECCwwDBAQICAkJDQoIDgQEDxAKERIGBQUFBgYTBgECAgIAAwAAAAMAAwEHBQECAgcBAAIBAwAAAAEEhYCAgAABcAEBAQWHgICAAAEBgAKAgAIGn4CAgAAFfwFB4PrFAgt/AUEAC38BQQALfwBBxNIFC38AQQALB8OCgIAAEgZtZW1vcnkCABFfX3dhc21fY2FsbF9jdG9ycwACDHJubm9pc2VfaW5pdAADDnJubm9pc2VfY3JlYXRlAAQPcm5ub2lzZV9kZXN0cm95AAUEZnJlZQAzFXJubm9pc2VfcHJvY2Vzc19mcmFtZQAHBm1hbGxvYwAxEF9fZXJybm9fbG9jYXRpb24AKBlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQAGZmZsdXNoAD0VZW1zY3JpcHRlbl9zdGFja19pbml0ADkZZW1zY3JpcHRlbl9zdGFja19nZXRfZnJlZQA6GWVtc2NyaXB0ZW5fc3RhY2tfZ2V0X2Jhc2UAOxhlbXNjcmlwdGVuX3N0YWNrX2dldF9lbmQAPAlzdGFja1NhdmUANgxzdGFja1Jlc3RvcmUANwpzdGFja0FsbG9jADgKs/uBgAA8CAAQORAtECsLVwAgAEEAQbyQARAdIgAgASMDIAEbIgE2AqyQASAAQbCQAWpBBCABKAIIEDQ2AgAgAEG0kAFqQQQgASgCEBA0NgIAIABBuJABakEEIAEoAhgQNDYCAEEAC1sBAn8jAyEBQQFBvJABEDQiAiAAIAEgABsiADYCrJABIAJBsJABakEEIAAoAggQNDYCACACQbSQAWpBBCAAKAIQEDQ2AgAgAkG4kAFqQQQgACgCGBA0NgIAIAILKgAgAEGwkAFqKAIAEDMgAEG0kAFqKAIAEDMgAEG4kAFqKAIAEDMgABAzC/EJAgV/BX0jAEHAIGsiBiQAQQAhByAGQbAUakEAQaQLEB0aA0BDAACAPyELAkAgBCAHQQJ0IghqKgIAIgwgBSAIaioCACINXg0AIAwgDJQiC0MAAIA/IA0gDZQiDJOUu0MAAIA/IAuTIAyUu0T8qfHSTWJQP6CjtiELCyAGQeAfaiAIaiACIAhqKgIAuyADIAhqKgIAu0Q6jDDijnlFPqCjn0MAAIA/QwAAAABDAAAAACALIAtDAAAAAF0iCBtDAACAP14iCRsiDCAMIAsgCRsgCBuRu6K2OAIAIAdBAWoiB0EWRw0AC0EAIQMgBkHQEGpBAEHhAxAdGkEAIQQDQCADIQgCQCMEQYAIaiAEIglBAWoiBEEBdGouAQAiAyAIQRB0QRB1IghrIgVBAUgNACAIQQJ0IQcgBUECdCIFsiELIAZB4B9qIARBAnRqKgIAIQwgBkHgH2ogCUECdGoqAgAhDUEAIQgDQCAGQdAQaiAIIAdqQQJ0akMAAIA/IAiyIAuVIg6TIA2UIA4gDJSSOAIAIAZB0BBqIAhBAXIiCSAHakECdGpDAACAPyAJsiALlSIOkyANlCAOIAyUkjgCACAIQQJqIgggBUcNAAsLIARBFUcNAAtBACEIA0AgACAIQQN0IglqIgcgBkHQEGogCEECdGoqAgAiCyABIAlqIgkqAgCUIAcqAgCSOAIAIAcgCyAJKgIElCAHKgIEkjgCBCAIQQFqIghB4QNHDQALQQAhAyAGQQBB2AAQHSEEQQAhBQNAIAMhCAJAIwRBgAhqIAUiBkEBaiIFQQF0ai4BACIDIAhBEHRBEHUiCGsiCUEBSA0AIAhBAnQhByAJQQJ0IgmyIQ8gBCAFQQJ0aiIKKgIAIQsgBCAGQQJ0aiIBKgIAIQxBACEIA0AgCLIgD5UiDSAAIAggB2pBA3RqIgYqAgQiDiAOlCAGKgIAIg4gDpSSIg6UIAuSIQtDAACAPyANkyAOlCAMkiEMIAhBAWoiCCAJRw0ACyABIAw4AgAgCiALOAIACyAFQRVHDQALIAQgBCoCACILIAuSOAIAIAQgBCoCVCILIAuSOAJUIARB8A9qIARB2AAQGxpBACEIIARB4ANqQQBBpAsQHRoDQCAEQZAPaiAIQQJ0IgZqIAIgBmoqAgC7IARB8A9qIAZqKgIAu0Q6jDDijnlFPqCjn7Y4AgAgCEEBaiIIQRZHDQALQQAhAiAEQQBB4QMQHSEGQQAhBANAIAIhCAJAIwRBgAhqIAQiCUEBaiIEQQF0ai4BACICIAhBEHRBEHUiCGsiBUEBSA0AIAhBAnQhByAFQQJ0IgWyIQsgBkGQD2ogBEECdGoqAgAhDCAGQZAPaiAJQQJ0aioCACENQQAhCANAIAYgCCAHakECdGpDAACAPyAIsiALlSIOkyANlCAOIAyUkjgCACAGIAhBAXIiCSAHakECdGpDAACAPyAJsiALlSIOkyANlCAOIAyUkjgCACAIQQJqIgggBUcNAAsLIARBFUcNAAtBACEIAkADQCAAIAhBA3RqIgcgBiAIQQJ0aioCACILIAcqAgCUOAIAIAcgCyAHKgIElDgCBCAIQQFyIglB4QNGDQEgACAJQQN0aiIHIAYgCUECdGoqAgAiCyAHKgIAlDgCACAHIAsgByoCBJQ4AgQgCEECaiEIDAALAAsgBkHAIGokAAuFLgMOfwh9AnwjAEHArgJrIgMkAEEAIQQgA0EQakEAQYQPEB0aIANBgICA/AM2AhAgA0EANgIMIABB0I8BaioCACERIAAqAsyPASESA0AgACACIARBAnQiBWoqAgAiE7siGSATIBKSIhO7IhpEAAAAYDvf77+ioLYiFDgC0I8BIAAgGkQAAABAk+//P6IgGSAZoKEgEbugtiISOALMjwEgA0HwEmogBWogEzgCACAUIREgBEEBaiIEQeADRw0ACyADQfAhaiAAQYAPEBsaIANB8CFqQYAPaiADQfASakGADxAbGiAAIANB8BJqQYAPEBshBhAIQQAhBANAIANB8CFqIARBAnQiAGoiBSMEQYDTBWpBCGoiAiAAaioCACIRIAUqAgCUOAIAIANB8CFqQb8HIARrQQJ0aiIFIBEgBSoCAJQ4AgAgA0HwIWogAEEEciIAaiIFIAIgAGoqAgAiESAFKgIAlDgCACADQfAhakG+ByAEa0ECdGoiACARIAAqAgCUOAIAIARBAmoiBEHgA0cNAAsQCEEAIQQDQCADQcDyAWogBEEDdGoiAEEANgIEIAAgA0HwIWogBEECdGoqAgA4AgAgA0HA8gFqIARBAXIiAEEDdGoiBSADQfAhaiAAQQJ0aioCADgCACAFQQA2AgQgA0HA8gFqIARBAnIiAEEDdGoiBSADQfAhaiAAQQJ0aioCADgCACAFQQA2AgQgA0HA8gFqIARBA3IiAEEDdGoiBSADQfAhaiAAQQJ0aioCADgCACAFQQA2AgQgBEEEaiIEQcAHRw0ACyMEQYDTBWooAgQgA0HA8gFqIANBwLYBahATIANB8N0AaiADQcC2AWpBiB4QGxpBACEHIANBwPIBakEAQdgAEB0aQQAhCANAIAchBAJAIwRBgAhqIAgiAEEBaiIIQQF0ai4BACIHIARBEHRBEHUiBGsiAkEBSA0AIARBAnQhBSACQQJ0IgKyIRUgA0HA8gFqIAhBAnRqIgkqAgAhESADQcDyAWogAEECdGoiCioCACESQQAhBANAIASyIBWVIhMgA0Hw3QBqIAQgBWpBA3RqIgAqAgQiFCAUlCAAKgIAIhQgFJSSIhSUIBGSIRFDAACAPyATkyAUlCASkiESIARBAWoiBCACRw0ACyAKIBI4AgAgCSAROAIACyAIQRVHDQALIAMgAyoCwPIBIhEgEZI4AsDyASADIAMqApTzASIRIBGSOAKU8wEgA0GQEmogA0HA8gFqQdgAEBsaIAZBxCNqIAZBxDJqQYAnEBwhBCAGQcTKAGogA0HwEmpBgA8QGxogAyAENgLYfCADQdj8AGogA0Hg/ABqQcANQQEQDCADQeCIAWogA0Hg/ABqQcAHQcwEIANB3PwAahAOIANBgAYgAygC3HxrNgLcfCADQeD8AGpBgAZBPEHAByADQdz8AGogBigCyI8BIAYqAsSPARAPIREgAygC3HwhBCAGIBE4AsSPASAGIAQ2AsiPASADQcCYAWogBiAEQQJ0a0HEO2pBgB4QGxoQCEEAIQQDQCADQcCYAWogBEECdCIAaiIFIwRBgNMFakEIaiICIABqKgIAIhEgBSoCAJQ4AgAgA0HAmAFqQb8HIARrQQJ0aiIFIBEgBSoCAJQ4AgAgA0HAmAFqIABBBHIiAGoiBSACIABqKgIAIhEgBSoCAJQ4AgAgA0HAmAFqQb4HIARrQQJ0aiIAIBEgACoCAJQ4AgAgBEECaiIEQeADRw0ACxAIQQAhBANAIANBwPIBaiAEQQN0aiIAQQA2AgQgACADQcCYAWogBEECdGoqAgA4AgAgA0HA8gFqIARBAXIiAEEDdGoiBSADQcCYAWogAEECdGoqAgA4AgAgBUEANgIEIANBwPIBaiAEQQJyIgBBA3RqIgUgA0HAmAFqIABBAnRqKgIAOAIAIAVBADYCBCADQcDyAWogBEEDciIAQQN0aiIFIANBwJgBaiAAQQJ0aioCADgCACAFQQA2AgQgBEEEaiIEQcAHRw0ACyMEQYDTBWooAgQgA0HA8gFqIANBwLYBahATIANB8CFqIANBwLYBakGIHhAbGkEAIQcgA0HA8gFqQQBB2AAQHRpBACEIA0AgByEEAkAjBEGACGogCCIAQQFqIghBAXRqLgEAIgcgBEEQdEEQdSIEayICQQFIDQAgBEECdCEFIAJBAnQiArIhFSADQcDyAWogCEECdGoiCSoCACERIANBwPIBaiAAQQJ0aiIKKgIAIRJBACEEA0AgBLIgFZUiEyADQfAhaiAEIAVqQQN0aiIAKgIEIhQgFJQgACoCACIUIBSUkiIUlCARkiERQwAAgD8gE5MgFJQgEpIhEiAEQQFqIgQgAkcNAAsgCiASOAIAIAkgETgCAAsgCEEVRw0ACyADIAMqAsDyASIRIBGSOALA8gEgAyADKgKU8wEiESARkjgClPMBIANBsBFqIANBwPIBakHYABAbGkEAIQogA0HA8gFqQQBB2AAQHRpBACEHA0AgCiEEAkAjBEGACGogByIAQQFqIgdBAXRqLgEAIgogBEEQdEEQdSIEayIFQQFIDQAgBEECdCECIAVBAnQiCLIhFSADQcDyAWogB0ECdGoiCyoCACERIANBwPIBaiAAQQJ0aiIJKgIAIRJBACEEA0AgBLIgFZUiEyADQfDdAGogBCACakEDdCIAaiIFKgIEIANB8CFqIABqIgAqAgSUIAUqAgAgACoCAJSSIhSUIBGSIRFDAACAPyATkyAUlCASkiESIARBAWoiBCAIRw0ACyAJIBI4AgAgCyAROAIACyAHQRVHDQALIAMgAyoCwPIBIhEgEZI4AsDyASADIAMqApTzASIRIBGSOAKU8wEgA0HQEGogA0HA8gFqQdgAEBsaQQAhBANAIANB0BBqIARBAnQiAGoiBSAFKgIAuyADQZASaiAAaioCACADQbARaiAAaioCAJS7RPyp8dJNYlA/oJ+jtjgCACAEQQFqIgRBFkcNAAsQCEEAIQADQEMAAAAAIRFBACEEA0AjBCEFIANB0BBqIARBAXIiAkECdGoqAgAgBUGA0wVqQYgPaiIFIAJBFmwgAGpBAnRqKgIAlCADQdAQaiAEQQJ0aioCACAFIARBFmwgAGpBAnRqKgIAlCARkpIhESAEQQJqIgRBFkcNAAsgA0GA/ABqIABBAnRqIBG7RCZoFT32S9M/orY4AgAgAEEBaiIAQRZHDQALIANBsBBqIAMpA4h8NwMAIANBuBBqIANBkPwAaikDADcDACADIAMpA4B8NwOoECADIAMoAtx8QdR9ardEexSuR+F6hD+itjgCwBAgAyADKgKoELtEzczMzMzM9L+gtjgCqBAgAyADKgKsELtEzczMzMzM7L+gtjgCrBBDAAAAACETQQAhBEMAAADAIRJDAAAAwCERA0AgA0HglwFqIARBAnQiAGogEkMAAODAkiIUIBG7RAAAAAAAAPi/oCIZIANBkBJqIABqKgIAIhW7RHsUrkfheoQ/oBAftrsiGiAZIBpkGyIatiAaIBS7YxsiETgCACASIBEgEiARXhshEiAZtiARIBkgEbtkGyERIBMgFZIhEyAEQQFqIgRBFkcNAAsCQAJAIBO7RHsUrkfheqQ/Yw0AEAhBACEAA0BDAAAAACERQQAhBANAIwQhBSADQeCXAWogBEEBciICQQJ0aioCACAFQYDTBWpBiA9qIgUgAkEWbCAAakECdGoqAgCUIANB4JcBaiAEQQJ0aioCACAFIARBFmwgAGpBAnRqKgIAlCARkpIhESAEQQJqIgRBFkcNAAsgA0GgD2ogAEECdGogEbtEJmgVPfZL0z+itjgCACAAQQFqIgBBFkcNAAsgAyoCoA8hEiAGQYAPaiIFIAYoAsAUIgBB2ABsaiIEIAMqAqQPQwAAgMCSIhE4AgQgBCASQwAAQMGSIhI4AgAgBCADKgKoDyITOAIIIAQgAyoCrA8iFDgCDCAEIAMqArAPIhU4AhAgBCADKgK0DyIWOAIUIAQgAyoCuA84AhggBCADKgK8DzgCHCAEIAMqAsAPOAIgIAQgAyoCxA84AiQgBCADKgLIDzgCKCAEIAMqAswPOAIsIAQgAyoC0A84AjAgBCADKgLUDzgCNCAEIAMqAtgPOAI4IAQgAyoC3A84AjwgBCADKgLgDzgCQCAEIAMqAuQPOAJEIAQgAyoC6A84AkggBCADKgLsDzgCTCAEIAMqAvAPOAJQIAQgAyoC9A84AlQgBiAAQQFqIgI2AsAUIAUgAEEHQX8gAEEBSBtqQdgAbGoiBCoCACEXIAMgEiAFIABBBkF+IABBAkgbakHYAGxqIgAqAgAiGJM4AvgPIAMgGCASIBeSkjgCoA8gAyAYIBIgFyAXkpOSOAKQECAEKgIEIRIgAyARIAAqAgQiF5M4AvwPIAMgFyARIBKSkjgCpA8gAyAXIBEgEiASkpOSOAKUECAEKgIIIREgAyATIAAqAggiEpM4AoAQIAMgEiATIBGSkjgCqA8gAyASIBMgESARkpOSOAKYECAEKgIMIREgAyAUIAAqAgwiEpM4AoQQIAMgEiAUIBGSkjgCrA8gAyASIBQgESARkpOSOAKcECAEKgIQIREgAyAVIAAqAhAiEpM4AogQIAMgEiAVIBGSkjgCsA8gAyASIBUgESARkpOSOAKgECAEKgIUIREgAyAWIAAqAhQiEpM4AowQIAMgEiAWIBGSkjgCtA8gAyASIBYgESARkpOSOAKkEAJAIAJBCEcNACAGQQA2AsAUC0MAAAAAIRVBACEMIAZB2A9qIQggBkGwEGohByAGQYgRaiEKIAZB4BFqIQkgBkG4EmohCyAGQZATaiENIAZB6BNqIQ4DQEMAAAAAIRFBACEEA0AgBSAMQdgAbCIPaiICIARBAnQiAEEEciIQaioCACAFIBBqKgIAkyISIBKUIAIgAGoqAgAgBSAAaioCAJMiEiASlCARkpIhESAEQQJqIgRBFkcNAAtBACEAQwAAAAAhEgNAIAYgD2pBgA9qIgQgAEECdCICQQRyIhBqKgIAIAggEGoqAgCTIhMgE5QgBCACaioCACAIIAJqKgIAkyITIBOUIBKSkiESIABBAmoiAEEWRw0AC0OpX2NYIBEgEUOpX2NYXhtDqV9jWCAMGyEUQQAhAEMAAAAAIREDQCAEIABBAnQiAkEEciIPaioCACAHIA9qKgIAkyITIBOUIAQgAmoqAgAgByACaioCAJMiEyATlCARkpIhESAAQQJqIgBBFkcNAAsgFCAUIBIgFCASXRsgDEEBRhshFEEAIQBDAAAAACESA0AgBCAAQQJ0IgJBBHIiD2oqAgAgCiAPaioCAJMiEyATlCAEIAJqKgIAIAogAmoqAgCTIhMgE5QgEpKSIRIgAEECaiIAQRZHDQALIBQgFCARIBQgEV0bIAxBAkYbIRRBACEAQwAAAAAhEQNAIAQgAEECdCICQQRyIg9qKgIAIAkgD2oqAgCTIhMgE5QgBCACaioCACAJIAJqKgIAkyITIBOUIBGSkiERIABBAmoiAEEWRw0ACyAUIBQgEiAUIBJdGyAMQQNGGyEUQQAhAEMAAAAAIRIDQCAEIABBAnQiAkEEciIPaioCACALIA9qKgIAkyITIBOUIAQgAmoqAgAgCyACaioCAJMiEyATlCASkpIhEiAAQQJqIgBBFkcNAAsgFCAUIBEgFCARXRsgDEEERhshFEEAIQBDAAAAACERA0AgBCAAQQJ0IgJBBHIiD2oqAgAgDSAPaioCAJMiEyATlCAEIAJqKgIAIA0gAmoqAgCTIhMgE5QgEZKSIREgAEECaiIAQRZHDQALIBQgFCASIBQgEl0bIAxBBUYbIRRBACEAQwAAAAAhEgNAIAQgAEECdCICQQRyIg9qKgIAIA4gD2oqAgCTIhMgE5QgBCACaioCACAOIAJqKgIAkyITIBOUIBKSkiESIABBAmoiAEEWRw0ACyAVIBQgFCARIBQgEV0bIAxBBkYbIhEgESASIBEgEl0bIAxBB0YbkiEVIAxBAWoiDEEIRw0ACyADIBVDAAAAPpS7RM3MzMzMzADAoLY4AsQQIAZBrJABaiADQeD8AGogA0EMaiADQaAPahALIANB8N0AaiADQfAhaiADQZASaiADQbARaiADQdAQaiADQeD8AGoQBkEAIQQgBkHUjwFqIQUDQCADQeD8AGogBEECdCIAaiICIAIqAgAiESAFIABqIgIqAgBDmpkZP5QiEiARIBJeGyIROAIAIAIgETgCACADQeD8AGogAEEEciIAaiICIAIqAgAiESAFIABqIgAqAgBDmpkZP5QiEiARIBJeGyIROAIAIAAgETgCACAEQQJqIgRBFkcNAAtBACEHIANBEGpBAEHhAxAdGkEAIQgDQCAHIQQCQCMEQYAIaiAIIgVBAWoiCEEBdGouAQAiByAEQRB0QRB1IgRrIgJBAUgNACAEQQJ0IQAgAkECdCICsiERIANB4PwAaiAIQQJ0aioCACESIANB4PwAaiAFQQJ0aioCACETQQAhBANAIANBEGogBCAAakECdGpDAACAPyAEsiARlSIUkyATlCAUIBKUkjgCACADQRBqIARBAXIiBSAAakECdGpDAACAPyAFsiARlSIUkyATlCAUIBKUkjgCACAEQQJqIgQgAkcNAAsLIAhBFUcNAAtBACEEA0AgA0Hw3QBqIARBA3RqIgAgA0EQaiAEQQJ0aioCACIRIAAqAgCUOAIAIAAgESAAKgIElDgCBCAEQQFyIgVB4QNGDQIgA0Hw3QBqIAVBA3RqIgAgA0EQaiAFQQJ0aioCACIRIAAqAgCUOAIAIAAgESAAKgIElDgCBCAEQQJqIQQMAAsACyADQaAPakEAQagBEB0aCxAIIANBwPIBaiADQfDdAGpBiB4QGxpB4QMhBAJAA0AgA0HA8gFqIARBA3RqIgAgA0HA8gFqQcAHIARrQQN0aiIFKgIAOAIAIAAgBSoCBIw4AgQgBEEBaiIAQcAHRg0BIANBwPIBaiAAQQN0aiIAIANBwPIBakG/ByAEa0EDdGoiBSoCADgCACAAIAUqAgSMOAIEIARBAmohBAwACwALIwRBgNMFaigCBCADQcDyAWogA0HAtgFqEBMgAyADKgLAtgFDAABwRJQ4AsCYAUEBIQQCQANAIANBwJgBaiAEQQJ0aiIAQQRqIANBwLYBakG/ByAEa0EDdGoqAgBDAABwRJQ4AgAgACADQcC2AWpBwAcgBGtBA3RqKgIAQwAAcESUOAIAIABBCGogA0HAtgFqQb4HIARrQQN0aioCAEMAAHBElDgCACAEQQNqIgBBwAdGDQEgA0HAmAFqIABBAnRqIANBwLYBakG9ByAEa0EDdGoqAgBDAABwRJQ4AgAgBEEEaiEEDAALAAsQCEEAIQBBACEEA0AgA0HAmAFqIARBAnQiBWoiAiMEQYDTBWpBCGoiCCAFaioCACIRIAIqAgCUOAIAIANBwJgBakG/ByAEa0ECdGoiAiARIAIqAgCUOAIAIANBwJgBaiAFQQRyIgVqIgIgCCAFaioCACIRIAIqAgCUOAIAIANBwJgBakG+ByAEa0ECdGoiBSARIAUqAgCUOAIAIARBAmoiBEHgA0cNAAsgBkHEFGohBQNAIAEgAEECdCIEaiADQcCYAWogBGoqAgAgBSAEaioCAJI4AgAgASAEQQRqIgJqIANBwJgBaiACaioCACAFIAJqKgIAkjgCACABIARBCGoiBGogA0HAmAFqIARqKgIAIAUgBGoqAgCSOAIAIABBA2oiAEHgA0cNAAsgBkHEFGogA0HAmAFqQYAPakGADxAbGiADKgIMIREgA0HArgJqJAAgEQudAgMDfwJ8AX0CQCMEQYDTBWooAgANAEEAIQAjBEGA0wVqQcAHQQBBAEEAQQAQEDYCBEEAIQEDQCMEQYDTBWogAUECdGpBCGogAbdEAAAAAAAA4D+gRBgtRFT7Ifk/okQAAAAAAAB+QKMQISIDIANEGC1EVPsh+T+iohAhtjgCACABQQFqIgFB4ANHDQALA0AgAEEWbCECIAC3RAAAAAAAAOA/oCEEQQAhAQNAIAQgAbeiRBgtRFT7IQlAokQAAAAAAAA2QKMQGiEDIwRBgNMFaiABIAJqQQJ0akGID2ogA7YiBSAFu0TNO39mnqDmP6K2IAEbOAIAIAFBAWoiAUEWRw0ACyAAQQFqIgBBFkcNAAsjBEGA0wVqQQE2AgALC/YHAwp/An0BfAJAIAAoAgwiA0EBSA0AIAAoAggiBEF+cSEFIARBAXEhBiAAKAIAIQdBACEIA0AgByAIaiwAALIhDQJAIARBAUgNACAAKAIEIQlBACEKQQAhCwJAIARBAUYNAANAIAkgCkEBciIMIANsIAhqaiwAALIgAiAMQQJ0aioCAJQgCSAKIANsIAhqaiwAALIgAiAKQQJ0aioCAJQgDZKSIQ0gCkECaiEKIAtBAmoiCyAFRw0ACwsgBkUNACAJIAogA2wgCGpqLAAAsiACIApBAnRqKgIAlCANkiENCyABIAhBAnRqIA1DAACAO5Q4AgAgCEEBaiIIIANHDQALCwJAAkACQAJAIAAoAhAOAgACAQtBACEKIANBAEwNAgNAQwAAgD8hDQJAIAEgCkECdGoiCCoCACIOQwAAAEFdRQ0AQwAAgL8hDSAOQwAAAMFeRQ0AAkAgDiAOWw0AQwAAAAAhDQwBCwJAAkAgDowgDiAOQwAAAABdIgsbIg1DAADIQZRDAAAAP5KOIg6LQwAAAE9dRQ0AIA6oIQkMAQtBgICAgHghCQsgCbJDCtcjvZQgDZIiDkMAAIA/IwRBsAhqIAlBAnRqKgIAIg0gDZSTlEMAAIA/IA0gDpSTlCANkiINjCANIAsbIQ0LIAggDTgCACAKQQFqIgogA0cNAAwDCwALIANBAUgNASADQQNxIQJBACEJQQAhCgJAIANBf2pBA0kNACADQXxxIQxBACEKQQAhAwNAIAEgCkECdCIIaiILIAsqAgBDAAAAAJc4AgAgASAIQQRyaiILIAsqAgBDAAAAAJc4AgAgASAIQQhyaiILIAsqAgBDAAAAAJc4AgAgASAIQQxyaiIIIAgqAgBDAAAAAJc4AgAgCkEEaiEKIANBBGoiAyAMRw0ACwsgAkUNAQNAIAEgCkECdGoiCCAIKgIAQwAAAACXOAIAIApBAWohCiAJQQFqIgkgAkcNAAwCCwALIANBAUgNAEEAIQoDQEQAAAAAAADwPyEPAkAgASAKQQJ0aiIIKgIAQwAAAD+UIg1DAAAAQV1FDQBEAAAAAAAA8L8hDyANQwAAAMFeRQ0AAkAgDSANWw0ARAAAAAAAAAAAIQ8MAQsCQAJAIA2MIA0gDUMAAAAAXSILGyINQwAAyEGUQwAAAD+SjiIOi0MAAABPXUUNACAOqCEJDAELQYCAgIB4IQkLIAmyQwrXI72UIA2SIg5DAACAPyMEQbAIaiAJQQJ0aioCACINIA2Uk5RDAACAPyANIA6Uk5QgDZIiDYwgDSALG7shDwsgCCAPRAAAAAAAAOA/okQAAAAAAADgP6C2OAIAIApBAWoiCiADRw0ACwsLhxIDFH8CfQF8IwBBgAxrIgMkAAJAIAAoAhAiBEEBSA0AIARBA2whBSAEQX5xIQYgBEEBcSEHIAAoAgwiCEF+cSEJIAhBAXEhCiAEQX9qIQsgCEF/aiEMIAAoAgghDSAAKAIAIQ5BACEPA0AgDiAPaiwAALIhFwJAIAhBAUgNACAAKAIEIRBBACERQQAhEgJAIAxFDQADQCAQIBFBAXIiEyAFbCAPamosAACyIAIgE0ECdGoqAgCUIBAgESAFbCAPamosAACyIAIgEUECdGoqAgCUIBeSkiEXIBFBAmohESASQQJqIhIgCUcNAAsLIApFDQAgECARIAVsIA9qaiwAALIgAiARQQJ0aioCAJQgF5IhFwtBACERQQAhEAJAIAtFDQADQCANIBFBAXIiEiAFbCAPamosAACyIAEgEkECdGoqAgCUIA0gESAFbCAPamosAACyIAEgEUECdGoqAgCUIBeSkiEXIBFBAmohESAQQQJqIhAgBkcNAAsLAkAgB0UNACANIBEgBWwgD2pqLAAAsiABIBFBAnRqKgIAlCAXkiEXC0QAAAAAAADwPyEZAkAgF0MAAIA7lEMAAAA/lCIXQwAAAEFdRQ0ARAAAAAAAAPC/IRkgF0MAAADBXkUNAAJAIBcgF1sNAEQAAAAAAAAAACEZDAELAkACQCAXjCAXIBdDAAAAAF0iEBsiF0MAAMhBlEMAAAA/ko4iGItDAAAAT11FDQAgGKghEQwBC0GAgICAeCERCyARskMK1yO9lCAXkiIYQwAAgD8jBEGwCGogEUECdGoqAgAiFyAXlJOUQwAAgD8gFyAYlJOUIBeSIheMIBcgEBu7IRkLIANBgAhqIA9BAnRqIBlEAAAAAAAA4D+iRAAAAAAAAOA/oLY4AgAgD0EBaiIPIARHDQALIARBAUgNACAEQX5xIQYgBEEBcSEOIAhBfnEhCSAIQQFxIRQgACgCCCENIAAoAgAhCkEAIQcDQCAKIAcgBGoiD2osAACyIRcCQCAIQQFIDQAgACgCBCEQQQAhEUEAIRICQCAMRQ0AA0AgECAPIBFBAXIiEyAFbGpqLAAAsiACIBNBAnRqKgIAlCAQIA8gESAFbGpqLAAAsiACIBFBAnRqKgIAlCAXkpIhFyARQQJqIREgEkECaiISIAlHDQALCyAURQ0AIBAgDyARIAVsamosAACyIAIgEUECdGoqAgCUIBeSIRcLQQAhEUEAIRACQCALRQ0AA0AgDSAPIBFBAXIiEiAFbGpqLAAAsiABIBJBAnRqKgIAlCANIA8gESAFbGpqLAAAsiABIBFBAnRqKgIAlCAXkpIhFyARQQJqIREgEEECaiIQIAZHDQALCwJAIA5FDQAgDSAPIBEgBWxqaiwAALIgASARQQJ0aioCAJQgF5IhFwtEAAAAAAAA8D8hGQJAIBdDAACAO5RDAAAAP5QiF0MAAABBXUUNAEQAAAAAAADwvyEZIBdDAAAAwV5FDQACQCAXIBdbDQBEAAAAAAAAAAAhGQwBCwJAAkAgF4wgFyAXQwAAAABdIg8bIhdDAADIQZRDAAAAP5KOIhiLQwAAAE9dRQ0AIBioIREMAQtBgICAgHghEQsgEbJDCtcjvZQgF5IiGEMAAIA/IwRBsAhqIBFBAnRqKgIAIhcgF5STlEMAAIA/IBcgGJSTlCAXkiIXjCAXIA8buyEZCyADQYAEaiAHQQJ0aiAZRAAAAAAAAOA/okQAAAAAAADgP6C2OAIAIAdBAWoiByAERw0ACyAEQQFIDQAgBEF+cSEGIARBAXEhDiAIQX5xIQkgCEEBcSEVIARBAXQhCiAAKAIIIQ0gACgCFCEUIAAoAgAhFkEAIQcDQCAWIAcgCmoiD2osAACyIRcCQCAIQQFIDQAgACgCBCEQQQAhEUEAIRICQCAMRQ0AA0AgECAPIBFBAXIiEyAFbGpqLAAAsiACIBNBAnRqKgIAlCAQIA8gESAFbGpqLAAAsiACIBFBAnRqKgIAlCAXkpIhFyARQQJqIREgEkECaiISIAlHDQALCyAVRQ0AIBAgDyARIAVsamosAACyIAIgEUECdGoqAgCUIBeSIRcLQQAhEUEAIRACQCALRQ0AA0AgASARQQFyIhJBAnQiE2oqAgAgDSAPIBIgBWxqaiwAALKUIANBgARqIBNqKgIAlCABIBFBAnQiEmoqAgAgDSAPIBEgBWxqaiwAALKUIANBgARqIBJqKgIAlCAXkpIhFyARQQJqIREgEEECaiIQIAZHDQALCwJAIA5FDQAgASARQQJ0IhBqKgIAIA0gDyARIAVsamosAACylCADQYAEaiAQaioCAJQgF5IhFwsCQAJAAkACQCAUDgIBAAILRAAAAAAAAPA/IRkCQCAXQwAAgDuUQwAAAD+UIhdDAAAAQV1FDQBEAAAAAAAA8L8hGSAXQwAAAMFeRQ0AAkAgFyAXWw0ARAAAAAAAAAAAIRkMAQsCQAJAIBeMIBcgF0MAAAAAXSIPGyIXQwAAyEGUQwAAAD+SjiIYi0MAAABPXUUNACAYqCERDAELQYCAgIB4IRELIBGyQwrXI72UIBeSIhhDAACAPyMEQbAIaiARQQJ0aioCACIXIBeUk5RDAACAPyAXIBiUk5QgF5IiF4wgFyAPG7shGQsgGUQAAAAAAADgP6JEAAAAAAAA4D+gtiEYDAILQwAAgD8hGCAXQwAAgDuUIhdDAAAAQV1FDQFDAACAvyEYIBdDAAAAwV5FDQECQCAXIBdbDQBDAAAAACEYDAILAkACQCAXjCAXIBdDAAAAAF0iDxsiF0MAAMhBlEMAAAA/ko4iGItDAAAAT11FDQAgGKghEQwBC0GAgICAeCERCyARskMK1yO9lCAXkiIYQwAAgD8jBEGwCGogEUECdGoqAgAiFyAXlJOUQwAAgD8gFyAYlJOUIBeSIheMIBcgDxshGAwBCyAXQwAAgDuUQwAAAACXIRgLIAMgB0ECdCIRaiADQYAIaiARaioCACIXIAEgEWoqAgCUIBhDAACAPyAXk5SSOAIAIAdBAWoiByAERw0ACyAEQQFIDQAgASADIARBAnQQGxoLIANBgAxqJAALwAIBA38jAEGAHGsiBCQAIAAoAgAoAgQgBEGAGGogAxAJIAAoAgAoAgwgACgCBCAEQYAYahAKIAAoAgAoAiwgAiAAKAIEEAkCQCAAKAIAIgUoAgAiAkEBSA0AIARBgAxqIARBgBhqIAJBAnQQGxoLAkAgBSgCCCIGQQFIDQAgBEGADGogAkECdGogACgCBCAGQQJ0EBsaCyAEQYAMaiAGIAJqQQJ0aiADQagBEBsaIAUoAhQgACgCCCAEQYAMahAKAkAgACgCACIFKAIIIgJBAUgNACAEIAAoAgQgAkECdBAbGgsCQCAFKAIQIgZBAUgNACAEIAJBAnRqIAAoAgggBkECdBAbGgsgBCAGIAJqQQJ0aiADQagBEBsaIAUoAhwgACgCDCAEEAogACgCACgCJCABIAAoAgwQCSAEQYAcaiQAC+sGAgZ/DX0jAEEwayIEJAAgAkEBdSEFIAAoAgAhBgJAIAJBBEgNACAFQQIgBUECShshB0EBIQgDQCABIAhBAnRqIAhBA3QgBmoiCUF8aioCACAJQQRqKgIAkkMAAAA/lCAJKgIAkkMAAAA/lDgCACAIQQFqIgggB0cNAAsLIAEgBioCBEMAAAA/lCAGKgIAkkMAAAA/lCIKOAIAAkAgA0ECRw0AIAAoAgQhBwJAIAJBBEgNACAFQQIgBUECShshAEEBIQgDQCABIAhBAnRqIgYgCEEDdCAHaiIJQXxqKgIAIAlBBGoqAgCSQwAAAD+UIAkqAgCSQwAAAD+UIAYqAgCSOAIAIAhBAWoiCCAARw0ACwsgASAHKgIEQwAAAD+UIAcqAgCSQwAAAD+UIAqSOAIAC0EAIQggASAEQRBqQQBBAEEEIAUQFRogBCAEKgIQQ0cDgD+UOAIQIAQgBCoCFCIKQ28SA7yUQ28SAzyUIAqSOAIUIAQgBCoCGCIKQ28Sg7yUQ28SgzyUIAqSOAIYIAQgBCoCHCIKQ6abxLyUQ6abxDyUIAqSOAIcIAQgBCoCICIKQ28SA72UQ28SAz2UIAqSOAIgIAQgBEEQakEEEBQCQCACQQJIDQAgBCoCCEO9nzo/lCIKQ83MTD+UIAQqAgxDKvYnP5QiC5IhDCAEKgIEQyhcTz+UIg1DzcxMP5QgCpIhDiAEKgIAQ2ZmZj+UIgpDzcxMP5QgDZIhDyALQ83MTD+UIRAgCkPNzEw/kiERQwAAAAAhC0MAAAAAIQ1DAAAAACESQwAAAAAhCkMAAAAAIRMCQCAFQQFGDQAgBUF+cSEAQwAAAAAhFEEAIQhDAAAAACEVQwAAAAAhFkMAAAAAIQpDAAAAACETQQAhCQNAIAEgCEECdCIGaiIHIBAgFJQgDCAVlCAOIBYiC5QgDyAKIg2UIBEgEyISlCAHKgIAIgqSkpKSkjgCACABIAZBBHJqIgYgECAVlCAMIAuUIA4gDZQgDyASlCARIAqUIAYqAgAiE5KSkpKSOAIAIAhBAmohCCALIRQgDSEVIBIhFiAJQQJqIgkgAEcNAAsLIAJBAnFFDQAgASAIQQJ0aiIIIBAgC5QgDCANlCAOIBKUIA8gCpQgESATlCAIKgIAkpKSkpI4AgALIARBMGokAAviBwIMfw99QQAhBQJAIARBBEgNACAEQX1qIQYgA0F8cSEHIANBfWohCEEAIQUgA0EESCEJA0AgASAFQQJ0IgpqIgtBDGohDCALKgIIIREgCyoCBCESIAsqAgAhE0MAAAAAIRRDAAAAACEVQwAAAAAhFkMAAAAAIRcgACELQQAhDUMAAAAAIRhDAAAAACEZQwAAAAAhGkMAAAAAIRtBACEOAkAgCQ0AA0AgCyoCDCIYIAwqAgwiHJQgCyoCCCIZIAwqAggiHZQgCyoCBCIaIAwqAgQiHpQgCyoCACIfIAwqAgAiG5QgFJKSkpIhFCAYIB2UIBkgHpQgGiAblCAfIBGUIBWSkpKSIRUgGCAelCAZIBuUIBogEZQgHyASlCAWkpKSkiEWIBggG5QgGSARlCAaIBKUIB8gE5QgF5KSkpIhFyAMQRBqIQwgC0EQaiELIB4hEyAcIREgHSESIA1BBGoiDSAISA0ACyAXIRggFiEZIBUhGiAdIRIgHCERIB4hEyAHIQ4LIA5BAXIhDwJAAkAgDiADSA0AIAwhDSALIRAMAQsgDEEEaiENIAtBBGohECALKgIAIh4gDCoCACIblCAUkiEUIB4gEZQgGpIhGiAeIBKUIBmSIRkgHiATlCAYkiEYCyAOQQJyIQwCQAJAIA8gA0gNACANIQsgECEODAELIA1BBGohCyAQQQRqIQ4gECoCACIeIA0qAgAiE5QgFJIhFCAeIBuUIBqSIRogHiARlCAZkiEZIB4gEpQgGJIhGAsCQCAMIANODQAgDioCACIeIAsqAgCUIBSSIRQgHiATlCAakiEaIB4gG5QgGZIhGSAeIBGUIBiSIRgLIAIgCmogGDgCACACIApBBHJqIBk4AgAgAiAKQQhyaiAaOAIAIAIgCkEMcmogFDgCACAFQQRqIgUgBkgNAAsLAkAgBSAETg0AIANBfHEhDyADQQNxIRAgA0EBSCEGIANBf2pBA0khCQNAIAVBAnQhAwJAAkAgBkUNAEMAAAAAIREMAQsgASADaiELQQAhCEMAAAAAIRFBACEMQQAhCgJAIAkNAANAIAAgDEECdCINQQxyIg5qKgIAIAsgDmoqAgCUIAAgDUEIciIOaioCACALIA5qKgIAlCAAIA1BBHIiDmoqAgAgCyAOaioCAJQgACANaioCACALIA1qKgIAlCARkpKSkiERIAxBBGohDCAKQQRqIgogD0cNAAsLIBBFDQADQCAAIAxBAnQiDWoqAgAgCyANaioCAJQgEZIhESAMQQFqIQwgCEEBaiIIIBBHDQALCyACIANqIBE4AgAgBUEBaiIFIARHDQALCwuTEAITfwZ9IwBBEGsiBSEGIAUkACAFIQcgBSACQXxxQQ9qQXBxayIIIgUkACAFIAMgAmoiCUF8cUEPakFwcWsiBSIKJAAgAkECdSELIAogA0EBdSIMQQJ0QQ9qQXBxayINJAACQCACQQRIDQAgC0EBIAtBAUobIg5BA3EhD0EAIRBBACEKAkAgDkF/akEDSQ0AIA5B/P///wdxIRFBACEKQQAhDgNAIAggCkECdGogACAKQQN0aioCADgCACAIIApBAXIiEkECdGogACASQQN0aioCADgCACAIIApBAnIiEkECdGogACASQQN0aioCADgCACAIIApBA3IiEkECdGogACASQQN0aioCADgCACAKQQRqIQogDkEEaiIOIBFHDQALCyAPRQ0AA0AgCCAKQQJ0aiAAIApBA3RqKgIAOAIAIApBAWohCiAQQQFqIhAgD0cNAAsLAkAgCUEESA0AIAlBAnUiCkEBIApBAUobIg5BA3EhD0EAIRBBACEKAkAgDkF/akEDSQ0AIA5B/P///wdxIRFBACEKQQAhDgNAIAUgCkECdGogASAKQQN0aioCADgCACAFIApBAXIiEkECdGogASASQQN0aioCADgCACAFIApBAnIiEkECdGogASASQQN0aioCADgCACAFIApBA3IiEkECdGogASASQQN0aioCADgC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AkGAgMD/B0kNACAAIAChIQMMAQsCQAJAAkACQCAAIAEQGEEDcQ4DAAECAwsgASsDACABKwMIEBYhAwwDCyABKwMAIAErAwhBARAZmiEDDAILIAErAwAgASsDCBAWmiEDDAELIAErAwAgASsDCEEBEBkhAwsgAUEQaiQAIAMLjgQBA38CQCACQYAESQ0AIAAgASACEAAgAA8LIAAgAmohAwJAAkAgASAAc0EDcQ0AAkACQCAAQQNxDQAgACECDAELAkAgAg0AIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAkEDcUUNASACIANJDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQcAAaiEBIAJBwABqIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQAMAgsACwJAIANBBE8NACAAIQIMAQsCQCADQXxqIgQgAE8NACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLAkAgAiADTw0AA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL9gIBAn8CQCAAIAFGDQACQCABIAAgAmoiA2tBACACQQF0a0sNACAAIAEgAhAbDwsgASAAc0EDcSEEAkACQAJAIAAgAU8NAAJAIARFDQAgACEDDAMLAkAgAEEDcQ0AIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcUUNAgwACwALAkAgBA0AAkAgA0EDcUUNAANAIAJFDQUgACACQX9qIgJqIgMgASACai0AADoAACADQQNxDQALCyACQQNNDQADQCAAIAJBfGoiAmogASACaigCADYCACACQQNLDQAL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';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.includes('imported Memory') ||
        str.includes('memory import')) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');

  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  // Also pthreads and wasm workers initialize the wasm instance through this path.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193,
  // the above line no longer optimizes out down to the following line.
  // When the regression is fixed, we can remove this if/else.
  receiveInstance(result[0]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func == 'number') {
          if (callback.arg === undefined) {
            // Run the wasm function ptr with signature 'v'. If no function
            // with such signature was exported, this call does not need
            // to be emitted (and would confuse Closure)
            getWasmTableEntry(func)();
          } else {
            // If any function with signature 'vi' was exported, run
            // the callback with that signature.
            getWasmTableEntry(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }
  function demangle(func) {
      warnOnce('warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
      if (type.endsWith('*')) type = 'i32';
      switch (type) {
        case 'i1': return HEAP8[((ptr)>>0)];
        case 'i8': return HEAP8[((ptr)>>0)];
        case 'i16': return HEAP16[((ptr)>>1)];
        case 'i32': return HEAP32[((ptr)>>2)];
        case 'i64': return HEAP32[((ptr)>>2)];
        case 'float': return HEAPF32[((ptr)>>2)];
        case 'double': return Number(HEAPF64[((ptr)>>3)]);
        default: abort('invalid type for getValue: ' + type);
      }
      return null;
    }

  var wasmTableMirror = [];
  function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only
        // populated if an Error object is thrown, so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
      if (type.endsWith('*')) type = 'i32';
      switch (type) {
        case 'i1': HEAP8[((ptr)>>0)] = value; break;
        case 'i8': HEAP8[((ptr)>>0)] = value; break;
        case 'i16': HEAP16[((ptr)>>1)] = value; break;
        case 'i32': HEAP32[((ptr)>>2)] = value; break;
        case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
        case 'float': HEAPF32[((ptr)>>2)] = value; break;
        case 'double': HEAPF64[((ptr)>>3)] = value; break;
        default: abort('invalid type for setValue: ' + type);
      }
    }

  function setWasmTableEntry(idx, func) {
      wasmTable.set(idx, func);
      // With ABORT_ON_WASM_EXCEPTIONS wasmTable.get is overriden to return wrapped
      // functions so we need to call it here to retrieve the potential wrapper correctly
      // instead of just storing 'func' directly into wasmTableMirror
      wasmTableMirror[idx] = wasmTable.get(idx);
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function getHeapMax() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
        err('emscripten_realloc_buffer: Attempted to grow heap from ' + buffer.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob == 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var asmLibraryArg = {
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors", asm);

/** @type {function(...*):?} */
var _rnnoise_init = Module["_rnnoise_init"] = createExportWrapper("rnnoise_init", asm);

/** @type {function(...*):?} */
var _rnnoise_create = Module["_rnnoise_create"] = createExportWrapper("rnnoise_create", asm);

/** @type {function(...*):?} */
var _rnnoise_destroy = Module["_rnnoise_destroy"] = createExportWrapper("rnnoise_destroy", asm);

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free", asm);

/** @type {function(...*):?} */
var _rnnoise_process_frame = Module["_rnnoise_process_frame"] = createExportWrapper("rnnoise_process_frame", asm);

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc", asm);

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location", asm);

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush", asm);

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = asm["emscripten_stack_init"]

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = asm["emscripten_stack_get_free"]

/** @type {function(...*):?} */
var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = asm["emscripten_stack_get_base"]

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = asm["emscripten_stack_get_end"]

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave", asm);

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore", asm);

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc", asm);





// === Auto-generated postamble setup entry stuff ===

unexportedRuntimeFunction('ccall', false);
unexportedRuntimeFunction('cwrap', false);
unexportedRuntimeFunction('allocate', false);
unexportedRuntimeFunction('UTF8ArrayToString', false);
unexportedRuntimeFunction('UTF8ToString', false);
unexportedRuntimeFunction('stringToUTF8Array', false);
unexportedRuntimeFunction('stringToUTF8', false);
unexportedRuntimeFunction('lengthBytesUTF8', false);
unexportedRuntimeFunction('addOnPreRun', false);
unexportedRuntimeFunction('addOnInit', false);
unexportedRuntimeFunction('addOnPreMain', false);
unexportedRuntimeFunction('addOnExit', false);
unexportedRuntimeFunction('addOnPostRun', false);
unexportedRuntimeFunction('addRunDependency', true);
unexportedRuntimeFunction('removeRunDependency', true);
unexportedRuntimeFunction('FS_createFolder', false);
unexportedRuntimeFunction('FS_createPath', true);
unexportedRuntimeFunction('FS_createDataFile', true);
unexportedRuntimeFunction('FS_createPreloadedFile', true);
unexportedRuntimeFunction('FS_createLazyFile', true);
unexportedRuntimeFunction('FS_createLink', false);
unexportedRuntimeFunction('FS_createDevice', true);
unexportedRuntimeFunction('FS_unlink', true);
unexportedRuntimeFunction('getLEB', false);
unexportedRuntimeFunction('getFunctionTables', false);
unexportedRuntimeFunction('alignFunctionTables', false);
unexportedRuntimeFunction('registerFunctions', false);
unexportedRuntimeFunction('addFunction', false);
unexportedRuntimeFunction('removeFunction', false);
unexportedRuntimeFunction('prettyPrint', false);
unexportedRuntimeFunction('getCompilerSetting', false);
unexportedRuntimeFunction('print', false);
unexportedRuntimeFunction('printErr', false);
unexportedRuntimeFunction('getTempRet0', false);
unexportedRuntimeFunction('setTempRet0', false);
unexportedRuntimeFunction('callMain', false);
unexportedRuntimeFunction('abort', false);
unexportedRuntimeFunction('keepRuntimeAlive', false);
unexportedRuntimeFunction('wasmMemory', false);
unexportedRuntimeFunction('warnOnce', false);
unexportedRuntimeFunction('stackSave', false);
unexportedRuntimeFunction('stackRestore', false);
unexportedRuntimeFunction('stackAlloc', false);
unexportedRuntimeFunction('AsciiToString', false);
unexportedRuntimeFunction('stringToAscii', false);
unexportedRuntimeFunction('UTF16ToString', false);
unexportedRuntimeFunction('stringToUTF16', false);
unexportedRuntimeFunction('lengthBytesUTF16', false);
unexportedRuntimeFunction('UTF32ToString', false);
unexportedRuntimeFunction('stringToUTF32', false);
unexportedRuntimeFunction('lengthBytesUTF32', false);
unexportedRuntimeFunction('allocateUTF8', false);
unexportedRuntimeFunction('allocateUTF8OnStack', false);
unexportedRuntimeFunction('ExitStatus', false);
unexportedRuntimeFunction('intArrayFromString', false);
unexportedRuntimeFunction('intArrayToString', false);
unexportedRuntimeFunction('writeStringToMemory', false);
unexportedRuntimeFunction('writeArrayToMemory', false);
unexportedRuntimeFunction('writeAsciiToMemory', false);
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
unexportedRuntimeFunction('intArrayFromBase64', false);
unexportedRuntimeFunction('tryParseAsDataURI', false);
unexportedRuntimeFunction('ptrToString', false);
unexportedRuntimeFunction('zeroMemory', false);
unexportedRuntimeFunction('stringToNewUTF8', false);
unexportedRuntimeFunction('getHeapMax', false);
unexportedRuntimeFunction('emscripten_realloc_buffer', false);
unexportedRuntimeFunction('ENV', false);
unexportedRuntimeFunction('ERRNO_CODES', false);
unexportedRuntimeFunction('ERRNO_MESSAGES', false);
unexportedRuntimeFunction('setErrNo', false);
unexportedRuntimeFunction('inetPton4', false);
unexportedRuntimeFunction('inetNtop4', false);
unexportedRuntimeFunction('inetPton6', false);
unexportedRuntimeFunction('inetNtop6', false);
unexportedRuntimeFunction('readSockaddr', false);
unexportedRuntimeFunction('writeSockaddr', false);
unexportedRuntimeFunction('DNS', false);
unexportedRuntimeFunction('getHostByName', false);
unexportedRuntimeFunction('Protocols', false);
unexportedRuntimeFunction('Sockets', false);
unexportedRuntimeFunction('getRandomDevice', false);
unexportedRuntimeFunction('traverseStack', false);
unexportedRuntimeFunction('UNWIND_CACHE', false);
unexportedRuntimeFunction('convertPCtoSourceLocation', false);
unexportedRuntimeFunction('readAsmConstArgsArray', false);
unexportedRuntimeFunction('readAsmConstArgs', false);
unexportedRuntimeFunction('mainThreadEM_ASM', false);
unexportedRuntimeFunction('jstoi_q', false);
unexportedRuntimeFunction('jstoi_s', false);
unexportedRuntimeFunction('getExecutableName', false);
unexportedRuntimeFunction('listenOnce', false);
unexportedRuntimeFunction('autoResumeAudioContext', false);
unexportedRuntimeFunction('dynCallLegacy', false);
unexportedRuntimeFunction('getDynCaller', false);
unexportedRuntimeFunction('dynCall', false);
unexportedRuntimeFunction('handleException', false);
unexportedRuntimeFunction('runtimeKeepalivePush', false);
unexportedRuntimeFunction('runtimeKeepalivePop', false);
unexportedRuntimeFunction('callUserCallback', false);
unexportedRuntimeFunction('maybeExit', false);
unexportedRuntimeFunction('safeSetTimeout', false);
unexportedRuntimeFunction('asmjsMangle', false);
unexportedRuntimeFunction('asyncLoad', false);
unexportedRuntimeFunction('alignMemory', false);
unexportedRuntimeFunction('mmapAlloc', false);
unexportedRuntimeFunction('writeI53ToI64', false);
unexportedRuntimeFunction('writeI53ToI64Clamped', false);
unexportedRuntimeFunction('writeI53ToI64Signaling', false);
unexportedRuntimeFunction('writeI53ToU64Clamped', false);
unexportedRuntimeFunction('writeI53ToU64Signaling', false);
unexportedRuntimeFunction('readI53FromI64', false);
unexportedRuntimeFunction('readI53FromU64', false);
unexportedRuntimeFunction('convertI32PairToI53', false);
unexportedRuntimeFunction('convertI32PairToI53Checked', false);
unexportedRuntimeFunction('convertU32PairToI53', false);
unexportedRuntimeFunction('reallyNegative', false);
unexportedRuntimeFunction('unSign', false);
unexportedRuntimeFunction('strLen', false);
unexportedRuntimeFunction('reSign', false);
unexportedRuntimeFunction('formatString', false);
unexportedRuntimeFunction('setValue', false);
unexportedRuntimeFunction('getValue', false);
unexportedRuntimeFunction('PATH', false);
unexportedRuntimeFunction('PATH_FS', false);
unexportedRuntimeFunction('SYSCALLS', false);
unexportedRuntimeFunction('getSocketFromFD', false);
unexportedRuntimeFunction('getSocketAddress', false);
unexportedRuntimeFunction('JSEvents', false);
unexportedRuntimeFunction('registerKeyEventCallback', false);
unexportedRuntimeFunction('specialHTMLTargets', false);
unexportedRuntimeFunction('maybeCStringToJsString', false);
unexportedRuntimeFunction('findEventTarget', false);
unexportedRuntimeFunction('findCanvasEventTarget', false);
unexportedRuntimeFunction('getBoundingClientRect', false);
unexportedRuntimeFunction('fillMouseEventData', false);
unexportedRuntimeFunction('registerMouseEventCallback', false);
unexportedRuntimeFunction('registerWheelEventCallback', false);
unexportedRuntimeFunction('registerUiEventCallback', false);
unexportedRuntimeFunction('registerFocusEventCallback', false);
unexportedRuntimeFunction('fillDeviceOrientationEventData', false);
unexportedRuntimeFunction('registerDeviceOrientationEventCallback', false);
unexportedRuntimeFunction('fillDeviceMotionEventData', false);
unexportedRuntimeFunction('registerDeviceMotionEventCallback', false);
unexportedRuntimeFunction('screenOrientation', false);
unexportedRuntimeFunction('fillOrientationChangeEventData', false);
unexportedRuntimeFunction('registerOrientationChangeEventCallback', false);
unexportedRuntimeFunction('fillFullscreenChangeEventData', false);
unexportedRuntimeFunction('registerFullscreenChangeEventCallback', false);
unexportedRuntimeFunction('JSEvents_requestFullscreen', false);
unexportedRuntimeFunction('JSEvents_resizeCanvasForFullscreen', false);
unexportedRuntimeFunction('registerRestoreOldStyle', false);
unexportedRuntimeFunction('hideEverythingExceptGivenElement', false);
unexportedRuntimeFunction('restoreHiddenElements', false);
unexportedRuntimeFunction('setLetterbox', false);
unexportedRuntimeFunction('currentFullscreenStrategy', false);
unexportedRuntimeFunction('restoreOldWindowedStyle', false);
unexportedRuntimeFunction('softFullscreenResizeWebGLRenderTarget', false);
unexportedRuntimeFunction('doRequestFullscreen', false);
unexportedRuntimeFunction('fillPointerlockChangeEventData', false);
unexportedRuntimeFunction('registerPointerlockChangeEventCallback', false);
unexportedRuntimeFunction('registerPointerlockErrorEventCallback', false);
unexportedRuntimeFunction('requestPointerLock', false);
unexportedRuntimeFunction('fillVisibilityChangeEventData', false);
unexportedRuntimeFunction('registerVisibilityChangeEventCallback', false);
unexportedRuntimeFunction('registerTouchEventCallback', false);
unexportedRuntimeFunction('fillGamepadEventData', false);
unexportedRuntimeFunction('registerGamepadEventCallback', false);
unexportedRuntimeFunction('registerBeforeUnloadEventCallback', false);
unexportedRuntimeFunction('fillBatteryEventData', false);
unexportedRuntimeFunction('battery', false);
unexportedRuntimeFunction('registerBatteryEventCallback', false);
unexportedRuntimeFunction('setCanvasElementSize', false);
unexportedRuntimeFunction('getCanvasElementSize', false);
unexportedRuntimeFunction('demangle', false);
unexportedRuntimeFunction('demangleAll', false);
unexportedRuntimeFunction('jsStackTrace', false);
unexportedRuntimeFunction('stackTrace', false);
unexportedRuntimeFunction('getEnvStrings', false);
unexportedRuntimeFunction('checkWasiClock', false);
unexportedRuntimeFunction('flush_NO_FILESYSTEM', false);
unexportedRuntimeFunction('dlopenMissingError', false);
unexportedRuntimeFunction('setImmediateWrapped', false);
unexportedRuntimeFunction('clearImmediateWrapped', false);
unexportedRuntimeFunction('polyfillSetImmediate', false);
unexportedRuntimeFunction('uncaughtExceptionCount', false);
unexportedRuntimeFunction('exceptionLast', false);
unexportedRuntimeFunction('exceptionCaught', false);
unexportedRuntimeFunction('ExceptionInfo', false);
unexportedRuntimeFunction('exception_addRef', false);
unexportedRuntimeFunction('exception_decRef', false);
unexportedRuntimeFunction('Browser', false);
unexportedRuntimeFunction('setMainLoop', false);
unexportedRuntimeFunction('wget', false);
unexportedRuntimeFunction('FS', false);
unexportedRuntimeFunction('MEMFS', false);
unexportedRuntimeFunction('TTY', false);
unexportedRuntimeFunction('PIPEFS', false);
unexportedRuntimeFunction('SOCKFS', false);
unexportedRuntimeFunction('_setNetworkCallback', false);
unexportedRuntimeFunction('tempFixedLengthArray', false);
unexportedRuntimeFunction('miniTempWebGLFloatBuffers', false);
unexportedRuntimeFunction('heapObjectForWebGLType', false);
unexportedRuntimeFunction('heapAccessShiftForWebGLHeap', false);
unexportedRuntimeFunction('GL', false);
unexportedRuntimeFunction('emscriptenWebGLGet', false);
unexportedRuntimeFunction('computeUnpackAlignedImageSize', false);
unexportedRuntimeFunction('emscriptenWebGLGetTexPixelData', false);
unexportedRuntimeFunction('emscriptenWebGLGetUniform', false);
unexportedRuntimeFunction('webglGetUniformLocation', false);
unexportedRuntimeFunction('webglPrepareUniformLocationsBeforeFirstUse', false);
unexportedRuntimeFunction('webglGetLeftBracePos', false);
unexportedRuntimeFunction('emscriptenWebGLGetVertexAttrib', false);
unexportedRuntimeFunction('writeGLArray', false);
unexportedRuntimeFunction('AL', false);
unexportedRuntimeFunction('SDL_unicode', false);
unexportedRuntimeFunction('SDL_ttfContext', false);
unexportedRuntimeFunction('SDL_audio', false);
unexportedRuntimeFunction('SDL', false);
unexportedRuntimeFunction('SDL_gfx', false);
unexportedRuntimeFunction('GLUT', false);
unexportedRuntimeFunction('EGL', false);
unexportedRuntimeFunction('GLFW_Window', false);
unexportedRuntimeFunction('GLFW', false);
unexportedRuntimeFunction('GLEW', false);
unexportedRuntimeFunction('IDBStore', false);
unexportedRuntimeFunction('runAndAbortIfError', false);
unexportedRuntimeSymbol('ALLOC_NORMAL', false);
unexportedRuntimeSymbol('ALLOC_STACK', false);

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

    stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    _fflush(0);
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  checkUnflushedContent();

  // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
  if (keepRuntimeAlive() && !implicit) {
    var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
    readyPromiseReject(msg);
    err(msg);
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();







  return initRNNoiseModule
}
);
})();
export default initRNNoiseModule;