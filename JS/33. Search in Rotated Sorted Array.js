// 33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Compute mid index for current search range
    // (Using floor to pick the lower middle on even lengths)
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }
    // Determine which side [left..middle] or [middle..right] is strictly sorted
    // This helps decide which half to discard.
    let leftIsSorted = nums[left] <= nums[middle];

    if (leftIsSorted) {
      // Left half [left..middle] is sorted.
      // If target is NOT within this sorted left half, it must be in right half.
      if (target > nums[middle] || target < nums[left]) {
        // target is not between nums[left] and nums[middle], search right
        left = middle + 1;
      } else {
        // target is within sorted left half, narrow to left
        right = middle - 1;
      }
    } else {
      // Right half [middle..right] is sorted.
      // If target is NOT within this sorted right half, it must be in left half.
      if (target < nums[middle] || target > nums[right]) {
        // target not between nums[middle] and nums[right], search left
        right = middle - 1;
      } else {
        // target is within sorted right half, narrow to right
        left = middle + 1;
      }
    }
  }

  return -1;
};
