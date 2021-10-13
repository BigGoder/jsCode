const twoSum = function(nums, target) {
    let set = {}
    for(let i=0;i<nums.length;i++){
        let value = nums[i]
        let idx = set[String(target - value)]
        if(idx!=undefined){
            return [idx,i]
        }
        set[String(value)] = i
    }
};
//nums = [2,7,11,15], target = 9
console.log('r',twoSum([2,7,11,15],9));