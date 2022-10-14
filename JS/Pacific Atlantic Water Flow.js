// 417. Pacific Atlantic Water Flow
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let pacific = new Set();
    let atlantic = new Set();
    
    const dfs = (row, col, set, prevHeight) => {
        if (set.has([row, col].join('-')) || row < 0 || col < 0 || row === rows || col === cols || heights[row][col] < prevHeight) {
            return;
        }
        
        set.add([row, col].join('-'));
        
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [c, r] of directions) {
            let rSum = r + row;
            let cSum = c + col;
            
            dfs(rSum, cSum, set, heights[row][col]);
        }
    }
    
    for (let col = 0; col < cols; col++) {
        dfs(0, col, pacific, heights[0][col]);
        dfs(rows - 1, col, atlantic, heights[rows - 1][col]);
    }
    
    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pacific, heights[row][0]);
        dfs(row, cols - 1, atlantic, heights[row][cols - 1]);
    }
    
    
    return [...pacific]
        .filter(e => atlantic.has(e))
        .map(e => e.split('-'));
};