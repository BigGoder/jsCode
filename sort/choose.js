

function chooseSort(arr){
    for(let i = 0;i<arr.length;i++){
        console.log('arr1',arr);
        for(let j = i+1;j< arr.length;j++){
            if(arr[i] > arr[j]){
                swap(arr,i,j)
            }
        }
    }
}

function swap(arr,left,right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

let arr = [4,3,5,1]
chooseSort(arr)
console.log('arr',arr);