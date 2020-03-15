const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.bundle.js', // Use this for development
  },
  devServer: {
    contentBase: './dist',
  },
});
