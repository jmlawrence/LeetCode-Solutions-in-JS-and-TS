// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let lettersArr = [];

  for (var i = 0; i < digits.length; i++) {
    lettersArr.push(letters[digits[i]]);
  }

  let first = lettersArr.shift();

  if (!first) {
    return [];
  }

  return lettersArr.reduce((aArr, bArr) => {
    let combined = [];

    for (let i = 0; i < aArr.length; i++) {
      for (let j = 0; j < bArr.length; j++) {
        combined.push(aArr[i] + bArr[j]);
      }
    }

    return combined;
  }, first);
};
