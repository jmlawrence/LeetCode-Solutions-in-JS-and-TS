// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hpS = {};
  const hpT = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let curS = s[i];
    let curT = t[i];

    if (!(curS in hpS)) {
      hpS[curS] = 1;
    } else {
      hpS[curS]++;
    }

    if (!(curT in hpT)) {
      hpT[curT] = 1;
    } else {
      hpT[curT]++;
    }
  }

  for (const key in hpS) {
    if (!(key in hpT) || hpS[key] !== hpT[key]) {
      return false;
    }
  }

  return true;
};
