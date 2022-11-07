// 40. Combination Sum II

// URL: https://leetcode.com/problems/combination-sum-ii/

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // NOTE: The idea here is to do a sliding window approach.
  // We sort the numbers, the go from left to right (skipping adjacent duplicates),
  // ... and recurrsively trying all the combinations.
  const sorted = candidates.sort((a, b) => a - b);
  const result = [];

  const backTrack = (current, pos, target) => {
    // Base case
    if (target === 0) {
      result.push([...current]);
    }

    // Handle the base case and any case where it goes too far
    if (target <= 0) {
      return;
    }

    let prev = -1;
    for (let i = pos; i < sorted.length; i++) {
      const num = sorted[i];

      // Important: we skip similar adjacent numbers.
      // This allows us to remove duplicates.
      if (num === prev) {
        continue;
      }

      // Push in the num
      current.push(num);

      // Try it
      backTrack(current, i + 1, target - num);

      // Take out the num
      current.pop();
      prev = num;
    }
  };

  backTrack([], 0, target);

  return result;
};
