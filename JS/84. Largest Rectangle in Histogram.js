// 84. Largest Rectangle in Histogram

// Approach
// Monotonic increasing stack of indices. When a lower bar appears, pop and compute area with popped height.
// Time: O(n), Space: O(n)

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = []; // stack of indices with increasing heights
  let maxA = 0;
  for (let i = 0; i <= heights.length; i++) {
    // Sentinel 0 height at end forces remaining areas to finalize
    const h = i === heights.length ? 0 : heights[i];
    // When current bar is lower, compute areas for taller bars
    while (stack.length && h < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      // New left boundary is one right of current stack top
      const left = stack.length ? stack[stack.length - 1] + 1 : 0;
      const width = i - left; // right boundary is i - 1
      maxA = Math.max(maxA, height * width);
    }
    // Push current index; maintains increasing order
    stack.push(i);
  }
  return maxA;
};
