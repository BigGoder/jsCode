var threeSum = function(nums) {//[-1,0,1,2,-1]
  let result = []
  let ns = nums.sort((a,b)=>a-b)
  for(let i = 0;i<ns.length;i++){
    let value = ns[i]
    if(ns[i] == ns[i-1])continue
    let target = 0 - value
    let left = i+1
    let right = ns.length-1
    while(left<right){
      if(ns[left] +ns[right] >target){
        right--
      }else if(ns[left] +ns[right] <target){
        left++
      }else{
        result.push([value,ns[left],ns[right]])
        left++
        right--
        while(ns[left] == ns[left+1]){
          left++
        }
        while(ns[right] == ns[right-1]){
          right--
        }
      }
    }
  }
  return result
};

console.log('r',threeSum([-1,0,1,2,-1]));