import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  external: ['styled-components'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', '**/*.stories.tsx'],
      clean: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
      },
    }),
  ],
}
