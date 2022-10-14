// 976. Largest Perimeter Triangle
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Example 1:

// Input: nums = [2,1,2]
// Output: 5
// Example 2:

// Input: nums = [1,2,1]
// Output: 0
var largestPerimeter = function (nums) {
  // NOTE: The trick here is to SORT it. Once sorted; you can skip a TON of work.
  // Firstly, it allows you to know that the 3 will be contiguous, and then you obviously want to start from the largest side to the smallest.
  // Secondly, it also allows a way simpler check for validity; just checking if the 2 smaller sides are bigger than the biggest.

  // Sort from biggest to smallest
  let sorted = nums.sort((a, b) => b - a);

  // Go through everything - except the final 2
  for (let i = 0; i < nums.length - 2; i++) {
    // Since it is sorted; we only have to check if the sum of the next 2 is greater than the current.
    if (sorted[i + 1] + sorted[i + 2] > sorted[i]) {
      // It's valid! Since we sorted it, we can take the first once we find.
      return sorted[i] + sorted[i + 1] + sorted[i + 2];
    }
  }

  // Didn't find anything :(
  return 0;
};
