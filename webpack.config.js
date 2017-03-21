module.exports = {
  entry: './app/app.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue!eslint'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel!eslint'
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(woff|ttf)$/, loader: 'url' }
    ]
  },

  vue: {
    postcss: [require('postcss-cssnext')()]
  }
}
