const Node = require('./utils/linkNode')
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
node1.link(node2).link(node3).link(node4)


function rrr(head) {
    let first = null
    let pre = null
    let count = 1
    while(head){
        if(!head) break
        let next = head.next
        if(count % 2 ==0){
            head.next = pre
            pre.next = next && next.next
            
        }
        count++
        if(count ==3){ 
            console.log(111);
            first = head
        }
        pre = head
        head = next
    }
    return first
};

console.log(rrr(node1))