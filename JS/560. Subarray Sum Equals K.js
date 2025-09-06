// 560. Subarray Sum Equals K

// Count number of continuous subarrays whose sum equals k.

// Approach
// Use prefix sums and a hashmap counting occurrences of prefix sums.
// For each prefix sum S, we look for S - k in the map.
// Time: O(n), Space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1); // base prefix
  let sum = 0, count = 0;
  for (const n of nums) {
    sum += n;
    // If we've seen sum - k before, add those occurrences
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
