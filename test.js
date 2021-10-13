// import '@babel/polyfill'
(function(){
    // console.log(Array.from({length:111},(ele,index)=>index*2)) 


    Array.zzhFrom = (obj,params)=>{
        let result = Array(obj.length)
        for(let i = 0 ;i<obj.length ;i++){
            result[i] = params && params(obj[i],i)
        }
        return result
    }

    let result = '' || '3'
    console.log('res',result);


    let res = Array.zzhFrom({length:111},(ele,index)=>index*2)
    let res2 = Array.from({length:111},(ele,index)=>index*2)


    console.log('x',[0].slice(0,2))


})()