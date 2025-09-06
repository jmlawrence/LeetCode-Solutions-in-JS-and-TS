// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.

// Approach
// Two pointers with leftMax/rightMax. Water at i is min(leftMax, rightMax) - height[i] when positive.
// Time: O(n), Space: O(1)

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Two pointers walking inward
  let l = 0, r = height.length - 1;
  // Track best seen walls from each side
  let leftMax = 0, rightMax = 0, water = 0;
  while (l < r) {
    if (height[l] <= height[r]) {
      // Left side is the limiting wall
      leftMax = Math.max(leftMax, height[l]);
      // Water on left is bounded by leftMax
      water += leftMax - height[l];
      l++;
    } else {
      // Right side is the limiting wall
      rightMax = Math.max(rightMax, height[r]);
      // Water on right is bounded by rightMax
      water += rightMax - height[r];
      r--;
    }
  }
  return water;
};
