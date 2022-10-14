// 124. Binary Tree Maximum Path Sum

// -------------------------------------------

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

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
 * @return {number}
 */
var maxPathSum = function(root) {
    let result = root.val;
    
    const dfs = (node) => {
        if (!node) {
            return 0;
        }
        
        // Recurrsive - go left and right
        let leftMax = dfs(node.left);
        let rightMax = dfs(node.right);
        
        // Gets rid of negatives.
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);
        
        // Update result if node + left + right is better than existing result.
        // Since we can only have one split - see if having the split here results in biggest path.
        result = Math.max(result, node.val + leftMax + rightMax);
        
        // Return current val + either left or right
        return node.val + Math.max(leftMax, rightMax);
    }
    
    dfs(root);
    
    return result;
};