var solveNQueens = function(n) {
    let result = []
    for (let index = 0; index < n; index++) {
        let origin = Array.from({length:n},(e,index)=>(index))
        origin.splice(index,1)
        recur(0,n,[[0,index]],origin);    
    }
    console.log(result);
    function recur(current,len,arr,origin){
        
        if(current >= len-1){
            if(arr.length == n){
                let array = Array.from({length:n},(ele,index)=>{
                    
                    return Array.from({length:n},(e,idx)=>{
                        if(idx===arr[index][1]){
                            return 'Q'  
                        }else{
                            return '.'
                        }
                    }).join('')
                })

                result.push(array)
            }
            return
        } 
        let newCurrent = current+1
        for(let j =0;j< origin.length; j++){
            let newArr = [...arr]
            let isTrue = true
            for(let i = 0;i<arr.length;i++){
                let ele = arr[i]
                if(Math.abs(ele[1]-origin[j]) == Math.abs(ele[0]-newCurrent)){
                    isTrue = false
                    break;
                }
            }
            if(isTrue){
                newArr.push([newCurrent,origin[j]])
                origin.splice(j,1)
                recur(newCurrent,len,newArr,origin)
            }
            
        }
        
    }
};

solveNQueens(4)