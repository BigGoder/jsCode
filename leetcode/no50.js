var myPow = function(x, n) {
    if(n == 0) return 1
    if(n<0) return 1/myPow(x,-n)
    if(n>0){
        if(n % 2 == 0){
            return myPow(x*2,n/2) 
        }else{
            return x * myPow(x,n-1)
        }
    }
     
};


console.log('result',myPow(2.00000,-2));