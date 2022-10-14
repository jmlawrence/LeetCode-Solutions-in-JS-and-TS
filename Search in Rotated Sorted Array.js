/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let middle = left + right;
        
        if (nums[middle] === target) {
            return middle; 
        }
        z``
        let leftIsSorted = nums[left] <= nums[middle];
        
        if (leftIsSorted) {
            // target is on the right or less than the left: left is now the middle
            if (target > nums[middle] || target < nums[left]) {
                left = mid + 1;
            // otherwise; right is the middle
            } else {
                right = middle - 1;
            }
        } else {
            // if the target is on the left side or target is greater than the right: right is now the middle
            if (target < nums[middle] || target > nums[right]) {
                right = middle - 1;
            // otherwise; left is the middle
            } else {
                left = middle + 1;
            }
        }
    }
    
    return -1;
};