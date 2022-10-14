// 994. gfg
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (
    !grid ||
    !grid[0] ||
    grid.length == 0 ||
    grid[0].length == 0
  )
    return -1;
  //maze from one to end four directions
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  //initial freshCount because if all freshCount cut down to 0 means works, return steps; otherwise, impossible return 0
  let freshCount = 0;
  //traverse grid, get total freshCount and queue<2's x, y> because searching 2 then check its all directions, let 2 ruins neighbor1
  const queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      } else if (grid[i][j] == 1) {
        freshCount++;
      }
    }
  }
  //intial step for count timer
  let step = 0;
  //traverse queue, doing BFS, search cur's 4 directions. if find 1,freshCount--
  while (queue.length && freshCount) {
    let size = queue.length;
    while (size > 0) {
      const pop = queue.shift();
      //traverse four directions, cur add diff
      for (const [x, y] of dir) {
        const nextX = pop[0] + x;
        const nextY = pop[1] + y;
        //exception, if out of boundary or not 1, skip
        if (
          nextX < 0 ||
          nextX >= grid.length ||
          nextY < 0 ||
          nextY >= grid[0].length ||
          grid[nextX][nextY] != 1
        ) {
          continue;
        }
        //now time to ruin 1
        grid[nextX][nextY] = 2;
        //add new rotted into queue, waiting for ruin other 1s
        queue.push([nextX, nextY]);
        freshCount--; //now cur cell 1-> 2
      }
      size--;
    }
    //done this level
    step++;
  }
  return freshCount == 0 ? step : -1; //if freshCount = 0 mean ruin all; otherwise, unsucessful
};
