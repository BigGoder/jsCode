class No1Plugin{

    constructor(options){
        this.options = options
    }

    apply(compiler){
        compiler.hooks.compile.tap('No2', () => {
            console.log('compile')
        })
        compiler.hooks.compilation.tap('No2', (compilation) => {
            console.log('compilation')
            compilation.hooks.chunkAsset.tap('No2', (chunk, filename) => {
                console.log('chunk',chunk)
                console.log("filename",filename)
            })
        })
    }
} 


module.exports = No1Plugin
