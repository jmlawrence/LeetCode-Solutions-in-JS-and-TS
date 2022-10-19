// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Merge the two arrays
  // Find middle

  let nums1I = 0;
  let nums2I = 0;
  const joined = [];

  while (nums1I < nums1.length && nums2I < nums2.length) {
    let n1 = nums1[nums1I];
    let n2 = nums2[nums2I];

    if (n1 < n2) {
      nums1I++;
      joined.push(n1);
    } else {
      nums2I++;
      joined.push(n2);
    }
  }

  if (nums1I < nums1.length) {
    joined.push(...nums1.slice(nums1I));
  }

  if (nums2I < nums2.length) {
    joined.push(...nums2.slice(nums2I));
  }

  let middleLeftIdx = joined.length / 2;
  return joined.length % 2 === 0
    ? (joined[middleLeftIdx] + joined[middleLeftIdx - 1]) / 2
    : joined[Math.floor(joined.length / 2)];
};
