// 11. Container With Most Water
// Problem: Given an array height, find two lines that form a container with the most water.
// Approach: Two pointers from ends, move the shorter one inward, track max area.
// Time: O(n), Space: O(1)

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    let candidate =
      (right - left) *
      Math.min(height[left], height[right]);

    best = Math.max(best, candidate);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return best;
};
