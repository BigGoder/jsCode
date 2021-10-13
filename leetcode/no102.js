const TwoTree  = require('./utils/twoTree')

let twoTree = new TwoTree()
twoTree.add(3)
twoTree.add(9)
twoTree.add(20)
twoTree.add(15)
twoTree.add(7)

var levelOrder = function(root) {
    if(!root) return []
    let current = [[root]]
    let result = [[root.val]]
    while(current.length){
        let level = current.pop()
        let next = []
        let values = []
        for(let i =0;i<level.length;i++){
            let node = level[i]
            values.push(node.val)
            if(node.left){
                next.push(node.left)
            } 
            if(node.right){
                next.push(node.right)
            } 
        }
        if(next.length){
            result.push(values)
            current.push(next)
        }

    }
    return result
};
console.log('result',levelOrder(twoTree));
