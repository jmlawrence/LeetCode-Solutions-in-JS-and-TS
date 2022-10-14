// 269. Alien Dictionary
// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

// A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let adjacency = {};
    
    // For all the letters of all the words ...
    for (const word of words) {
        for (const char of word) {
            // ... assuming char hasn't already been added ...
            if (!(char in adjacency)) {   
                // ... add char as key and new Set() as value
                adjacency[char] = new Set();
            }
        }
    }
    
    // For all of the words - except the last one
    for (let i = 0; i < words.length - 1; i++) {
        // Current word
        let currentWord = words[i];
        
        // Current word + 1
        let nextWord = words[i + 1];
        
        // Smaller of the two words' lengths
        let minLength = Math.min(currentWord.length, nextWord.length);
        
        // If the current word is longer than the next ...
        // ... and the words have same prefix - invalid order!
        if (currentWord.length > nextWord.length && currentWord.slice(0, minLength) === nextWord.slice(0, minLength)) {
            return "";
        }
        
        // For all the chars in the shorter word
        for (let j = 0; j < minLength; j++) {
            // We can only evaluate the char ordering of the two words if ...
            // the letter from the two words aren't the same.
            // If they aren't ...
            if (currentWord[j] !== nextWord[j]) {
                // ... add the char from second word to set of first word ... 
                // ... since we know that the first word has the char that comes first.
                adjacency[currentWord[j]].add(nextWord[j]);
                
                break;
            }
        }
    }
    
    // Cycle check 
    let visit = {};
    
    // Final result arr
    let result = [];
    
    const dfs = (char) => {
        // If we've already visited - pass along findings from branch
        if (char in visit) {
            return visit[char];
        }
        
        // Now we've been here - so, mark as been visited
        visit[char] = true;
        
        // For all the neighbors ...
        for (const neighbor of adjacency[char]) {
            // Run dfs on each.
            // If true, we found a cycle.
            if (dfs(neighbor)) {
                // Found cycle!
                return true;
            }
        }
        
        // We're done looking down this branch
        // Marking char as free to visit from another branch
        visit[char] = false;
        
        // Pushing in char
        result.push(char);
    }
    
    // For every key in the adjacency object ...
    for (const char in adjacency) {
        // ... check for cycles
        if (dfs(char)) { 
            // Found cycle!
            return "";
        }
    }
    
    return result.reverse().join("");
};