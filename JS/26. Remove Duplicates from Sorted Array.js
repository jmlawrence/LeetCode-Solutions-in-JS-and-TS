// 26. Remove Duplicates from Sorted Array
// Problem: Remove duplicates in-place from sorted array, return new length.
// Approach: Two pointers; overwrite duplicates with next unique.
// Time: O(n), Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Pointer for next unique position
  let pointer = 1;

  for (let i = 1; i < nums.length; i++) {
    // If current differs from previous, it's unique
    if (nums[i] !== nums[i - 1]) {
      nums[pointer] = nums[i]; // Overwrite at pointer
      pointer++; // Move pointer forward
    }
    // Else, skip duplicate
  }

  return pointer; // New length
};
