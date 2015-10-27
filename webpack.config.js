var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require('vue-loader');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

module.exports = {
  entry: './assets/main.js',
  output: {
    path: './assets',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: vue.withLoaders({
          css: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
        })
      },

      { test: /\.css$/,
        loader:ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },

      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(woff|ttf)$/, loader: 'url-loader' }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin()
  ],

  postcss: function() {
    return [autoprefixer, precss, cssnano];
  },

  remarkable: {
    preset: 'full',
    linkify: true,
    typographer: true
  }
}
