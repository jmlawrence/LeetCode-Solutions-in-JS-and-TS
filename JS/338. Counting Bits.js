// 338. Counting Bits

// -------------------------------------------

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// -------------------------------------------

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [];

  // Gets the number of 1s in a binary
  const getHammingWeight = (n) => {
    let result = 0;

    while (n) {
      n &= n - 1;
      result++;
    }

    return result;
  };

  // Note the <= (since they want 0 through (and including) n)
  for (let i = 0; i <= n; i++) {
    result.push(getHammingWeight(i));
  }

  return result;
};
