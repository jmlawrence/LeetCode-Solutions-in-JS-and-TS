// 3. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // define a set
    let set = new Set();
    let left = 0;
    let result = 0;
    
    // sliding window
    for (let right = 0; right < s.length; right++) {
        // while the set has the right side of the window
        // ... remove left side char from set and move left side of window
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        
        // add right side char to set
        set.add(s[right]);
        
        // update result to longest length
        result = Math.max(result, right - left + 1);
    }
    
    return result;
    
};