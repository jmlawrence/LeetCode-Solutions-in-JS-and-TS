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
    let middle = left + right;

    if (nums[middle] === target) {
      return middle;
    }
    z``;
    let leftIsSorted = nums[left] <= nums[middle];

    if (leftIsSorted) {
      // target is on the right or less than the left: left is now the middle
      if (target > nums[middle] || target < nums[left]) {
        left = mid + 1;
        // otherwise; right is the middle
      } else {
        right = middle - 1;
      }
    } else {
      // if the target is on the left side or target is greater than the right: right is now the middle
      if (target < nums[middle] || target > nums[right]) {
        right = middle - 1;
        // otherwise; left is the middle
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
};
