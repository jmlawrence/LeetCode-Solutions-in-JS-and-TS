/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;
    
    for (const num of nums) {
        let maxCan = curMax * num;
        let minCan = curMin * num;
        
        curMax = Math.max(maxCan, minCan, num);
        curMin = Math.min(maxCan, minCan, num);
        
        result = Math.max(result, curMax);
    }
    
    return result;
};