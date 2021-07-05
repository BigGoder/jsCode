function simulateBind(){

}

function simulateCall(){
    let args = Array.from(arguments)
    let context = args.shift()
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}


function simulateBind(){
    let args = Array.from(arguments)
    let context = args.shift()
    let fn = this
    return function (){
        fn.apply(context,[...args,...arguments])
    }
}

Function.prototype.simulateCall = simulateCall
Function.prototype.simulateBind = simulateBind

function test(age,height){
    console.log(`${this.name},${age},${height}`);
}


let obj = {
    name:'zzh'
}

let t = test.simulateBind(obj,19)
t(184)


/**
 * style-loader css添加到内联标签style里面
 * file-loader 文件路径转化为正确的绝对路径
 * url-loader 处理图片的
 * postcss-lader 讲css
 * 
 * **/