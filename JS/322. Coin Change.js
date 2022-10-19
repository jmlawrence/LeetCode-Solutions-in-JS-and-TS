// 322. Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // Empty array of nums, array + 1 length
  // They are filled with Infinity because:
  // - We are using min() to determine if to replace
  // - We can identify later if it was changed
  let dp = new Array(amount + 1).fill(Infinity);

  // We initialize index 0 to be 0 -> it takes 0 coins to achieve 0
  dp[0] = 0;

  // For all coin amounts (1 -> amount + 1) ...
  for (let i = 1; i <= amount; i++) {
    // For all coins available to us ...
    for (const coin of coins) {
      let difference = i - coin;

      // If current amount - value of current coin is worth looking at ...
      // ... since we don't want less than 0
      if (difference >= 0) {
        // Update this amount IDX to equal to the fewest steps required to get here ...
        // ... either the current amount, or the dp[difference] + 1
        // ... why + 1? Because we had to get the difference (which used a coin)
        dp[i] = Math.min(dp[i], 1 + dp[difference]);
      }
    }
  }

  // If the amount is Infinity - it wasn't achievable - so return -1
  return dp[amount] === Infinity ? -1 : dp[amount];
};
