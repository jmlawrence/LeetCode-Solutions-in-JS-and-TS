// 1143. Longest Common Subsequence
// Problem: Given two strings text1 and text2, return the length of their longest common subsequence.
// Approach: DP table where dp[i][j] is LCS of text1[0..i] and text2[0..j].
// Time: O(m*n), Space: O(m*n)

var longestCommonSubsequence = function (text1, text2) {
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