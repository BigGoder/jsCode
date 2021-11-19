// var maxProduct = function(nums) {
//   var max = nums.splice(0,1)[0]
//   inner(max,nums)
//   function inner(origin,nums){
//     let first = nums.splice(0,1)
//     if(origin * first[0] > max) max = origin
//     if(!nums.length) return
//     inner(1,nums.slice())
//     inner(origin * first[0],nums.slice())
//   }
//   return max
// };

// maxProduct([0,-1,4,-4,5])


var maxProduct = (nums) => {
  let minPrev = nums[0]
  let maxPrev = nums[0]
  let result  = nums[0]
  for(let i = 1;i<nums.length;i++){
    let minCurrent = minPrev * nums[i]
    let maxCurrent = maxPrev * nums[i]
    minPrev = Math.min(maxCurrent,minCurrent,nums[i])
    maxPrev = Math.max(maxCurrent,minCurrent,nums[i])
    result = Math.max(maxPrev,result)
  }
  return result
}


console.log(maxProduct([3,0,1]))