// 1047. Remove All Adjacent Duplicates in String

// URL: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// Example 1:
// Input: s = "abbaca"
// Output: "ca"

// Example 2:
// Input: s = "azxxzy"
// Output: "ay
/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const stack = [];
    for (let char of s) {
        // Remove duplicate or push the character to the end.
        // Removed characters then allow for comparison to the character that proceeded the duplicates
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }
    return stack.join('');
};