// 41. First Missing Positive

// Find the smallest missing positive integer in an unsorted array.

// Approach
// Place each number n at index n-1 when possible (in-place bucket). Then scan for first mismatch.
// Time: O(n), Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // Place nums[i] in its correct position while possible
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const tmp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = tmp;
    }
  }
  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1;
  return n + 1;
};
