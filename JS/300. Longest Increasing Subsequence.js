// 300. Longest Increasing Subsequence

// -------------------------------------------

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// ---------

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// -------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // Arr nums long of i's
    let dp = new Array(nums.length).fill(1);
    
    // End to start
    for (let i = nums.length - 1; i >= 0; i--) {
        // i to end
        for (let j = i + 1; j < nums.length; j++) {
            // If increasing
            if (nums[i] < nums[j]) {
                // Replace dp[i] if dp[j] + 1 is bigger
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    
    // Return the largest subsequence
    return Math.max(...dp);
};