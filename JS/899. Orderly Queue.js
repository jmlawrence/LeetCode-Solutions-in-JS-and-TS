// 899. Orderly Queue

// URL: https://leetcode.com/problems/orderly-queue/

// You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string..

// Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.

 

// Example 1:
// Input: s = "cba", k = 1
// Output: "acb"
// Explanation: 
// In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
// In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".

// Example 2:
// Input: s = "baaca", k = 3
// Output: "aaabc"
// Explanation: 
// In the first move, we move the 1st character 'b' to the end, obtaining the string "aacab".
// In the second move, we move the 3rd character 'c' to the end, obtaining the final result "aaabc".
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var orderlyQueue = function(s, k) {
    // If k is greater than 1 than we can reach any configuration of the string so we can just sort it
    if (k > 1) {
        return s.split('').sort().join('');
    } else {
        min = s;
        runningStr = min;
        // k only allows us to shift the 1st character to the end. So do that and check on each iteration of the loop if that new string is lexographically smaller than min
        for (let i = 0; i < s.length; i++) {
            runningStr = runningStr.substr(1) + runningStr.substr(0, 1);
            min = min.localeCompare(runningStr) < 0 ? min : runningStr;
        }
        return min;
    }
};
