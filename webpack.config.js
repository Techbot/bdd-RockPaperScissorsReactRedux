var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
 //   'webpack-dev-server/client?http://localhost:3000',
  //  'webpack/hot/only-dev-server',
    './src/WebRoot/Scripts/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'html/scripts/bundle.js'
  },
  plugins: [
//    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
