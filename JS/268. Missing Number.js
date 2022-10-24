// 268. Missing Number

// -------------------------------------------

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// -------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sumOfGivenNums = nums.reduce((a, b) => a + b);
    
    // Use triangluar number formula
    let sumOfAllNums = (nums.length + 1) * (nums.length / 2);
    
    return sumOfAllNums - sumOfGivenNums;
};