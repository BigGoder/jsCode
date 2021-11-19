var lengthOfLIS = function(nums) {
  if(!nums.length) return 0
  let dp = [1]
  for(let i =1;i<nums.length;i++){
    let current = [-Infinity]
    for(let j =0;j<i;j++){
      let vO = nums[i]
      let vi = nums[j]
      if(vi < vO && vi > current[current.length-1]){
        current.push(vi)
      }
    }
    dp.push(current)
  }
  console.log('dp',dp);
  return Math.max(...dp)
};

lengthOfLIS([10,9,2,5,3,7,101,18])