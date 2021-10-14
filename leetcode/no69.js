var mySqrt = function(x) {
    let left = 1
    let right = x
    let result = 0
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(mid * mid >x){
            right = mid-1
        }else if(mid * mid <x){
            left = mid+ 1
        }else{
            result = mid
            return mid
        }
    }
    if(!result) return right


};