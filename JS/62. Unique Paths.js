// 62. Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // n = cols
    let row = new Array(n).fill(1);
    
    // Go through all the rows
    for (let i = 0; i < m - 1; i++) {
        // For each row, create a new array of 1s
        let newRow = new Array(n).fill(1);
        
        // For all the columns, right to left
        for (let j = n - 2; j >= 0; j--) {
            // Add value down (row[j]) and to the right (newRow[j + 1])
            let right = newRow[j + 1];
            let down = row[j];
            
            newRow[j] = right + down;
        }
        
        row = newRow;
    }
    
    return row[0];
};