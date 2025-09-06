// 1. Two Sum (Hash Map)
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Approach: Use a hash map from value -> index. For each number, check if target - num exists.
// Time: O(n), Space: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
};
