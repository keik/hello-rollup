import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import env from 'rollup-plugin-env'

export default {
  entry: 'src/scripts/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    env({
      NODE_ENV: 'development'
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs(),
    babel()
  ]
}
