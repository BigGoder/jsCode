function debounce(fn){
    let timer = null

    return function(){
        let context = this
        let args = arguments
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },1000)
    }
}


function throttle_smap(fn){
    let lastTime = Date.now()
    return function(){
        let context = this
        let args = arguments
        let current = Date.now()
        if(current - lastTime > 1000){
            lastTime = current
            fn.apply(context,args)
        }
    }
}

function throttle_timer(fn){
    let timer = null
    return function(){
        if(!timer){
            timer = setTimeout(()=>{
                fn()
                timer = null
            },1000)
        }
    }
}

function throttle_most(func, delay) {
    let timer = null
    let start = Date.now()
    return function(){
        let context = this
        let args = arguments
        let current = Date.now()
        let demain = delay -(current - start)
        clearTimeout(timer)
        if(demain <=0 ){
            start = Date.now()
            func.apply(context,args);
        }else{
            timer = setTimeout(()=>{
                func.apply(context,args)
            },demain)
        }
    }

}





async function main(){


    let b = 3
    let c= 2

    let a = b =c
    console.log('a',a);

    let arrA = [1,2,3,4,5]
    let arrB = [6,7,8,9]
    console.log([...arrA,...arrB]);




    let name1 = '我是最外面'
    let obj = {
        name1:'我是obj',
        log:function(){
            console.log(name1);
        }
    }
    let nLog = throttle_most(obj.log,1000)
    let start = Date.now()
    for (let index = 0; index < 310; index++) {
        nLog()
        await sleep(10)
    }
    console.log(Date.now() -start);
}

function sleep(d){
    return new Promise((resolve)=>{
        setTimeout(resolve,d)
    })
}

main()
