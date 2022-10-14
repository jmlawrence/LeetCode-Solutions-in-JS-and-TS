// 128. Longest Consecutive Sequence

// -------------------------------------------

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// ------------------- 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// -------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    
    // For all the nums
    for (const num of nums) {
        
        // See if it's the start of the sequence (using the set)
        let isStart = !set.has(num - 1);
        
        // If it is, see how long the sequence is
        if (isStart) {
            let length = 1;
            
            // While the num arr has the next number in the sequence ...
            for (let i = 1; i <= nums.length; i++) {
                if (set.has(num + i)) {
                    
                    // ... increase the sequence
                    length++;
                } else {
                    break;
                }
            }
        
            // If length of this sequence is longer, update it
            longest = Math.max(longest, length);
        }
    }    
    
    return longest;
};