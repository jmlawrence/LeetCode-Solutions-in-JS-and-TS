// 1926. Nearest Exit from Entrance in Maze

// URL: https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/

// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// Example 1:
// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.

// Example 2:
// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.

// Example 3:
// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
var nearestExit = function(maze, entrance) {
    // The idea is to use a queue with each element in the queue representing a valid space on the board and how many steps it took to get there
    const m = maze.length, n = maze[0].length;
    if (m === 0 || n === 0 || m === 1 && n === 1) return -1;
    const [entranceY, entranceX] = entrance;
    maze[entranceY][entranceX] = "+";
    // Add the entrance, and zero steps to the queue
    const q = [[entranceY, entranceX, 0]];
    // No invalid steps will get added to the queue so we can terminate the loop once all elements (valid steps) have been processed
    while (q.length) {
        const [y, x, step] = q.pop();
        // dir acts as [right, left, up, down]
        for (const [dy, dx] of dir) {
            const ny = y + dy;
            const nx = x + dx;
            const nextStep = step + 1;
            // If taking this step would cause you to step out of bounds "continue" to not add this step to the queue
            const overBorder = ny < 0 || ny >= m || nx < 0 || nx >= n;
            if (overBorder){
                continue;   
            }
            // If taking this step would cause you to step on a wall or a previously visited square "continue" to not add this step to the queue
            if (maze[ny][nx] == "+") {
                continue;
            }
            // If we are at the border of the grid we have found an exit as a result of taking a step. Return the step count
            if (ny === 0 || ny === m - 1 || nx === 0 || nx === n - 1) return nextStep;
            // At this point we know this is a valid step but not an exit so we do 2 things:
            // 1. Set this step location to a "wall" to represent we have already visited
            maze[ny][nx] = "+";
            // 2. Add this valid step to the back of the queue
            // This allows for steps in the queue with a lower step count to be processed first,
            // Thus ensuring we always return the shortest path.
            q.unshift([ny, nx, nextStep]);
        }
    }
    // All valid steps have been removed from the queue and no exits have been found
    return -1;
};