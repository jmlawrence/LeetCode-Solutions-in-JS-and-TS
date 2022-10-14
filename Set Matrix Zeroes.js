// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

// Input:     [[1,1,1],
//             [1,0,1],
//             [1,1,1]]

// Output:     [[1,0,1],
//              [0,0,0],
//              [1,0,1]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let rowZero = 0;
    
    // Mark cols and rows that need to be zeroed
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === 0) {
                // Set top cell of that col to be 0.
                matrix[0][col] = 0;                
                
                // If top row, we use special var "rowZero"
                if (row > 0) {
                    matrix[row][0] = 0;
                } else { 
                    rowZero = true;
                }
            }
        }
    }
    
    // For non-top and non-left cells
    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0;
            }
        }
    }
    
    // For left cells
    if (matrix[0][0] === 0) {
        for (let row = 0; row < rows; row++) {
            matrix[row][0] = 0;
        }
    }
    
    // For top cells
    if (rowZero) {
        for (let col = 0; col < cols; col++) {
            matrix[0][col] = 0;
        }
    }
};