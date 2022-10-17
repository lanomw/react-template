const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const baseConfig = require('./webpack.base.js');

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  // 开发模式,打包更加快速,省了代码优化步骤
  mode: 'development',
  // 开发模式推荐的配置。便于异常问题排查
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    // 开启react模块热替换插件
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    port: 7000,
    // gzip压缩,开发环境不开启,提升热更新速度
    compress: false,
    hot: true,
    // 解决history路由404问题
    historyApiFallback: true,
    static: {
      //托管静态资源public文件夹
      directory: path.join(__dirname, '../public'),
    },
  },
});
