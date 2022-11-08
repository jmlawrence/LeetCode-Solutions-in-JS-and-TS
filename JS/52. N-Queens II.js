// 52. N-Queens II

// URL: https://leetcode.com/problems/n-queens-ii/

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:

// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  // NOTE: This is identical to NQueens - but, we return the count.
  // Since we just need the count, we can skip all the board manipulation.
  // Instead, we just increment a counter whenever we would have pushed into the set.
  const cols = new Set();
  const positiveDiagonals = new Set(); // r + c
  const negativeDiagonals = new Set(); // r - c
  let resultCount = 0;

  const backTrack = (row) => {
    if (row === n) {
      resultCount++;
      return;
    }

    for (let col = 0; col < n; col++) {
      // Check if spot is invalid on this run
      if (
        cols.has(col) ||
        positiveDiagonals.has(row + col) ||
        negativeDiagonals.has(row - col)
      ) {
        continue;
      }

      // Update sets
      cols.add(col);
      positiveDiagonals.add(row + col);
      negativeDiagonals.add(row - col);

      backTrack(row + 1);

      // Undo for next path
      cols.delete(col);
      positiveDiagonals.delete(row + col);
      negativeDiagonals.delete(row - col);
    }
  };

  backTrack(0);

  return resultCount;
};
