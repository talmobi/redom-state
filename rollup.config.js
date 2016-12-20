import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'js/index.js',
  dest: 'public/js/main.js',
  format: 'iife',
  plugins: [
    buble({
      objectAssign: 'Object.assign'
    }),
    nodeResolve({
      jsnext: true
    })
  ]
};
