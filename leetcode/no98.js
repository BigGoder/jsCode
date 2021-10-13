var isValidBST = function (root) {
    let result = true
    let pre = null;
    const inOrder = (root) => {
        if(!root) return
        inOrder(root.left)
        if(pre != null && pre >= root.val){
            result = false
            return
        }
        pre = root.val
        inOrder(root.right)
    }
    return result
};