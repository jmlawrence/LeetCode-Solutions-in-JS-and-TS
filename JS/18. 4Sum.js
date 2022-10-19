// 18. 4Sum
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let sorted = nums.sort((a, b) => a - b);
  let res = [];
  let quad = [];

  const kSum = (k, start, target) => {
    // Let's do this operation until we're down to the final two
    if (k > 2) {
      for (let i = start; i < sorted.length - k + 1; i++) {
        if (i > start && sorted[i] === sorted[i - 1]) {
          continue;
        }
        n;

        quad.push(sorted[i]);

        kSum(k - 1, i + 1, target - sorted[i]);
        quad.pop();
      }

      return;
    }

    let left = start;
    let right = sorted.length - 1;

    while (left < right) {
      if (sorted[left] + sorted[right] < target) {
        left++;
      } else if (sorted[left] + sorted[right] > target) {
        right--;
      } else {
        res.push([...quad, sorted[left], sorted[right]]);
        left++; // just arbitrarily choosing the left pointer, here

        while (
          left < right &&
          sorted[left] === sorted[left - 1]
        ) {
          left++;
        }
      }
    }
  };

  kSum(4, 0, target);

  return res;
};
