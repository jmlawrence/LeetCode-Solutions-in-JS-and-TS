// 435. Non-overlapping Intervals
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // Sort by first
    intervals.sort((a, b) => a[0] - b[0]);
    
    let count = 0;
    
    // Previous high value
    let prevEnd = -Infinity;
    
    // For every element ...
    for (const [start, end] of intervals) {
        // ... see if higher or equal to previous high
        if (start >= prevEnd) {
            // If it is, update
            prevEnd = end;
        } else {
            // If not, we need to remove something.
            // Increment counter
            count++;
            
            // Update previous end with a whatever's smaller: our current end, or the prev high
            prevEnd = Math.min(prevEnd, end);
        }
    }
    
    return count;
};