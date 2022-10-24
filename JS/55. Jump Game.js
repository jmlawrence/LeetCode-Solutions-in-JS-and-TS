// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Goal is at the end (where we need to reach)
  let goal = nums.length - 1;

  // For all the nums, from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    // If our current IDX + how far it can go >= the current goal ...
    if (i + nums[i] >= goal) {
      // ... update the current goal to be the current IDX
      goal = i;
    }
  }

  // If the goal is 0 - that means that position 0 can get to the end.
  return goal === 0;
};
