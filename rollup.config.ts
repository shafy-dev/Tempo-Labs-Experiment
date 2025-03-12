import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json' assert { type: 'json' }
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import findUnused from 'rollup-plugin-unused'
import tailwindConfig from './tailwind.config'
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'usehooks-ts', 'react/jsx-runtime'],
    plugins: [
      findUnused(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.production.json',
      }),
      postcss({
        extensions: ['.scss', '.module.scss', '.css', '.module.css'],
        extract: 'quill-design.css',
        minimize: true,
        plugins: [
          postcssImport(),
          autoprefixer(),
          tailwindcss(tailwindConfig),
          cssnano(),
        ],
      }),
      terser(),
    ],
    makeAbsoluteExternalsRelative: true,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [
      dts({
        tsconfig: './tsconfig.production.json',
      }),
    ],
    external: [/\.scss$/, /\.css$/, /\.test.ts$/, /\.test.tsx$/],
  },
])
