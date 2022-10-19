// 91. Decode Ways

// -------------------------------------------

// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

// -------------------------------

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

// -------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // Obj | key: s.length => value: 1
    let dp = { [s.length]: 1 };
    
    // End to start
    for (let i = s.length - 1; i >= 0; i--) {
        let startsWith0 = s[i] === "0";
        let startsWith1 = s[i] === "1";
        let startsWith2 = s[i] === "2";
        let isInBounds = i + 1 < s.length;
        let isValidStartingWith2 = startsWith2 && "0123456".includes(s[i + 1]);
        let isValidTwoDigitNumber = startsWith1 || isValidStartingWith2;
        
        // 0
        if (startsWith0) {
            dp[i] = 0;
            
        // > 0
        } else {
            dp[i] = dp[i + 1];
        }
        
        // Double digits
        if (isInBounds && isValidTwoDigitNumber) {
            dp[i] += dp[i + 2];
        }
    }
    
    // Return first
    return dp[0];
};