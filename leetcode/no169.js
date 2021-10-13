var majorityElement1 = function(nums) {
    if(!nums)return undefined
    nums.sort()
    console.log('nums',nums.lengh/2);
    let idx = Math.floor(nums.lengh/2) - 1
    console.log(idx,Math.floor(nums.lengh/2));
    return nums[Math.floor(nums.lengh/2) - 1]
};

console.log('result',majorityElement1([2,3,3]));