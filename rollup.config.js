// minifyに用
import { terser as pluginTerser } from 'rollup-plugin-terser'
// CommonJS用
import pluginCommonjs from '@rollup/plugin-commonjs'
// サードパーティライブラリ用
import pluginNodeResolve from '@rollup/plugin-node-resolve'
// トランスパイル用
import { babel as pluginBabel } from '@rollup/plugin-babel'
import * as path from 'path'

import pkg from './package.json'


// モジュール名
const moduleName = pkg.name.replace(/^@.*\//, '')
// エントリーとなるファイル名
const inputFileName = 'src/index.js'

// ライセンス表記用のバナー
const banner = `
  /**
   * @license
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} License.
   */
`

export default [
  // ブラウザ用の設定
  {
    input: inputFileName,
    output: [
      // uncompressed
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner,
        extend: true,
      },
      // minified
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        extend: true,
        plugins: [
          pluginTerser(),
        ],
      }
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        // ブラウザ向けにバンドルする
        browser: true,
      }),
    ],
  },

  // ES Module用の設定
  {
    input: inputFileName,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS用の設定
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'default',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
]