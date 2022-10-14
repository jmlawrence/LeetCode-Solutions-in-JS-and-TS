// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};
    
    // Array of num * arrays 
    const freq = [[]];
    for (const _ of nums) {
        freq.push([]);
    }
    
    const result = [];
    
    // Add counts to hashmap
    for (const num of nums) {
        count[num] = count[num] + 1 || 1;
    }
    
    // Add nums as values with their frequency being the idx
    for (const num in count) {
        let occurrences = count[num];
        freq[occurrences].push(num);
    }
    
    // Go from right to left
    // For each of the els, items from its idx until you hit k
    for (let i = freq.length - 1; i > 0; i--) {
        for (const num of freq[i]) {
            result.push(num);
            
            if (result.length === k) {
                return result;
            }
        }
    }
};