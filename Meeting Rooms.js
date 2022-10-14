// 252. Meeting Rooms
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    // For all -1
    for (let i = 0; i < intervals.length - 1; i++) {
        let current = intervals[i];
        let next = intervals[i + 1];
        
        // If current.end > next.start: FAIL -> return false;
        if (current[1] > next[0]) {
            return false;
        }
    }
    
    return true;
};