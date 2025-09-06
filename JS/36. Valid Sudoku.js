// 36. Valid Sudoku

// Determine if a 9x9 Sudoku board is valid (no duplicates in rows, cols, 3x3 boxes)

// Approach
// Track seen digits in rows, cols, and boxes using sets.
// Time: O(9*9) => O(1) effectively, Space: O(81)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;
      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3); // box index
      // If seen in row/col/box => invalid
      if (rows[r].has(val) || cols[c].has(val) || boxes[b].has(val)) return false;
      rows[r].add(val);
      cols[c].add(val);
      boxes[b].add(val);
    }
  }
  return true;
};
