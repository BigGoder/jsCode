const isAnagram = function(s, t) {
    let sObj = {}
    for(let key in s){
        if(sObj[s[key]]){
            sObj[s[key]]++
        }else{
            sObj[s[key]] = 1
        }
    }

    let result = true
    for(let key in t){
        let v = t[key]
        if(!sObj[v]){
            result = false
            break;
        }
        sObj[v]--
        if(!sObj[v]) delete sObj[v]
    } 
    console.log('sObj',sObj);
    if(Object.keys(sObj).length ){
        result = false
    }
    return result
};

console.log('r',isAnagram("anagram","anagram"));  


