// 22. Generate Parentheses

// URL: https://leetcode.com/problems/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  const backTrack = (open, close) => {
    // Base case; same amount of opens and closes + matches n
    if (open === close && close === n) {
      result.push(stack.join(''));
      return;
    }

    // Don't have enough opens
    if (open < n) {
      stack.push('(');
      backTrack(open + 1, close);
      stack.pop();
    }

    // Don't have enough closes
    if (close < open) {
      stack.push(')');
      backTrack(open, close + 1);
      stack.pop();
    }
  };

  // Kick off with nothing
  backTrack(0, 0);

  return result;
};
