const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/img', to: 'img' },
        { from: 'public/css', to: 'css' },
        { from: 'public/js/vendor', to: 'js/vendor' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'public/404.html', to: '404.html' },
      ],
    }),
  ],
});
