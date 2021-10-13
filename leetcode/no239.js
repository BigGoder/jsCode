let cal1 = function(nums, k) {//[1,3,-1,-3,5,3,6,7]
    let origin = nums.slice(0,k)
    origin = origin.sort((a,b)=>a-b)
    let result = [origin[origin.length-1]]
    for(let i =k;i<nums.length;i++){
        let oldValue = nums[i-k]
        let newValue = nums[i]
        origin.splice(origin.indexOf(oldValue), 1)
        let index = 0
        if(origin[index] <= newValue){
            index++
            while(origin[index]!= undefined && origin[index] <= newValue){
                index++
            }
            origin.splice(index,0,newValue)
        }else{
            origin.unshift(newValue)
        }
        result.push(origin[origin.length-1])
    }
    return result
};

let cal2 = function(nums, k) {//[1,3,-1,-3,-4,5,3,6,7]
    let result = []
    let con = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(index-con[0] > k-1) con.shift()
        while(nums[con[con.length-1]] <element){
            con.pop()
        }
        con.push(index)
        if(index>=k-1){
            result.push(nums[con[0]])
        }
    }
    return result
};

console.log('xxx',cal2([1,3,-1,-3,5,3,6,7],3));


let cal = function(nums,k){//[1,3,-1,-3,-2,5,3,6,7]
    let idx = 0
    let max = 0
    let con = []
    let result = []
    for (let index = 0; index < nums.length; index++){
        const element = array[index];
        if((index - idx) > k){

        }
        if(!con){
            con.push(element)
            max = element
            continue
        }
        if(element >= max){
            idx = index
            con = [element]
            continue
        }
    }
}

                                      

