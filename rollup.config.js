import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import shebang from 'rollup-plugin-preserve-shebang';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const extensions = ['js', 'json', 'ts'];

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const config = {
  input: 'index.ts',
  output: {
    file: pkg.main,
    format: 'esm',
  },
  external: externals,
  plugins: [
    del({ targets: ['dist'] }),
    shebang(),
    json(),
    nodeResolve({ extensions }),
    commonjs(),
    typescript({
      tsconfigOverride: {
        exclude: ['node_modules'],
      },
    }),
  ],
};

export default config;
