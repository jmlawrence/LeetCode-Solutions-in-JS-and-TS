// 1832 Check if Sentence is Pangram

// Problem description
/*
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 *
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 */

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// The solution ---------------------------
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let dict = {};
  for (let i = 0; i < sentence.length; i++) {
    dict[sentence[i]] = true;
  }
  const allLettersFound = Object.keys(dict);
  // Given the contrainsts of the problem saying the sentence contains only lowercase english letters we can assume if the dict
  // carried more than 25 characters (English alphabet has 26 characters) that the sentence contained all 26. Otherwise we return false
  if (allLettersFound.length > 25) return true;
  return false;
};
