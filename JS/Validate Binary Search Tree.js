//98. Validate Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const validCheck = (node, min, max) => {
        if (!node) {
            return true;
        }
        
        if (node.val >= max || node.val <= min) {
            return false;
        }
        
        return validCheck(node.left, min, node.val) && validCheck(node.right, node.val, max);
    }
    
    return validCheck(root, -Infinity, Infinity);
};