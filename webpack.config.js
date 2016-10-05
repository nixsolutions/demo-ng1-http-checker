var webpack           = require('webpack');
var CleanPlugin       = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['./app.js']
  },
  output: {
    path: './build',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate' },
      { test: /\.js$/, loader: 'babel?presets=es2015', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html' },
      { test: /\.less/, loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: "file?name=fonts/[name].[ext]" }
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
  ]
};
