//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');

const babelRules = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.[contentHash].js',
  },
  module: {
    rules: [babelRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'marketing site',
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
};
