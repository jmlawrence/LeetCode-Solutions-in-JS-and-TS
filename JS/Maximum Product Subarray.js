// 152. Maximum Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;

  for (const num of nums) {
    let maxCan = curMax * num;
    let minCan = curMin * num;

    curMax = Math.max(maxCan, minCan, num);
    curMin = Math.min(maxCan, minCan, num);

    result = Math.max(result, curMax);
  }

  return result;
};
