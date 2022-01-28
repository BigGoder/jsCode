var lengthOfLIS = function(nums) {
  if(!nums.length) return 0
  if(nums.length == 1) return 1
  let arr = [{max:nums[0],length:1,valueOf:function(){
    return this.length
  }}]
  for(let i =1;i<nums.length;i++){
    let count = 0;
    let value = nums[i]
    for(let j = 0;j<arr.length;j++){
      let last = arr[j]
      if(last.max < value && last.length > count){
        count = last.length
      }
    }
    arr.push({
      max:value,
      length:++count,
      valueOf:function(){
        return this.length
      }
    })
  }
  return Math.max(...arr)
};

var lengthOfLIS = function(nums) {
  if(!nums.length) return 0
  if(nums.length == 1) return 1
  let arr = [{max:nums[0],length:1,valueOf:function(){
    return this.length
  }}]
  for(let i =1;i<nums.length;i++){
    let count = 0;
    let value = nums[i]
    for(let j = 0;j<arr.length;j++){
      let last = arr[j]
      if(last.max < value && last.length > count){
        count = last.length
      }
    }
    arr.push({
      max:value,
      length:++count,
      valueOf:function(){
        return this.length
      }
    })
  }
  return Math.max(...arr)
};

console.log('xx',lengthOfLIS([10,9,2,5,3,7,101,18])) 
console.log('xx',lengthOfLIS2([10,9,2,5,3,7,101,18])) 
// lengthOfLIS([2,3,4])