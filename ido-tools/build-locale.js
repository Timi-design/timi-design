const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const entry = require('./libs/locale');

process.env.NODE_ENV = 'production';

module.exports = {
  mode : 'development',
  devtool: 'source-map',
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/locale'),
    publicPath: '/dist/locale/',
    filename: '[name].js',
    library: 'idoDesign/locale',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    })
  ]
};
