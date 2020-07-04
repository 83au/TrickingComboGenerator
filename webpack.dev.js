const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const CopyPlugin = require('copy-webpack-plugin');

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
    new CopyPlugin({
      patterns: [
        { from: 'src/service-worker.js', to: 'service-worker.js' },
        { from: 'src/manifest.webmanifest', to: 'manifest.webmanifest' },
        { from: 'src/app-icons', to: 'app-icons' } ,
        { from: 'src/web.config', to: 'web.config' }
      ],
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
    // writeToDisk: true,
  },
});
