// 139. Word Break

// -------------------------------------------

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// ------------

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// -------------------------------------------

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Default to all false
    let dp = new Array(s.length).fill(false);
    
    // Default the last one to true
    dp[s.length] = true;
    
    // End to beginning ...
    for (let i = s.length; i >= 0; i--) {
        // For all the words ...
        for (const word of wordDict) {
            let endOfWordIdx = i + word.length;
            let wordIsInBounds = endOfWordIdx <= s.length;
            let wordIsInRemainingString = s.substring(i, endOfWordIdx) === word;
            
            // Point this index to value of where it would end up (true or false)
            if (wordIsInBounds && wordIsInRemainingString) {
                dp[i] = dp[endOfWordIdx];
            }
            
            // If the branch we found was true - no need to keep looking for more words
            if (dp[i]) {
                break;
            }
        }
    }
    
    // Return if 'valid path' to end of word exists
    return dp[0];
};