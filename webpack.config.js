const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Homework 5',
      filename: 'index.html',
      template: './index.html',
    }),
    new CopyPlugin([
      {
        from: './src/styles/', to: './css/',
      },
    ]),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_module/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
