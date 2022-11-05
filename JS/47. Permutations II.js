// 47. Permutations II

// URL: https://leetcode.com/problems/permutations-ii/

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // Same as Permutations I, but we dedupe the results
  let result = [];

  // Base case
  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let _ in nums) {
    let n = nums.shift();
    let perms = permuteUnique(nums);

    for (let perm of perms) {
      perm.push(n);
    }

    result.push(...perms);
    nums.push(n);
  }

  return dedup(result);
};

const dedup = (nums) => {
  const s = new Set();
  return nums.filter((a) => {
    const included = s.has(a.join(''));

    if (included) {
      return false;
    }

    s.add(a.join(''));
    return true;
  });
};
