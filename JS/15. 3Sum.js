// 15. 3Sum
/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // NOTE: The idea here is that we use the same logic as 2Sum: have a far left pointer and a far-right pointer. But! The goal here is to match 0; not a argument provided goal.
  // But, in this case, we need to loop through everything while keeping track of any three that equal 0. We want to return an array of triplets; but, make sure the triplets aren't the same. We don't need to don't need to do any special logic; since it already handled in the algorithm.
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // Current num
    let currentNum = nums[i];

    // ?? currentNum is same as previous - get out
    if (i > 0 && currentNum === nums[i - 1]) {
      continue;
    }

    // No need to check index 0
    let left = i + 1;

    // Right = end
    let right = nums.length - 1;

    while (left < right) {
      let threeSum = currentNum + nums[left] + nums[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        // We found a result!
        result.push([currentNum, nums[left], nums[right]]);
        left++;

        // While same numbers are adjacent and left and right aren't overlapping ...
        // ... keep moving left pointer
        while (
          nums[left] === nums[left - 1] &&
          left < right
        ) {
          left++;
        }
      }
    }
  }

  return result;
};
