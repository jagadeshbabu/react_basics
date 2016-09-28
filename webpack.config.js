/**
 * Created by jagadesh on 27/09/16.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'scripts/main.jsx'),
  output: {
    filename: './scripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'scripts'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
