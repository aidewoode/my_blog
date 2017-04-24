module.exports = {
  entry: __dirname + '/app/app.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/assets'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              postcss: [require('postcss-cssnext')()]
            }
          },

          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      { test: /\.(woff|ttf)$/, loader: 'url-loader' }
    ]
  }
}
