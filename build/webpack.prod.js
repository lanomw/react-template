const path = require('path');
const { merge } = require('webpack-merge');
const globAll = require('glob-all');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
  mode: 'production',
  optimization: {
    // 压缩代码
    minimizer: [
      // 压缩css
      new CssMinimizerPlugin(),
      // 压缩js
      new TerserPlugin({
        // 开启多线程压缩
        parallel: true,
        terserOptions: {
          compress: {
            // 删除console.log
            pure_funcs: ['console.log'],
          }
        }
      })
    ],
    // 分隔代码
    splitChunks: {
      cacheGroups: {
        // 提取node_modules代码
        vendors: {
          // 只匹配node_modules里面的模块
          test: /node_modules/,
          // 提取文件命名为vendors,js后缀和chunkhash会自动加
          name: 'vendors',
          // 只要使用一次就提取出来
          minChunks: 1,
          // 只提取初始化就能获取到的模块,不管异步的
          chunks: 'initial',
          // 提取代码体积大于0就提取出来
          minSize: 0,
          // 提取优先级为1
          priority: 1,
        },
        // 提取页面公共代码
        commons: {
          // 提取文件命名为commons
          name: 'commons',
          // 只要使用两次就提取出来
          minChunks: 2,
          // 只提取初始化就能获取到的模块,不管异步的
          chunks: 'initial',
          // 提取代码体积大于0就提取出来
          minSize: 0,
        }
      }
    },
  },
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          // 复制public下文件
          from: path.resolve(__dirname, '../public'),
          // 复制到dist目录中
          to: path.resolve(__dirname, '../dist'),
          filter: source => {
            // 忽略index.html
            return !source.includes('index.html');
          },
        }
      ]
    }),
    // 抽离css插件
    new MiniCssExtractPlugin({
      // 抽离css的输出目录和名称
      filename: 'static/css/[name].[contenthash:8].css',
    }),
    // 清理无用css
    new PurgeCSSPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: globAll.sync([
        `${path.join(__dirname, '../src')}/**/*.tsx`,
        path.join(__dirname, '../public/index.html'),
      ]),
      safelist: {
        // 过滤以ant-开头的类名，哪怕没用到也不删除
        standard: [/^ant-/],
      }
    }),
    // 打包时生成gzip文件
    new CompressionPlugin({
      // 只生成css,js压缩文件
      test: /.(js|css)$/,
      // 文件命名
      filename: '[path][base].gz',
      // 压缩格式,默认是gzip
      algorithm: 'gzip',
      // 只有大小大于该值的资源会被处理。默认值是 10k
      threshold: 10240,
      // 压缩率,默认值是 0.8
      minRatio: 0.8,
    })
  ]
});
