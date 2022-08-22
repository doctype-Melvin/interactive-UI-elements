const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};