var maxProfit = function(prices, fee) {
  let dp = Array.from({length:prices.length},()=>{
    return Array(2).fill(0)
  })
  for(let i = 0;i<prices.length;i++){
    if(i==0){
      dp[i][0] = 0
      dp[i][1] = -prices[0]
      continue
    }
    dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
    dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
  }
  return dp[prices.length-1][0]
};

maxProfit([1,3,7,5,10,3],3)