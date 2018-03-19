const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let commonConfig = {
    entry: {
        main: path.resolve(__dirname, 'src/main'),
        vendors: ['vue','vue-router','vuex','axios']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
                /* 排除安装目录的文件 */
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[hash:8].[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.resolve(__dirname, 'src/styles/'),
            image: path.resolve(__dirname, 'src/images/'),
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages/'),
            json: path.resolve(__dirname, 'src/json/')
        },
        extensions: ['.js','.vue']
    },
    plugins: [
        new ExtractTextPlugin('style.[contenthash:8].css'),
        new HtmlWebpackPlugin({
            template: './template.ejs',
            title: '尖叫蕈',
            inject: 'body',
            favicon: 'favicon.ico'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        })
    ]
};

module.exports = commonConfig;