




function maxIceCream(costs, coins){
    let newC = costs.sort((a,b)=>{
        return a-b
    })
    let count = 0
    let value = 0
    for(let i = 0;i<newC.length;i++){
        value += newC[i]
        count++
        if(value > coins){
            count--
        }
    }
    return count
}

const costs = [10,2,10,10,10,10,8,2,7,8]
const coins = 25
console.log(maxIceCream(costs,coins))