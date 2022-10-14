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
    
    fill(sr, sc);
    
    function fill(i, j) {
        let isOutOfBounds = i < 0 || i >=image.length || j < 0 || i >= image[0].length;
        let isNotExistingColor = isOutOfBounds || image[i][j] !== existingColor;
        
        if (isNotExistingColor) {
            return;
        }
        
        // Change current
        image[i][j] = newColor;
        
        // Change top, left, bottom, right
        fill(i + 1, j);
        fill(i - 1, j);
        fill(i, j + 1);
        fill(i, j - 1);
    }
    
    return image;
};