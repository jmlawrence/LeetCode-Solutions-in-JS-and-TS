// 51. N-Queens

// URL: https://leetcode.com/problems/n-queens/

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const cols = new Set();
  const positiveDiagonals = new Set(); // r + c
  const negativeDiagonals = new Set(); // r - c
  const result = [];

  const board = [...new Array(n)].map(() =>
    new Array(n).fill('.')
  );

  const backTrack = (row) => {
    if (row === n) {
      const copy = [...board].map((s) => s.join(''));
      result.push(copy);
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
      board[row][col] = 'Q';

      backTrack(row + 1);

      // Undo for next path
      cols.delete(col);
      positiveDiagonals.delete(row + col);
      negativeDiagonals.delete(row - col);
      board[row][col] = '.';
    }
  };

  backTrack(0);

  return result;
};
