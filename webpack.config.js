const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.tsx'),
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].[contenthash].bundle.js'
    },
    module: {
        // loader配置
        rules: [
            // babel
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            },
            // html
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // css
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 开启css模块
                            modules: true
                        }
                    },
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 文件
            {
                test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        name: 'static/images/[hash:8].[name].[ext]',
                        limit: 2 * 1024
                    }
                }
            },
            // sourceMap
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'source-map-loader',
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        // 模块导入别名。如import xxx from @components/xxx
        alias: {
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@config': path.resolve(__dirname, './src/config/'),
            '@constants': path.resolve(__dirname, './src/constants/'),
            '@hooks': path.resolve(__dirname, './src/hooks/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@utils': path.resolve(__dirname, './src/utils/')
        },
        // 按顺序进行解析
        extensions: ['.json', '.ts', '.tsx', '.js', '.jsx']
    },
    optimization: {
        // 打包优化
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    sourceMap: true,
                    compress: {
                        unused: true,
                        drop_console: true,
                        drop_debugger: true,
                        dead_code: true
                    }
                },
                parallel: true
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html')
        }),
        new HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin()
    ],
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' }
            }
        }
    }
};
