module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './bin',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets:['react', 'es2015']
      }
    }]
  }
};

