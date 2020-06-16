const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.bundle.js', // Use this for development
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // Injects css into DOM
          'css-loader', // Turns css into commonjs
          'sass-loader'
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
});
