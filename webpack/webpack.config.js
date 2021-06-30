module.exports = {
    mode:'production',
    entry:{
        index:'./index.js',
        moduleA:'./moduleA.js'
    },
    output:{
        filename:'[name].js'
    },
    optimization:{
        runtimeChunk:'single',
        splitChunks:{
            cacheGroups:{
                commons:{

                },
                vendors:{
                    
                }

            }
        }
    },
    devtool:'source-map'

}