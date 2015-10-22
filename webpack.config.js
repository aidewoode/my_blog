var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require('vue-loader');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

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
      { test: /\.(woff|ttf)$/, loader: 'url-loader' },
      { test: /\.md$/, loader: 'html!remarkable'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ],

  postcss: function() {
    return [autoprefixer, precss];
  },

  remarkable: {
    preset: 'full',
    linkify: true,
    typographer: true
  }
}
