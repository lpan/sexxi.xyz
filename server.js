var express = require('express');
var path = require('path');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.config');
var compiler = webpack(config);

var PORT = 4200;
var PATH = path.join(__dirname, 'build');

var app = express();

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static(PATH));

app.get('/', function(req, res) {
  res.sendFile(path.join(PATH, 'index.html'));
});

app.listen(PORT, function() {
  console.log('Server running on ' + PORT);
});
