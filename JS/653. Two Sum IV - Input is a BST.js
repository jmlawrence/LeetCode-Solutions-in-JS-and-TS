// 653. Two Sum IV - Input is a BST
// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:

// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // NOTE: Yes. It's a BTS being passed in; but that doesn't mean there is a special advantage to be had; other than you can use BFS or DFS to drill into it. The sorting doesn't help us. So, just use BFS or DFS to drill in and check against a set of values until you find something.

  // O(n) -> since the sorting of the tree doesn't help us.

  // Create a set (no duplicates + handy helper methods)
  let s = new Set();

  // DFS, could also use a BFS
  var dfs = (node) => {
    // If there's no node, we no that this path doesn't contain our solution
    if (!node) {
      return false;
    }

    // Let's see what the goal - current node value is
    let difference = k - node.val;

    // If we have the difference in our set; boom! We have the answer
    if (s.has(difference)) {
      return true;
    } else {
      // Welp. It didn't have the solution; but, while here, let's add this to the set.
      s.add(node.val);
    }

    // Here's the magic:
    // Let's check out both paths; if either is successful, we're good to go!
    return dfs(node.left) || dfs(node.right);
  };

  // Kick off the dfs(). This could also be IFEE'd
  return dfs(root);
};
