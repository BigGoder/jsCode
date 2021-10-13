let arr = [3,2,4,5,6,1]

function swap(arr,left,right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

function quickSort(arr,left,right){
    if(left>=right) return
    let temp = arr[left]
    let leftIdx = left+1
    // let rightIdx = left+1
    for(let i = leftIdx;i < right;i++){
        if(arr[i] < temp){
            if(leftIdx!=i){
                swap(arr,leftIdx,i)
            }
            leftIdx++
        }
    }
    swap(arr,left,leftIdx-1)
    quickSort(arr,left,leftIdx-1)
    quickSort(arr,leftIdx,right)
}

quickSort(arr,0,arr.length)
console.log('arr',arr);