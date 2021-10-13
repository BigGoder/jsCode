var threeSum = function(nums) {
    let result = []
    let con = {}
    let ns = nums.sort((a,b)=>(a-b))
    for(let j =0;j<ns.length;j++){
        let first = ns[j]
        let obj = {}
        for(let i = j+1;i<ns.length;i++){
            let value = ns[i]
            let idx = obj[String(0-first - value)]
            let item = [first,ns[idx],ns[i]]
            if(idx != undefined && !con[item]){
                result.push(item)
                con[item] = 1
            }
            obj[String(value)] = i
        }
    }

    return result

};


var threeSum2 = function(nums){
    let result = []
    let con = []
    let ns = nums.sort((a,b)=>(a-b))
    let last = -Infinity
    for(let j =0;j<ns.length;j++){
        let first = ns[j]
        
        if(first == last) continue
        console.log('xxx');
        last = first
        let obj = {}
        for(let i = j+1;i<ns.length;i++){
            let value = ns[i]
            let idx = obj[String(0-first - value)]
            // let item = [first,ns[idx],ns[i]]
            // let itemStr = item.join('')
            if(idx != undefined){
                result.push([first,ns[idx],ns[i]])
                // con.push(itemStr)
            }
            obj[String(value)] = i
        }
    }

    return result

};

console.log('r',threeSum([-1,0,1,2,-1,-4]));