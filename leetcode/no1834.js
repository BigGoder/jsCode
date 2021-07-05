
function getOrder(tasks){
    const queue = new MinPriorityQueue()
    console.log('queue',queue);
    
    tasks.forEach((e,index) => {
        e.idx = index
    });

    let newT = tasks.sort((a,b)=>{
        if(a[1] == b[1]){
            return a[0] -b[0]
        }
        return a[1]-b[1]
    })
    
    return newT.map((e)=>{
        return e.idx
    })
}

console.log(getOrder([[1,2],[2,4],[3,2],[4,1]]))