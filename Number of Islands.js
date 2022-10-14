// 200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Use a set to track visited or not
    const visited = new Set();

    // Counter for islands
    let islands = 0;
    
    // Breadth first search
    const bfs = (r, c) => {
        // A queue - since we're doing breadth 
        // queue -> BFS -|- stack -> DFS
        let q = [];
        
        // Add current to visited
        visited.add([r, c].join('-'));
        
        // Add current to queue
        q.push([r, c]);
        
        // If anything is still left in the queue - keep looking
        while (q.length > 0) {
            // Get the latest of the queue
            const [row, col] = q.shift();

            // Helper arr to grab adjacent cells (since we don't care about diagonal)
            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            
            // For the four directions above ...
            for (const [dr, dc] of directions) {
                // ... add those to the current row + col
                let rSum = row + dr;
                let cSum = col + dc;
                
                // Make sure indicies can be found inside the graph
                let isValidCell = rSum >= 0 && cSum >= 0 && rSum < rows && cSum < cols;

                // Check indicies against visited
                let visitedKey = [rSum, cSum].join("-");
                let hasNotBeenVisited = !visited.has(visitedKey);
                
                // If valid, hasn't been visited, and is a "1" ...
                if (isValidCell && grid[rSum][cSum] === "1" && hasNotBeenVisited) {
                    // ... add to queue ...
                    q.push([rSum, cSum]);

                    // ... and add to visited
                    visited.add(visitedKey);
                }
            }
        }
    }
    
    // Loop through every col and row
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let visitedKey = [r, c].join("-");
            let hasNotBeenVisited = !visited.has(visitedKey);
            
            // See if "1" and hasn't been visited
            // The visited check (which runs for every cell) will start failing a lot ...
            // ... as we loop, since the BFS is adding all adjacent cells to the visited set.
            if (grid[r][c] === "1" && hasNotBeenVisited) {
                // We haven't visited here! Let's search around and add all adjacent cells to the queue
                bfs(r, c);

                // Since we're in the this if block - this is the first time we've seen this island. Add to counter.
                islands++;
            }
        }
    }
    
    return islands;
};