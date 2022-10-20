// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Go through everything - from right to left
  let i = digits.length - 1;
  while (i >= 0) {
    // If it's over 9, set it to 0
    if (digits[i] + 1 > 9) {
      digits[i] = 0;

      // If not, than increment the number and break; we're done!
    } else {
      digits[i]++;
      break;
    }

    i--;
  }

  // If i got alway the to the left side; we need to prepend a 1
  if (i === -1) {
    digits.unshift(1);
  }

  return digits;
};
