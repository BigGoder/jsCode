

function rec(n){
    if(n == 1)return 1
    return n * rec(n-1)
}

console.log('x',rec(5));