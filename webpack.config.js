const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production'; //true or false

const cssDev = [
  'css-loader',
  'sass-loader'
];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader','sass-loader'],
  publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
  entry: {
    vendor: ['react'],
    bundle: path.resolve(__dirname, 'src/App.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // ES6 문법과 JSX 문법을 사용한다
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        },
        exclude: ['/node_modules']
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: cssConfig
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App using pug',
      template: 'public/index.pug',
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: !isProd,
      allChunks: true
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};