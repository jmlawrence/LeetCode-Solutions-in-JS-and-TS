// 79. Word Search

// URL: https://leetcode.com/problems/word-search/

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2: 
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3: 
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Helper function to check if current coordinates is out of bounds
const isOutOfBounds = (board, row, col) => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return true;
    }
    return false;
};
const checkNeighbors = (board, word, row, col) => {
    // Base case - word is empty meaning we have successfully matched the entire word
    if (!word.length) return true;
    // If current coordinates are either out of bounds or doesn't match the character of word that we are checking - means we are on a bad path
    if (isOutOfBounds(board, row, col) || board[row][col] !== word[0]) return false;
    // Save current character for resetting later
    const currChar = board[row][col];
    // Passed above checks so we remove the character we have succesfully checked
    const newWord = word.substr(1);
    // Invalidate the current coordinate so we don't come back here
    board[row][col] = '.';
    // Search down the path of all neighbors
    if (
        checkNeighbors(board, newWord, row+1, col) ||
        checkNeighbors(board, newWord, row-1, col) ||
        checkNeighbors(board, newWord, row, col+1) ||
        checkNeighbors(board, newWord, row, col-1)
    ) {
        return true;
    }
    // Neighbor paths failed so we can reset the current coordinates to the character it should be
    board[row][col] = currChar;
};
var exist = function(board, word) {
    // Run checkNeighbors on every coordinate
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (checkNeighbors(board, word, row, col)) return true;
        }
    }
    return false;
};