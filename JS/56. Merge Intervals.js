// 56. Merge Intervals
// Problem: Given an array of intervals, merge all overlapping intervals.
//
// Core Concept: Interval Merging
// This is a classic greedy algorithm pattern for interval problems:
// 1. Sort intervals by start time to process in order
// 2. Iterate and either merge with previous or start new interval
// 3. Two intervals [a,b] and [c,d] overlap if: a <= c <= b
//
// Key Insight: After sorting, we only need to check overlap with the last interval
// in our result, not all previous intervals.
//
// Applications: Meeting rooms, job scheduling, calendar conflicts
//
// Approach: Sort + greedy merge
// Time: O(n log n) for sorting, O(n) for merging = O(n log n)
// Space: O(n) for output array (or O(log n) if sorting in-place)

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Edge case: empty or single interval
  if (intervals.length <= 1) return intervals;

  // Sort by start time - critical for greedy approach
  // This ensures we process intervals in chronological order
  intervals.sort((a, b) => a[0] - b[0]);

  // Result array - start with first interval
  const merged = [intervals[0]];

  // Process remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMerged = merged[merged.length - 1];

    const [currentStart, currentEnd] = currentInterval;
    const [lastStart, lastEnd] = lastMerged;

    // Check for overlap: current starts before last ends
    if (currentStart <= lastEnd) {
      // Merge: extend the last interval's end time
      // Take maximum end time to handle cases like [1,4] + [2,3]
      lastMerged[1] = Math.max(lastEnd, currentEnd);
    } else {
      // No overlap: add current interval as new separate interval
      merged.push(currentInterval);
    }
  }

  return merged;
};
