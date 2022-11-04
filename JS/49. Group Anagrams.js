// 49. Group Anagrams

// URL: https://leetcode.com/problems/group-anagrams/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};

  for (const s of strs) {
    let count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 97] += 1;
    }

    const key = count.join();
    key in result
      ? result[key].push(s)
      : (result[key] = [s]);
  }

  return Object.values(result);
};
