const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 是否是开发模式
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // 入口文件
  entry: path.join(__dirname, '../src/index.tsx'),
  // 打包文件出口
  output: {
    // 每个输出js的名称
    filename: 'static/js/[name].[chunkhash:8].js',
    // 打包结果输出路径
    path: path.join(__dirname, '../dist'),
    // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    clean: true,
    // 打包后文件的公共前缀路径
    publicPath: '/',
  },
  // 开启webpack持久化存储缓存
  cache: {
    // 使用文件缓存
    type: 'filesystem',
  },
  module: {
    rules: [
      // 匹配.ts, tsx文件
      {
        test: /.(ts|tsx)$/,
        use: ['thread-loader', 'babel-loader'],
      },
      //匹配 css和less 文件
      {
        test: /.(css|less)$/,
        use: [
          // 开发环境使用style-looader,打包模式抽离css
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      // 匹配图片文件
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        // webpack5自带 asset-module 处理文件。 type选择asset
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于10kb转base64位
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 文件输出目录和命名
          filename: 'static/images/[name].[chunkhash:8][ext]',
        },
      },
      // 匹配字体图标文件
      {
        test: /.(woff2?|eot|ttf|otf)$/,
        // webpack5自带 asset-module 处理文件。 type选择asset
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于10kb转base64位
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 文件输出目录和命名
          filename: 'static/fonts/[name].[chunkhash:8][ext]',
        },
      },
      // 匹配媒体文件
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        // webpack5自带 asset-module 处理文件。 type选择asset
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于10kb转base64位
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 文件输出目录和命名
          filename: 'static/media/[name].[chunkhash:8][ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
    },
    extensions: ['.js', '.tsx', '.ts'],
    // 查找第三方模块只在本项目的node_modules中查找
    modules: [path.resolve(__dirname, '../node_modules')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模板取定义root节点的模板
      template: path.resolve(__dirname, '../public/index.html'),
      // 自动注入静态资源
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
