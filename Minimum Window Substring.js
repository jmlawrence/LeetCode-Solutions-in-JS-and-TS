// 76. Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === "") {
        return "";
    }
    
    // Object for char counts of target string and current window
    const target = {};
    const window = {};
    
    // load up target char count object
    for (const c of t) {
        target[c] = target[c] + 1 || 1;
    }
    
    
    // Set up initials
    let left = 0;
    let result = [-1, -1];
    
    // current shortest length
    let shortest = Infinity;
    
    // count of chars needed
    let need = Object.keys(target).length;
    
    // running count of target chars in our window
    let have = 0;
    
    // right goes through all
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        
        // add char to window object counts
        window[char] = window[char] + 1 || 1;
        
        // if the char is in the target char object ...
        // ... and window + target char counts are same ...
        // ... increment our have counter.
        if (char in target && window[char] === target[char]) {
            have++;
        }

        // while we have enough, start peeling of the left side ...
        // ... to see if we can get it any smaller.
        while (have === need) {
            // if window is smaller than shortest ...
            if (right - left + 1 < shortest) {
                // ... update result and shortest
                result = [left, right];
                shortest = right - left + 1;
            }
            
            // decrement the window counter for this char
            window[s[left]]--;
            
            // if this zeros a char count in our window that we need for target ...
            if (s[left] in target && window[s[left]] < target[s[left]]) {
                // ... decrement have counter
                have--;
            }
            
            // move left side of window
            left++;
        }
        
    }
    
    let [start, end] = result;
    return shortest === Infinity ? "" : s.substring(start, end + 1);
};