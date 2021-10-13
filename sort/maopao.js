

function maopaoSort(arr){//[1,5,4,3]
    for (let index = 0; index < arr.length; index++) {
        for(let j =0;j<arr.length-index;j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
        
    }
}


function swap(arr,left,right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

let a = [1,5,4,3]
maopaoSort(a)
console.log('a',a);