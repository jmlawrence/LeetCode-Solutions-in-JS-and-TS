// 680. Valid Palindrome II
// Problem: Given a string s, return true if the s can be palindrome after deleting at most one character.
// Approach: Two pointers, skip one mismatch.
// Time: O(n), Space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const check = (l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++; r--;
    }
    return true;
  };
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return check(l + 1, r) || check(l, r - 1);
    }
    l++; r--;
  }
  return true;
};
