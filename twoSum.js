// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Put map array into objects, with vals and indicies
  const mapped = nums.map((e, i) => ({ val: e, idx: i }));

  // Sort them, from smallest to largest
  mapped.sort((a, b) => a.val - b.val);

  // Pointer at left
  let left = 0;

  // Pointer at right
  let right = nums.length - 1;

  // Until they cross ...
  while (left < right) {
    // Get the sum
    const current = mapped[left].val + mapped[right].val;

    // If the sum is the target, return the indicies
    if (current === target) {
      return [mapped[left].idx, mapped[right].idx];
      // if it's less, increase the left pointer
    } else if (current < target) {
      left++;

      // if it's more, decrease the left pointer
    } else if (current > target) {
      right--;
    }
  }

  return [];
};
