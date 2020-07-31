const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
    new CopyPlugin({
      patterns: [
        { from: 'src/service-worker.js', to: 'service-worker.js' },
        { from: 'src/manifest.webmanifest', to: 'manifest.webmanifest' },
        { from: 'src/assets/app-icons', to: 'app-icons' },
        { from: 'src/assets/icon-spritesheet.svg', to: 'icon-spritesheet.svg' },
        { from: 'src/myFavicon.ico', to: 'myFavicon.ico' },

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
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    // writeToDisk: true,
  },
});
