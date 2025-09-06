// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found, return [-1, -1].

// Approach
// Binary search twice to find leftmost (first) and rightmost (last) positions.
// Time: O(log n), Space: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // Find the first index >= target
  const first = lowerBound(nums, target);
  // If out of bounds or not equal, target doesn't exist
  if (first === nums.length || nums[first] !== target) return [-1, -1];
  // Find the first index > target, then step back one
  const last = upperBound(nums, target) - 1;
  return [first, last];
};

const lowerBound = (a, x) => {
  // Invariant: answer in [l, r); search for first position with a[pos] >= x
  let l = 0, r = a.length;
  while (l < r) {
    const m = (l + r) >> 1; // mid-point
    if (a[m] < x) l = m + 1; // too small, go right
    else r = m;              // enough or bigger, keep mid
  }
  return l;
};

const upperBound = (a, x) => {
  // Invariant: answer in [l, r); search for first position with a[pos] > x
  let l = 0, r = a.length;
  while (l < r) {
    const m = (l + r) >> 1; // mid-point
    if (a[m] <= x) l = m + 1; // still <= x, go right
    else r = m;                // strictly greater, keep mid
  }
  return l;
};
