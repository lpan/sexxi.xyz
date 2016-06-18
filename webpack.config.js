var webpack = require('webpack');
var path = require('path');

var config = {
  debug: true,
  devtool: '#eval-source-map',
  entry: './src/js/index.js',

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loaders: ['babel']
      }
    ]
  }
};

module.exports = config;
