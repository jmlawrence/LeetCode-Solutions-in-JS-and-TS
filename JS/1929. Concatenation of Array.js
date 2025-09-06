// 1929. Concatenation of Array
// Problem: Given an integer array nums of length n, return the concatenation of two nums arrays.
// Approach: Use spread operator or concat to duplicate the array.
// Time: O(n), Space: O(n)

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};
