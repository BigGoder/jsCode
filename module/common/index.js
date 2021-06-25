


(async function t(){
    require("./moduleA");
    await sleep(3000)
    var m = require("./moduleB");
    console.log(m);
})()






function sleep(d){
    return new Promise((reslove)=>{
        setTimeout(reslove,d)
    })
}