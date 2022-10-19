// 58. Length of Last Word
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // split on whitespaces
    const allWords = s.split(/\s+/);
    // remove any lingering whitespaces
    const filterOutNonWords = allWords.filter(word => word);
    // return the length of the last element in this array of words
    return filterOutNonWords[filterOutNonWords.length - 1].length;
};