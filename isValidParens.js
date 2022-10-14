// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//  An input string is valid if:

//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.
//  Every close bracket has a corresponding open bracket of the same type.

function isValidParens(s) {
  // Key:value pairs; closing:opening
  let keys = { ")": "(", "}": "{", "]": "[" };
  let stack = [];

  for (const c of s) {
    const isClose = c in keys;

    // If a closing char ...
    if (isClose) {
      if (stack.length > 0 && stack[stack.length - 1] === keys[c]) {
        stack.pop();
      } else {
        return false;
      }

      // ... otherwise we push on the stack
    } else {
      stack.push(c);
    }
  }

  // Is there any remaining 'opening' tags?
  return stack.length === 0;
}
