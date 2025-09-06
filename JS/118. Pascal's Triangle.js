// 118. Pascal's Triangle
// Problem: Given an integer numRows, return the first numRows of Pascal's triangle.
// Approach: Build row by row, each element is sum of two above.
// Time: O(n^2), Space: O(n^2)

var generate = function (numRows) {
  let rows = [[1]];
  let count = 1;

  // If there's just one row, we want to just return the single row
  if (numRows === 1) {
    return rows;
  }

  while (count < numRows) {
    // Let's default the new row to having a 1
    let n = [1];
    let prev = rows[count - 1];

    // For the middle digits (before the first and last ones) ...
    for (let i = 0; i < count - 1; i++) {
      // Let's push in the sum of the i and i + 1 values
      n.push(prev[i] + prev[i + 1]);
    }

    // Let's add a new 1 at the end
    n.push(1);

    // Add this to the rows array
    rows.push(n);

    // Bump the counter
    count++;
  }

  return rows;
};
