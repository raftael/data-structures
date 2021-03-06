/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {  
    if(!root) return [];
    
    var stack = [];
    var preorder = [];
    stack.push(root);
            
    while(stack.length > 0) {
        let node = stack.pop();
        preorder.push(node.val);
        if(node.right)
            stack.push(node.right)
        if(node.left)
            stack.push(node.left)        
    }

    return preorder;
};

// console.log(preorderTraversal(BST));