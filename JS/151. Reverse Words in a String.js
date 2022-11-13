// 151. Reverse Words in a String

// URL: https://leetcode.com/problems/reverse-words-in-a-string/

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Exmaple 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // This solution is made fairly trivial using the trim string method then splitting the string on 1+ spaces
    // Then we reverse the array and join the words with a single space.
    return s.trim().split(/\s+/).reverse().join(' ');
};