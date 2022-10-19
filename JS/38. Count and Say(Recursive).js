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
 * @param {string} str
 * @return {string}
 */
 var countAndSay = function(n, str = '1') {
    if (n === 1) {
        return str;
    }
    let count = 0;
    // We are "saying" the digit string from the previous funciton call
    let say = str[0];
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === say) {
            count ++;
        } else {
            newStr += count + say;
            count = 1;
            say = str[i];
        }
    }
    // countAndSay(n) is the way you would "say" the digit string from countAndSay(n - 1) all the way to the base case of "1" of n = 1
    return countAndSay(n - 1, newStr += count + say);
};