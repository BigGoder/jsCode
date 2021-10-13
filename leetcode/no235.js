var lowestCommonAncestor = function(root, p, q) {
    let v = root.val
    if(p<v && q <v){
        lowestCommonAncestor(root.left)
    }else if(q > v && q > v){
        lowestCommonAncestor(root.right)
    }else{
        return root.val
    }
};