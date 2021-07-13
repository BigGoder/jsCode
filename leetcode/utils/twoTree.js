class BinaryTree{
    
    constructor(){

    }

    add(value){
        let node = new SNode(value)
        if(!this.root){
            this.root = node
            return
        }
        this.insert(node,this.root)
    }

    insert(newNode,node){
        if(newNode.value < node.value){
            if(!node.left){
                node.left = newNode
            }else if(node.left.value >newNode.value){
                this.insert(newNode,node.left)
            }else{
                newNode.left = node.left
                node.left = newNode
            }
        }else{
            if(!node.right){
                node.right = newNode
            }else if(node.right.value < newNode.value){
                newNode.right = node.right
                node.right = newNode
            }else{
                this.insert(newNode,node.right)
            }
        }
    }

}



class SNode{

    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

module.exports = BinaryTree