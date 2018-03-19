const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '/'),
        publicPath: '/',
        filename: '[name].[hash:8].js'
    },
    devtool: "#source-map",
    devServer: {
        port: 9999,
        hot: true,
        // 热更新
        // inline: true,
        // 文件更新，页面自动刷新
        host: '0.0.0.0',
        //允许本地ip访问
        historyApiFallback: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})