// 215. Kth Largest Element in an Array

// Return the k-th largest element in an unsorted array.

// Approach
// Simple (and clear): sort the array and pick the k-th from end. Time O(n log n), Space O(1) extra.
// For interview follow-up, mention Quickselect (average O(n)).

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // Sort ascending and take the element at length - k
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
