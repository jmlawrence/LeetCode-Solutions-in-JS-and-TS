// 88. Merge Sorted Array

// Problem description
/*
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1.
 *
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
//Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// The solution ---------------------------
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let copy = [...nums1];
  for (let i = 0, j = 0, k = 0; i < nums1.length; i++) {
    // if our copy of nums1 at index j is less than nums2 at index j we insert that value at index i in nums1 and we increment j
    // otherwide we set nums1 at index i to be the other value in the comparison and increment k
    // its possible for element in nums2 we are comparing against is undefined so we check for that as well
    if ((j < m && copy[j] < nums2[k]) || typeof nums2[k] === "undefined") {
      nums1[i] = copy[j];
      j++;
    } else {
      nums1[i] = nums2[k];
      k++;
    }
  }
};

// I think this can be done without creating a copy of nums1 which would probably be the O(n + m) solution we seek
