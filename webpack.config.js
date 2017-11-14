const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader' },
      { test: /\.css$/, loader: 'css-loader', options: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' } }
    ]
  }
};
