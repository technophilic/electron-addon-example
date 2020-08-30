// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {

  // Main entry point for the web application
  entry: {
    main: path.resolve(__dirname,'electron/main/index.js')
  },
  watch:true,
  target: 'electron-main',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.electron'),
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // Using html webpack plugin to utilize our index.html
    // new HtmlWebpackPlugin(),
  ],
//   Webpack dev server config
  devServer: {
    port: 9001,
    writeToDisk: true,
  },
};
