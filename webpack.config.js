const path = require('path');

module.exports = {
    mode: 'none',
    entry: './webpack/index.js',
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
                    exclude: /node_modules/,
                    options:{
                        presets:[
                            "@babel/preset-env"
                          ]
                    }
                },

            }
        ]
    }
}