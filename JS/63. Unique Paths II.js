// 63. Unique Paths II

// Unique paths in grid with obstacles (1 = obstacle).

// Approach
// DP in-place or using 1D array. dp[j] = ways to reach current cell in column j.
// Time: O(m*n), Space: O(n)

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = new Array(n).fill(0);
  dp[0] = obstacleGrid[0][0] === 1 ? 0 : 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) dp[j] = 0;
      else if (j > 0) dp[j] += dp[j - 1];
    }
  }
  return dp[n - 1];
};
