const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const No1Plugin = require('./webpack/plugins/no1Plugin')


module.exports = {
    mode: 'none',
    entry: [
        './webpack/index.js',
        './webpack/index2.js'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    // exclude: /node_modules/,
                    options:{
                        presets:[
                            "@babel/preset-env"
                        ]
                    }
                },

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'custom-plugin'
        }),
        new CleanWebpackPlugin(),
        new No1Plugin({
            params:'title'
        })
    ]
}