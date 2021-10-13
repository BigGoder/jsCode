var maxProfit = function(prices) {//[1,2,3,4]
    let count = 0;
    for(let i =0;i<prices.length-1;i++){
        if(prices[i] < prices[i+1]){
            count += prices[i+1] - prices[i]
        }
    }
    return count
};


console.log('res',maxProfit([1,2,3,4,5]));
