// 46. Permutations

// URL: https://leetcode.com/problems/permutations/

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  // Base case
  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let _ in nums) {
    let n = nums.shift();
    let perms = permute(nums);

    for (let perm of perms) {
      perm.push(n);
    }

    result.push(...perms);
    nums.push(n);
  }

  return result;
};
