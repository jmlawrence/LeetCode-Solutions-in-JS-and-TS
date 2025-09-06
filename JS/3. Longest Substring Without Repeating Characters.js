// 3. Longest Substring Without Repeating Characters
// Problem: Given a string s, find the length of the longest substring without repeating characters.
// 
// Core Concept: Sliding Window Technique
// The sliding window is a powerful pattern for substring/subarray problems:
// - Expand the window by moving the right pointer
// - Contract the window when constraint is violated (duplicate found)
// - Track the maximum valid window size throughout
//
// Key Insight: We only need to track what's currently in our window, not the entire string
//
// Approach: Two-pointer sliding window with Set for O(1) duplicate detection
// Time: O(n) - each character added/removed at most once
// Space: O(min(m,n)) where m is charset size, n is string length

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Edge case: empty string
    if (!s.length) return 0;

    // Set to track characters in current window - O(1) lookups
    const charSet = new Set();

    // Two pointers defining our sliding window [left, right]
    let left = 0;
    let maxLength = 0;

    // Expand window by moving right pointer
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];

        // Contract window while duplicate exists
        // Key insight: we shrink from left until the duplicate is removed
        while (charSet.has(rightChar)) {
            charSet.delete(s[left]);
            left++; // Shrink window from left
        }

        // Add current character to window
        charSet.add(rightChar);

        // Update maximum length seen so far
        // Window size = right - left + 1
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};