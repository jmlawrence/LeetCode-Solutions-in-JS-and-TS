// 1143. Longest Common Subsequence

// -------------------------------------------

// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// ------

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// -------------------------------------------

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = [];
    
    // m * n matrix of 0's
    for (let i = 0; i < text1.length + 1; i++) {
        let inner = [];
        for (let j = 0; j < text2.length + 1; j++) {
            inner.push(0);
        }
        
        dp.push(inner);
    }
    
    // Go through both, backwards
    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            
            // If the letter is the same
            if (text1[i] === text2[j]) {
                // Update cell to be 1 + bottom-right [add 1 to both i and j]
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                // Update cell to be max(bottom, right) [add one to i, and also in j]
                dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }
    
    // Return top-left number
    return dp[0][0];
};