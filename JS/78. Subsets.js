// 78. Subsets

// URL: https://leetcode.com/problems/subsets/

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const subset = [];

  const dfs = (i) => {
    // Base case
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    // Include
    subset.push(nums[i]);
    dfs(i + 1);

    // Skip
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);

  return result;
};
