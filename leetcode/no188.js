var maxProfit = function(k, prices) {//  k = 2, prices = [2,4,1]


  let len = prices.length;
  if(len === 0) return 0;
  if(k >= len/2) return maxProfit2(prices);

  let result = Array.from({length:prices.length},()=>{
    return Array.from({length:k+1},()=>{
      return Array(2).fill(0)
    })
  })

  for(let i=0;i<prices.length;i++){
    for(let j = k;j>0;j--){  
      if(i===0) {
        result[i][j][0] = 0;
        result[i][j][1] = -prices[i];
        continue;
    }
      result[i][j][0] = Math.max(result[i-1][j][0],result[i-1][j][1]+prices[i])
      result[i][j][1] = Math.max(result[i-1][j][1],result[i-1][j-1][0]-prices[i])
    }
  } 
  return result[prices.length-1][k][0];

  function maxProfit2(prices) {
    let profits = 0;
    for (let i = 0; i < prices.length + 1; i++) {
        if(prices[i + 1] - prices[i] > 0) {
            profits += prices[i + 1] - prices[i]
        }
    }
    return profits;
};

};

console.log(maxProfit(2,[3,2,6,5,0,3]))