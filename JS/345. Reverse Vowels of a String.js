// 345. Reverse Vowels of a String

// URL: https://leetcode.com/problems/reverse-vowels-of-a-string/

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const dict = {};
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Loop through the string and store all of the vowels along with their index
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            dict[i] = s[i];
        }
    }
    let vowelStack = [];
    let indexStack = [];
    // Create inversed arrays of indecies and the vowels that will go there
    for (index in dict) {
        vowelStack.push(dict[index]);
        indexStack.unshift(index);
    }
    let strArr = s.split('');
    // Place all vowels in their reversed order
    for (let i = 0; i < vowelStack.length; i++) {
        strArr[indexStack[i]] = vowelStack[i];
    }
    return strArr.join('');
};