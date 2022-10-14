/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let result = nums[0];
    let left = 0; 
    let right = nums.length - 1;
    
    while (left <= right) {
        // Area sorted - see if lower than lowest
        if (nums[left] < nums[right]) {
            result = Math.min(result, nums[left]);
            break;
        }
        
        let middle = left + (right - left) / 2;
        result = Math.min(result, nums[middle]);
        if (nums[middle] >= nums[left]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return result;
};