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
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
