// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
function reverse(x) {
  const absString = String(Math.abs(x));
  const reversed = absString.split("").reverse();
  let newString = "";

  reversed.forEach((e, idx) => {
    // Take out any trailing 0s
    let notLast = idx !== reversed.length - 1;

    if (Number(e) !== 0 || notLast) {
      newString += e;
    }
  });

  const maxSize = 2 ** 31 - 1;
  const reversedCleanNumber = Number(newString);
  const reversedSigned = reversedCleanNumber * (x < 0 ? -1 : 1);

  if (reversedCleanNumber > maxSize) {
    return 0;
  } else {
    return reversedSigned;
  }
}
