const Node = require('./utils/linkNode')
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
node1.link(node2).link(node3).link(node4)


var reverseList = function(head) {
  if(!head) return null
  let previous = null
  while(head){
    let next = head.next
    head.next = previous
    previous = head
    head = next
  }
  return previous
};