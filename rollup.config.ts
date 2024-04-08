import type { RollupOptions } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };

const config: RollupOptions[] = [
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'named'
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.ts',
          '**/*.stories.tsx'
        ]
      }),
      terser()
    ],
    external: [
      'react',
      'react-dom',
      'pluralize',
      'styled-components',
      'react-helmet-async'
    ]
  },
  {
    input: './dist/esm/types/src/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()]
  }
];

export default config;
