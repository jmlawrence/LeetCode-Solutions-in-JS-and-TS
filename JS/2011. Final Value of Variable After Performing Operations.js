// 2011. Final Value of Variable After Performing Operations

// Problem description
/*
 * There is a programming language with only four operations and one variable X:
 * ++X and X++ increments the value of the variable X by 1.
 * --X and X-- decrements the value of the variable X by 1.
 * Initially, the value of X is 0.
 * Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
 */

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

// The solution ---------------------------
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0;
  operations.forEach((operation) => {
    // eval() will transform a string into executable code
    eval(operation);
  });
  return X;
};
