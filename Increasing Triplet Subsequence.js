// 334. Increasing Triplet Subsequence
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // NOTE: the trick here is that we only want to loop through it once.
  // How? As we loop through, me check if i is lower than it's last lowest; the same with k; and finally, if we hit the final value; we return true;
  if (nums.length < 3) {
    return false;
  }

  // Default to super high
  let i = Infinity;
  let j = Infinity;

  // Just loop through it once.
  for (let k = 0; k < nums.length; k++) {
    // If this number is lower than the one we have, set it
    if (nums[k] <= i) {
      i = nums[k];
      // If this number is lower than the one we have, set it
    } else if (nums[k] <= j) {
      j = nums[k];
    } else {
      // We found it
      return true;
    }
  }

  return false;
};
