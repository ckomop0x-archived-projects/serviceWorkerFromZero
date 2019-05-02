const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/main.js',
    sw: './src/sw.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
