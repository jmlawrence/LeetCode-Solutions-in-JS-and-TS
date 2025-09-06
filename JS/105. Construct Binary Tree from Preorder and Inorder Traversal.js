// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Problem: Given preorder and inorder traversals, construct the binary tree.
// Approach: Recursively build tree using preorder root and inorder splits.
// Time: O(n), Space: O(n) for recursion and hashmap if optimized.

var buildTree = function (preorder, inorder) {
    // If either arr is empty - we're out
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    // The preorder sort always gives us the 'root' for the 
    // ... given part of the tree at is 0th index.
    let firstEl = preorder[0];
    let root = new TreeNode(firstEl);

    // The we use the root value to find where to partition the
    // ... inorder group
    let mid = inorder.indexOf(firstEl);

    // We split the arrs based on the 'mid' we just got.
    //
    // We grab the left sides (preorder does left half + 1 because we unshifted off the root)
    const rightIdx = mid + 1;
    root.left = buildTree(preorder.slice(1, rightIdx), inorder.slice(0, mid));

    // We grab off the right side (slice(1) will grab elements 2, 3, 4, ...)
    root.right = buildTree(preorder.slice(rightIdx), inorder.slice(rightIdx));

    return root;
};
