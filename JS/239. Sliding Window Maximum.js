// 239. Sliding Window Maximum

// Given an array nums and a sliding window size k, return the max in each window.

// Approach
// Monotonic deque of indices decreasing by value. Front is max in window.
// Time: O(n), Space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const dq = []; // deque of indices, values strictly decreasing
  const res = [];

  const push = (i) => {
    // Maintain decreasing order: pop smaller/equal from the back
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();
    dq.push(i);
  };

  for (let i = 0; i < nums.length; i++) {
    // Add current index to deque
    push(i);
    // Remove indices that have fallen out of the window (left bound is i - k + 1)
    if (dq[0] <= i - k) dq.shift();
    // Once window is full, front holds the max
    if (i >= k - 1) res.push(nums[dq[0]]);
  }
  return res;
};
