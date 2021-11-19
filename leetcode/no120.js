// var minimumTotal = function(triangle) {
//   if(triangle.length == 1) return triangle[0][0]
//   let first = triangle.splice(0,1)
//   return inner(triangle,first[0])

//   function inner(tri,arr){
//     if(!tri.length){
//       let min = arr.splice(0,1)
//       for(let i =0;i<arr.length;i++){
//         if(arr[i]<min)min = arr[i]
//       }
//       return min
//     }
//     let result = []
//     let head = tri.splice(0,1)[0]
//     for(let j = 0;j<head.length;j++){
//       let ele = head[j]
//       if(arr[j-1]  == undefined){
//         result.push(ele+arr[j])
//       }else if(arr[j] == undefined){
//         result.push(ele+arr[j-1])
//       }else{
//         result.push(Math.min(ele+arr[j-1],ele+arr[j]))
//       }
//     }
//     return inner(tri,result)
//   }
// };

var minimumTotal = function(triangle) {
  let dp = Array.from({length:triangle.length+1},()=>([]))
  for(let i = triangle.length -1;i>=0;i--){
    let row = triangle[i]
    for(let j=row.length-1;j>=0;j--){
      let last = Math.min(dp[i+1][j]!=undefined ? dp[i+1][j] : Infinity,dp[i+1][j+1]!=undefined ? dp[i+1][j+1] : Infinity) == Infinity? 0: Math.min(dp[i+1][j]!=undefined ? dp[i+1][j] : Infinity,dp[i+1][j+1]!=undefined ? dp[i+1][j+1] : Infinity)
      dp[i][j] = last + triangle[i][j]
      if(i==0 && j==0){
        return dp[0][0];
      }
    }
  }
}

console.log('a',minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])) 
// let arr = Array(2).fill([])
// let arr1 = [[],[]]
// arr[1][1] = 2
// arr1[1][1] = 2
// console.log('arr',arr);