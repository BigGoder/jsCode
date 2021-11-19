var isPowerOfTwo = function(n) {
    if(n!=0 && (n&n-1) == 0)return true
    return false
};


console.log('r',isPowerOfTwo(16))