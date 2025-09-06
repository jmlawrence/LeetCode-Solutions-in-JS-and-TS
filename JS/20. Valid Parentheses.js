// 20. Valid Parentheses
// Problem: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Approach: Use stack to track opening brackets; pop on matching close.
// Time: O(n), Space: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
function isValidParens(s) {
  // Map closing to opening brackets
  let keys = { ")": "(", "}": "{", "]": "[" };
  let stack = [];

  for (const c of s) {
    const isClose = c in keys;

    // If it's a closing bracket...
    if (isClose) {
      // Check if stack has matching opening
      if (stack.length > 0 && stack[stack.length - 1] === keys[c]) {
        stack.pop(); // Match found, remove from stack
      } else {
        return false; // Mismatch or empty stack
      }
    } else {
      // It's an opening bracket, push to stack
      stack.push(c);
    }
  }

  // Valid if no unmatched openings left
  return stack.length === 0;
}
