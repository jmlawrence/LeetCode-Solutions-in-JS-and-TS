// 5. Longest Palindromic Substring

// -------------------------------------------

// Given a string s, return the longest palindromic substring in s.

// ---------------------

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// -------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestPal = "";
    
    // For every char
    for (let i = 0; i < s.length; i++) {
        // For odds and evens
        for (let offset = 0; offset < 2; offset++) {            
            let left = i;
            let right = i + offset;

            // While still palindrome
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                // If longer than longest
                if ((right - left + 1) > longestPal.length) {
                    // Update longest palindrome
                    longestPal = s.substring(left, right + 1);
                }

                // Move outwards from central point
                left--;
                right++;
            }
        }
    }
    
    return longestPal;
};