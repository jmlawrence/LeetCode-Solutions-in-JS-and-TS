// 102. Binary Tree Level Order Traversal

// -------------------------------------------

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// -------------------------------------------

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let q = [];
    q.push(root);
    
    while (q.length > 0) {
        // Anything *currently* in the queue is a part of this level
        let qLen = q.length;
        let level = [];
        
        for (let i = 0; i < qLen; i++) {
            let node = q.shift();
            
            if (node) {
                level.push(node.val);
                
                // Not a part of this level - but, need to be addressed later
                q.push(node.left);
                q.push(node.right);
            }
        }
        
        // Sanity check; could be empty
        if (level.length > 0) {
            result.push(level);
        }
    }
    
    return result;
};