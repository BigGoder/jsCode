class BinaryTree{
    
    constructor(){

    }

    add(val){
        let node = new SNode(val)
        if(!this.root){
            this.root = node
            return
        }
        this.insert(node,this.root)
    }

    insert(newNode,node){
        if(newNode.val < node.val){
            if(!node.left){
                node.left = newNode
            }else if(node.left.val >newNode.val){
                this.insert(newNode,node.left)
            }else{
                newNode.left = node.left
                node.left = newNode
            }
        }else{
            if(!node.right){
                node.right = newNode
            }else if(node.right.val < newNode.val){
                newNode.right = node.right
                node.right = newNode
            }else{
                this.insert(newNode,node.right)
            }
        }
    }

}



class SNode{

    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

module.exports = BinaryTree