// 14. Longest Common Prefix

// URL: https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0;
  let longest = '';

  while (true) {
    let theSame = true;
    let prefixThisLoop = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== prefixThisLoop) {
        theSame = false;
        break;
      }
    }

    if (!theSame || !prefixThisLoop) {
      break;
    }

    longest += prefixThisLoop;
    i++;
  }

  return longest;
};
