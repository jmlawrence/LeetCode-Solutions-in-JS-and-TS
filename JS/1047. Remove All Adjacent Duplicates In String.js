// 1047. Remove All Adjacent Duplicates In String
// Problem: Given a string s, remove all adjacent duplicates repeatedly.
// Approach: Use a stack; push/pop when adjacent match.
// Time: O(n), Space: O(n)

var removeDuplicates = function (s) {
    const stack = [];
    for (let char of s) {
        // Remove duplicate or push the character to the end.
        // Removed characters then allow for comparison to the character that proceeded the duplicates
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }
    return stack.join('');
};