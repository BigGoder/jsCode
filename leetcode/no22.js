function fn(list){
    if(list.length==2){	 //递归的出口,最终剩下两个元素时将它们交换顺序
        return [list[0]+list[1],list[1]+list[0]];
    }
    var result=[];             //声明一个数组,存储最终的结果
    for(var i=0;i<list.length;i++){
        var first=list.splice(i,1);        //达到依次挑出a,b,c,d...使其依次排到最前面,使组合达到有序的目的
        var before=fn(list);      //剩下的数组中的数继续调用函数,使其最终达到数组里只剩下两个元素,然后元素互换位置,最终再倒推回来
        for(var j=0;j<before.length;j++){
            result.push(first+before[j]); //把刚开始挑出的元素与已排列好的元素进行拼接
        }
        list.splice(i,0,first);    //因为为了在before中实现剩余元素的组合,将list[i]给去掉了,所以需要添加回来,以保证下次依次挑选元素时位置正确,且排列时不会缺少元素
    }
    return result;
}


var generateParenthesis = function(n) {
    if(n <=0 )return ''
    if(n==1) return ['()']
    let result = []
    dfs('',0,0,result)

    console.log('result',result);


    function dfs(origin,leftNum,rightNum,arr){
        if(origin.length == 2*n){
            arr.push(origin)
            return
        }
        if(rightNum >leftNum) return
        let nextLeft = leftNum+1
        let nextRight = rightNum +1
        leftNum < n && dfs(origin +'(',nextLeft,rightNum,arr)
        origin && dfs(origin +')',leftNum,nextRight,arr)
    }
};



  generateParenthesis(3)