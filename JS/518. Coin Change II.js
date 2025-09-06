// 518. Coin Change II

// Count combinations to make amount using unlimited coins of given denominations.

// Approach
// Classic 1D DP: dp[a] += dp[a - coin] for each coin, iterating coins first to avoid duplicates.
// Time: O(amount * coins), Space: O(amount)

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) dp[a] += dp[a - coin];
  }
  return dp[amount];
};
