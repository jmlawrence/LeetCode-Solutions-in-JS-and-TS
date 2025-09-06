// 27. Remove Element
// Problem: Remove all occurrences of val in nums in-place, return new length.
// Approach: Two pointers; overwrite non-val elements.
// Time: O(n), Space: O(1)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) {
    return 0;
  }

  // Pointer for next valid position
  let leftPointer = 0;

  // Iterate through array
  for (let i = 0; i < nums.length; i++) {
    // If current element is not val, place it at leftPointer
    if (nums[i] !== val) {
      nums[leftPointer] = nums[i];
      // Move pointer forward
      leftPointer++;
    }
    // Else, skip it
  }

  // Return count of non-val elements
  return leftPointer;
};
