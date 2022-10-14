// 57. Insert Interval 
// -------------------------------------------

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// ----------------- 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// -------------------------------------------

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
    let res = [];
    const START = 0;
    const END = 1;
    
    for (let i = 0; i < intervals.length; i++) {
        // If new interval ends before this interval starts
        if (newInterval[END] < intervals[i][START]) {
            res.push(newInterval);
            return [...res, ...intervals.slice(i)];
            
        // If new interval ends after this interval starts
        } else if (newInterval[START] > intervals[i][END]) {
            res.push(intervals[i]);
        } else {
        
            // Interval conflicts with existing interval
            let minStart = Math.min(newInterval[START], intervals[i][START]);
            let maxEnd = Math.max(newInterval[END], intervals[i][END]);
            newInterval = [minStart, maxEnd];
        }
    }
    
    res.push(newInterval);
    
    return res;
};