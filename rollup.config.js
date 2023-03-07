import ts from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./src/index.ts",
    output: {
      file: "./dist/ns-util.js",
      format: "esm",
    },
    plugins: [ts()],
  },
  {
    input: "./src/NoiseSuppressionWorklet.ts",
    output: {
      file: "./dist/ns-worklet.js",
      format: "esm",
    },
    plugins: [ts(), resolve()],
  },
];
