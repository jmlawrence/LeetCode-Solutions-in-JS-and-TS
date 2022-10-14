// 54. Spiral Matrix
// -------------------------------------------

// Given an m x n matrix, return all elements of the matrix in spiral order.

// ---------- 

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// -------------------------------------------

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;
    
    // Remember: all the 'bottoms' and 'rights' need a '- 1'
    while (left < right && top < bottom) {
        // TOP
        for (let l = left; l < right; l++) {
            res.push(matrix[top][l]);
        }
        top++;
        
        // RIGHT
        for (let t = top; t < bottom; t++) {
            res.push(matrix[t][right - 1]);
        }
        right--;
        
        // BREAK CHECK
        if (left >= right || top >= bottom) {
            break;
        }
        
        // BOTTOM
        for (let r = right - 1; r >= left; r--) {
            res.push(matrix[bottom - 1][r]);
        }
        bottom--;
        
        // LEFT
        for (let b = bottom - 1; b >= top; b--) {
            res.push(matrix[b][left]);
        }
        left++;
    }
    
    return res;
};