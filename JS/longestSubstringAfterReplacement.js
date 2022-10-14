/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
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
        while ((right - left + 1) - maxF > k) {
            count[s[left]]--;
            left++;
        }
        
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};