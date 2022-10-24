// 695. Max Area of Island

// Problem description
/*
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
 * You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island
 *
 * Return the maximum area of an island in grid. If there is no island, return 0.
 */

// Example 1:
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// The solution ---------------------------

function maxAreaOfIsland(grid: number[][]): number {
  let size: number = 0;
  let maxSize: number = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        size = 0;
        maxSize = Math.max(
          maxSize,
          findIslandSize(grid, i, j)
        );
      }
    }
  }
  function findIslandSize(
    grid: number[][],
    sr: number,
    sc: number
  ): number {
    if (grid[sr][sc] == 1) {
      grid[sr][sc] = 0;
      size++;
    }
    if (sr + 1 < grid.length && grid[sr + 1][sc] == 1) {
      findIslandSize(grid, sr + 1, sc);
    }
    if (sr - 1 >= 0 && grid[sr - 1][sc] == 1) {
      findIslandSize(grid, sr - 1, sc);
    }
    if (sc + 1 < grid[sr].length && grid[sr][sc + 1] == 1) {
      findIslandSize(grid, sr, sc + 1);
    }
    if (sc - 1 >= 0 && grid[sr][sc - 1] == 1) {
      findIslandSize(grid, sr, sc - 1);
    }
    return size;
  }
  return maxSize;
}
