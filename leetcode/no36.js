var isValidSudoku = function(board) {
    if(!board || !board.length) return
    let obj = Object.create(null)
    let result = true
    for(let i=0;i<board.length;i++){
        obj[`h${i}`] = []
        let ele = board[i]
        for(let j = 0;j<ele.length;j++){
            let value = ele[j]
            if(value == '.')continue
            if(!obj[`l${j}`]){
                obj[`l${j}`] = []
            }
            if(!obj[`b${Math.floor(i/3)}${Math.floor(j/3)}`]){
                obj[`b${Math.floor(i/3)}${Math.floor(j/3)}`] = []
            }
            if(obj[`h${i}`].indexOf(value)!=-1 || obj[`l${j}`].indexOf(value)!=-1 || obj[`b${Math.floor(i/3)}${Math.floor(j/3)}`].indexOf(value)!=-1){
                result = false
                break;
            }else{
                obj[`h${i}`].push(value)
                obj[`b${Math.floor(i/3)}${Math.floor(j/3)}`].push(value)
                obj[`l${j}`].push(value)
            }
        }
        if(!result)break;
    }
    return result 
};

let res = isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]])

console.log('res',res);