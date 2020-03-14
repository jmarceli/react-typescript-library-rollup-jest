import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.tsx";
const external = ["react"];

// @param targets - object targets to build for e.g. { node: '6' }
// see https://babeljs.io/docs/en/babel-preset-env#targets
const plugins = () => [
  resolve({
    extensions, // required to avoid: Error: Could not resolve ... from ...
  }),
  babel({
    exclude: "node_modules/**",
    extensions,
  }),
  commonjs(),

  postcss({
    modules: true,
    plugins: [
      autoprefixer(),
      cssnano({
        preset: "default",
      }),
    ],
    inject: true,
    // Set `true` to extract CSS from output bundle
    // then you will need to import CSS styles explicitly with: import "this-module/some.css"
    // extract: true,
  }),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    external,
    plugins: plugins(),
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    external,
    plugins: plugins(),
  },
];
