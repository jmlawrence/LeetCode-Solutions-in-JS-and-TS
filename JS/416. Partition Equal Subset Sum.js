// 416. Partition Equal Subset Sum

// Determine if array can be partitioned into two subsets with equal sum.

// Approach
// Subset-sum DP: target = total/2, use bitset or boolean DP 1D.
// Time: O(n * sum), Space: O(sum)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let t = target; t >= num; t--) {
      dp[t] = dp[t] || dp[t - num];
    }
  }
  return dp[target];
};
