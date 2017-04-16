/**
 * Created by KH-DEV on 2017-04-15.
 */
const express = require('express');
const path = require('path');
const app = express();
const isProd = process.env.NODE_ENV === 'production';
const port = isProd ? process.env.NODE_PORT:3000;

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');


const publicPath = path.join(__dirname, '..', 'public');
const buildPath = path.join(__dirname, '..', 'dist');

app.set('view engine', 'pug');
app.set('views', publicPath);

if ('development' === process.env.NODE_ENV) {

}

app.use(express.static(buildPath));

app.get('*', function (req, res) {
  // res.sendfile(buildPath, 'index.html');
  res.render('index');
});

app.listen(port, () => {
  console.log('Express listening on port', port);
});
