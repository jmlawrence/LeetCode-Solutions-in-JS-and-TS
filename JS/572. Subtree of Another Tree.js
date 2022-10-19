// 572. Subtree of Another Tree

// -------------------------------------------

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// ---------- EXAMPLES ---------- //

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSameTree = (p, q) => {
  // If neither - same
  if (!p && !q) {
    return true;
  }

  // If both values exist and are same - keep going deeper
  if (p && q && q.val === p.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  // Default to false
  return false;
};

var isSubtree = function (root, subRoot) {
  // We're reached the end of this subtree - so, returning true
  if (!subRoot) {
    return true;
  }

  // We're still processing subtree - but, there is no main tree left - so, returning false
  if (!root) {
    return false;
  }

  // If this subtree is the same  - no need to keep looking - we found a match.
  if (isSameTree(root, subRoot)) {
    return true;
  }

  // Subtree is different - but, keep looking
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
