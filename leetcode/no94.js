const BinaryTree = require('./utils/twoTree')

let bTree = new BinaryTree()//4 7 6 8 2 1 3 5
bTree.add(1)
bTree.add(2)
bTree.add(3)
bTree.add(4)
bTree.add(5)
bTree.add(6)
bTree.add(7)
bTree.add(8)

class Index{

    constructor(){
        this.arr = []
    }    


    run(root){
        if(!root) return
        this.run(root.left)
        this.arr.push(root.value); 
        this.run(root.right)
    }

    init(root){
        this.run(root)
        return this.arr
    }

}

console.log(new Index().init(bTree.root))