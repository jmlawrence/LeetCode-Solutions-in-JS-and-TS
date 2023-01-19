// 451. Sort Characters By Frequency

// URL: https://leetcode.com/problems/sort-characters-by-frequency/

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let charFreq = {};
    let result = "";
    // Loop over the input string and fill object with characters and their frequency
    for (let i = 0; i < s.length; i++) {
        if (charFreq[s[i]]) {
            charFreq[s[i]]++;
            continue;
        }
        charFreq[s[i]] = 1;
    }
    // Create an array sorted by frequency of character
    const charQueue = Object.keys(charFreq).sort((a, b) => charFreq[b] - charFreq[a]);
    charQueue.forEach(char => {
        while (charFreq[char] > 0) {
            // Append the current character key to the result string and decrement the frequency
            result += char;
            charFreq[char]--
        }
    })
    return result;
};