const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App using pug',
      template: 'public/index.pug'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};