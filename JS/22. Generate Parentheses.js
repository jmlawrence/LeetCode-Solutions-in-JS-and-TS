// 22. Generate Parentheses
// Problem: Given n pairs of parentheses, generate all combinations of well-formed parentheses.
// Approach: Backtracking with counts for open and close.
// Time: O(4^n / sqrt(n)), Space: O(4^n / sqrt(n)) for result

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  const backTrack = (open, close) => {
    // Base case: all pairs used
    if (open === close && close === n) {
      result.push(stack.join(''));
      return;
    }

    // Add opening if under limit
    if (open < n) {
      stack.push('(');
      backTrack(open + 1, close);
      stack.pop(); // Backtrack
    }

    // Add closing if more opens than closes
    if (close < open) {
      stack.push(')');
      backTrack(open, close + 1);
      stack.pop(); // Backtrack
    }
  };

  // Start with zero opens and closes
  backTrack(0, 0);

  return result;
};
