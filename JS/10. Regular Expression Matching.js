// 10. Regular Expression Matching

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const cache = {};

  const getKey = (a, b) => `${a}-${b}`;

  const dfs = (i, j) => {
    if (getKey(i, j) in cache) {
      return cache[getKey(i, j)];
    }

    if (i >= s.length && j >= p.length) {
      return true;
    }

    if (j >= p.length) {
      return false;
    }

    const isMatch =
      i < s.length && (s[i] === p[j] || p[j] === '.');

    if (j + 1 < p.length && p[j + 1] === '*') {
      cache[getKey(i, j)] =
        dfs(i, j + 2) || (isMatch && dfs(i + 1, j));

      return cache[getKey(i, j)];
    }

    if (isMatch) {
      let res = dfs(i + 1, j + 1);

      cache[getKey(i, j)] = res;
      return res;
    }

    cache[getKey(i, j)] = false;

    return false;
  };

  return dfs(0, 0);
};
