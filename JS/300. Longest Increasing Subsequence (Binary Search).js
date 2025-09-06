// 300. Longest Increasing Subsequence (Binary Search / Patience Sorting)

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Approach
// Maintain a tails array where tails[k] is the smallest tail value of an increasing subsequence of length k+1.
// For each num, binary search tails to find its position. Replace or append.
// Time: O(n log n), Space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const tails = [];
  for (const x of nums) {
    let l = 0, r = tails.length; // find first >= x
    while (l < r) {
      const m = (l + r) >> 1;
      if (tails[m] < x) l = m + 1; else r = m;
    }
    tails[l] = x;
  }
  return tails.length;
};
