class Node{

    constructor(val,next){
        this.val = val
        this.next = next
        return this.next
    }

    link(node){
        this.next = node
        return this.next
    }
}

module.exports = Node