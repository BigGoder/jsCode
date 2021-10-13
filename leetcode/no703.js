class minHeap{

    constructor(arr,num){//[4,5,8,2]   3
        this.data = []
        let index = 0
        this.num = num
        let temp = arr.pop()
        while(temp!=null && temp !=undefined){
            if(this.data.length < num){
                this.putEmpty(temp)
                temp = arr.pop()
                continue
            }
            if(this.data[index] < temp){
                index++
                while(this.data[index] && this.data[index] < temp){
                    index++
                }
                for(let i = 0;i<index-1;i++){
                    this.data[i] = this.data[i+1]
                }
                this.data[index-1] = temp
                index = 0
            }
            temp = arr.pop()
        }
    }

    putEmpty(temp){
        for(let i = 0;i<this.num;i++){
            if(this.data[0]==undefined){
                this.data.push(temp)
                break;
            }else if(this.data[i] > temp){
                this.data.splice(i,0,temp)
                break;
            }else if(i>=this.data.length){
                this.data.push(temp)
                break;
            }
        }
    }

    add(temp){
        if(this.data.length < this.num){
            this.putEmpty(temp)
            if(this.data.length >= this.num){
                return this.data[0]
            }
            
        }
        let index = 0
        if(this.data[index] <= temp){
            index++
            while(this.data[index]!= undefined && this.data[index] <= temp){
                
                index++
            }
            for(let i = 0;i<index-1;i++){
                this.data[i] = this.data[i+1]
            }
            this.data[index-1] = temp
        }
        return this.data[0]//this.data[0]        
    }


}

let heap = new minHeap([0],2)

console.log('h',heap.add(-1));  
console.log('h',heap.add(1));  
console.log('h',heap.add(-2));  
console.log('h',heap.add(-4));  


