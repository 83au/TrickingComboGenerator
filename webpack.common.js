const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: ['html-loader'],
      // },
      // {
      //   test: /\.css$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[hash].[ext]',
      //     },
      //   },
      // },
    ],
  },
};
