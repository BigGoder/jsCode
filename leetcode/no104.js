const TwoTree  = require('./utils/twoTree')

let twoTree = new TwoTree()
twoTree.add(3)
twoTree.add(9)
twoTree.add(20)
twoTree.add(15)
twoTree.add(7)

var maxDepth = function(root) {
    if(!root) return 1
    let result = 1
    maxDepthLeft(root,1)
    function maxDepthLeft(node,dep){
        if(!root) return
        let newDep = dep +1 
        if(newDep > result) result = newDep
        maxDepthLeft(node.left,newDep)
        maxDepthLeft(node.right,newDep)
    }
};
