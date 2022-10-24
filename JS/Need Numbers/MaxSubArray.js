/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let current = 0;
    
    for (const num of nums) {
        if (current < 0) {
            current = 0;
        }
        
        current += num;
        max = Math.max(max, current);
    }
    
    return max;
};