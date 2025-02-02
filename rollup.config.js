import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/parser.js",
  output: [
    {
      format: "es",
      file: "./dist/index.js",
    },
    {
      format: "cjs",
      file: "./dist/index.cjs",
    },
  ],
  plugins: [nodeResolve()],
};
