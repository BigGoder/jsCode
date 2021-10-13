var solveSudoku = function(board) {
    let arr = Array.from({length:9},(ele,index)=>(String(index+1)))
    let obj = Object.create(null)
    let result = null
    for(let i=0;i<board.length;i++){
        obj[`h${i}`] = []
        let ele = board[i]
        for(let j = 0;j<ele.length;j++){
            let value = ele[j]
            if(value == '.')continue
            if(!obj[`l${j}`]){
                obj[`l${j}`] = []
            }
            if(!obj[`${Math.floor(i/3)}${Math.floor(j/3)}`]){
                obj[`${Math.floor(i/3)}${Math.floor(j/3)}`] = []
            }
            if(obj[`h${i}`].indexOf(value)!=-1 || obj[`l${j}`].indexOf(value)!=-1 || obj[`${Math.floor(i/3)}${Math.floor(j/3)}`].indexOf(value)!=-1){
                result = false
                break;
            }else{
                obj[`h${i}`].push(value)
                obj[`${Math.floor(i/3)}${Math.floor(j/3)}`].push(value)
                obj[`l${j}`].push(value)
            }
        }
    }

    bfs(board,0,0,obj)
    function bfs(origin,left,top,obj){
        
        if(left == 8 && top==8){
            board = origin
            return 
        }
        let nextLeft = 0
        let nextTop = top
        left == 8 ? nextTop = top + 1 :nextLeft = left +1
        let newObj = JSON.parse(JSON.stringify(obj))
        if(origin[top][left] != '.'){
            bfs(origin,nextLeft,nextTop,newObj)
        }else{
            let a = Array.from(new Set([...newObj[`h${top}`],... newObj[`l${left}`],...newObj[`${Math.floor(top/3)}${Math.floor(left/3)}`]]))
            let nums = arr.filter((ele)=>(!a.includes(ele)))
            if(!nums.length){
                return
            }
            for(let i = 0;i<nums.length;i++){
                let newOrigin = JSON.parse(JSON.stringify(origin))
                let newObj = JSON.parse(JSON.stringify(obj))
                let value = nums[i]
                newOrigin[top][left] = String(value)
                newObj[`h${top}`].push(String(value))
                newObj[`${Math.floor(top/3)}${Math.floor(left/3)}`].push(String(value))
                newObj[`l${left}`].push(value)
                bfs(newOrigin,nextLeft,nextTop,newObj)
            }
        }

    }
};

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
))