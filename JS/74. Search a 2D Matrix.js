// 74. Search a 2D Matrix
// Problem: Write an efficient algorithm that searches for a value in an m x n matrix.
// Approach: Treat as 1D array, binary search.
// Time: O(log(m*n)), Space: O(1)

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  const m = matrix.length, n = matrix[0].length;
  let l = 0, r = m * n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    if (val < target) l = mid + 1;
    else r = mid - 1;
  }
  return false;
};
