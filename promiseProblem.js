(async function(){

    console.log(1);
    new Promise((resolve)=>{
        resolve(2)
    }).then(result=>{
        console.log(result);
    })
    await t()
    console.log(3);



    function t(){
        console.log('4');
    }

})()