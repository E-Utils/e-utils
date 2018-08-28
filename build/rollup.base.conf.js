import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
// import babel from 'rollup-plugin-babel';
import es3 from 'rollup-plugin-es3';
import { eslint } from 'rollup-plugin-eslint';
import pkg from '../package.json';

export default {
  input: pkg.src,
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'EUtils',
    sourcemap: true
  },
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    eslint({
      include: 'src/**',
      exclude: ['node_modules/**', 'dist/**'],
    }),
    buble({
      objectAssign: 'Object.assign',
      include: ['src/**', 'test/**'],
    }),
    es3({
      remove: ['defineProperty', 'freeze']
    })
  ],
};
