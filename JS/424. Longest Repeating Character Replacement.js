// 424. Longest Repeating Character Replacement

// -------------------------------------------

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// ------------

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// -------------------------------------------

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // 4
  const count = {};
  let left = 0;
  let maxF = 0;
  let result = 0;

  // all rights
  for (let right = 0; right < s.length; right++) {
    // add count of right char
    count[s[right]] = count[s[right]] + 1 || 1;

    // update max f
    maxF = Math.max(count[s[right]], maxF);

    // if replacements needed is more than k
    // increase left and descrease count of left char
    while (right - left + 1 - maxF > k) {
      count[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
