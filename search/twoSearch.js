


function binarySearch(value,arr){
    arr.sort((a,b)=>(a-b))
    let left = 0
    let right = arr.length-1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        console.log(mid);
        if(arr[mid] <value){
            left = mid+1
        }else if(arr[mid] > value){
            right = mid - 1
        }else{
            return mid
        }
    }
}

console.log('res',binarySearch(4,[4,5,6,3,2,1]));