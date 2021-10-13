let isValid = function(s) {
    let map = {"(":")","[":"]","{":"}"}
    let arr = []
    for(let i=0;i<s.length;i++){
        let cha = s[i]
        if(map[cha]){
            arr.push(cha)
        }else{
            if(map[arr.pop()] == cha){
                continue
            }
            break;
        }
    }
    if(arr.length == 0)return true
    return false
};

console.log('');