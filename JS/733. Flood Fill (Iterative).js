// 733. Flood Fill

// -------------------------------------------

// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

// -------------------------------------------

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // The pixel chosen was already that new color - returning image un-touched.
    if (image[sr][sc] === newColor) {
        return image;
    }
    
    let existingColor = image[sr][sc];
    
    let q = [{row: sr, col: sc}];
    
    while (q.length > 0) {
        const {row, col} = q.pop();
        
        let isOutOfBounds = row < 0 || row >=image.length || col < 0 || col >= image[0].length;
        let isNotExistingColor = isOutOfBounds || image[row][col] !== existingColor;
        
        if (isOutOfBounds || isNotExistingColor) {
            continue;
        }
        
        // Change current
        image[row][col] = newColor;
        
        // Change top, left, bottom, right
        q.push({row: row + 1, col});
        q.push({row: row - 1, col});
        q.push({row, col: col + 1});
        q.push({row, col: col - 1});
    }
    
    return image;
};