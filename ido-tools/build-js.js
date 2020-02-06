const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./config/config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  mode : 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'idoDesign.js',
    library: 'idoDesign',
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
    // @todo
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
});
