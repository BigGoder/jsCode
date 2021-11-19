
function quickSort(arr,start,end){
    if(start >= end) return 
    let temp = arr[start]
    let left= start+1
    for(let i = start+1 ;i<end;i++){
        if(arr[i] < temp) left++
    }
    swap(arr,start,left-1)
    quickSort(arr,start,left-1)
    quickSort(arr,left,end)
}


function swap(arr,left,right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

let arr = [3,2,4,1,5]
quickSort(arr,0,arr.length)
console.log('arr',arr);