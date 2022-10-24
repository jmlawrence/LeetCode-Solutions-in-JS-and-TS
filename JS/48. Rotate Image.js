// 48. Rotate Image
// -------------------------------------------

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// ------------------

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// -------------------------------------------

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // It's a square - so we just need these two to start with
    let left = 0;
    let right = matrix.length - 1;
    
    while (left < right) {   
        // Tricky loop here (right - left)
        for (let i = 0; i < right - left; i++) {
            // Derive these - since it's a square
            let top = left;
            let bottom = right;
            
            // Save off the top left val for later
            let topLeft = matrix[top][left + i];
            
            // Update top-left to be bottom-left
            matrix[top][left + i] = matrix[bottom - i][left];
            
            // Update bottom-left to be bottom-right
            matrix[bottom - i][left] = matrix[bottom][right - i];
            
            // Update bottom-right to be top-right
            matrix[bottom][right - i] = matrix[top + i][right];
            
            // Update top-right to be saved var
            matrix[top + i][right] = topLeft;
        }
        
        // Since it's square - we just update these
        left++;
        right--;
    }
};