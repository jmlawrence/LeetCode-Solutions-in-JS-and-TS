// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1]
// Output: [1,2]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let set = [...Array(nums.length).keys()].map(i => i + 1);
    let uniqueNums = new Set(set);
    let dupDict = {};
    let duplicateNum;
    for (let i = 0; i < nums.length; i++) {
        if (dupDict[nums[i]]) {
            // If our dict already contains the current num then it is the duplicate value that we will return later
            duplicateNum = nums[i];
        }
        dupDict[nums[i]] = true;
        // remove the current value from our set of all nums from 1 -> n.
        uniqueNums.delete(nums[i]);
    }
    // after looping over nums, our missing number will be the only key remaining in our set of uniqueNums
    return [duplicateNum, ...uniqueNums.keys()];
};