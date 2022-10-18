// 38. Count and Say
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const convert = (num, times) => {
    let res = '';
    let str = num + '';
    let count = 0;
    let digit = str[0];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === digit) {
        count++;
      } else {
        res += `${count}${digit}`;
        digit = str[i];
        count = 1;
      }
    }

    res += `${count}${digit}`;

    if (times > 1) {
      return convert(res, times - 1);
    } else {
      return res;
    }
  };

  if (n === 1) {
    return '1';
  }

  return convert(1, n - 1);
};
