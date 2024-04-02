const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.[hash].bundle.js',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/service-worker.js', to: 'service-worker.js' },
        { from: 'src/manifest.webmanifest', to: 'manifest.webmanifest' },
        { from: 'src/assets/app-icons', to: 'assets/app-icons' },
        { from: 'src/assets/icon-spritesheet.svg', to: 'assets/icon-spritesheet.svg' },
        { from: 'src/myFavicon.ico', to: 'myFavicon.ico' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into files
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer(),
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    writeToDisk: true,
  },
});
