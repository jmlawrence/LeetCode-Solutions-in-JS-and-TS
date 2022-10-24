// 235. Lowest Common Ancestor of a Binary Search Tree

// -------------------------------------------

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// -------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Let's start at the root
    let current = root;
    
    // While we haven't found anything
    while (current) {
        // Just convenience
        let cur = current.val;
        
        // If both the values are higher than current: LCA must be to the right
        if (p.val > cur && q.val > cur) {
            current = current.right;
            
        // // If both the values are lower than current: LCA must be to the left
        } else if (p.val < cur && q.val < cur) {
            current = current.left;
        
            // If one is to the left, and one is to the right - we are at common ancestor; return!
        } else {
            return current;
        }
    }
};