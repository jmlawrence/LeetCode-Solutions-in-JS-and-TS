// 104. Maximum Depth of Binary Tree (Recursive)
// Problem: Given the root of a binary tree, return its maximum depth.
// Approach: Recursive DFS, max depth is 1 + max of left/right subtrees.
// Time: O(n), Space: O(h)

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};