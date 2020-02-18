/**
 * 本地预览
 */

const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./config/config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  // 入口
  entry: {
    main: './examples/main',
    vendors: ['vue', 'vue-router']
  },
  // 输出
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      idoDesign: '../../src/index',
      vue: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendor.bundle.js'}),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/public/index.html')
    }),
    new FriendlyErrorsPlugin()
  ]
});
