// 253. Meeting Rooms II
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // Array of start and end times
    let start = [];
    let end = [];
    
    for (const [s, e] of intervals) {
        start.push(s);
        end.push(e);
    }
    
    // Sort them.
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    
    // Current max num of rooms
    let maxRoomsNeeded = 0;
    
    // Current num of rooms
    let currentRoomsNeeded = 0;
    
    // Pointer for start array
    let startPointer = 0;
    
    // Pointer for end array
    let endPointer = 0;
    
    while (startPointer < start.length) {
        // If the current start is before the current end
        if (start[startPointer] < end[endPointer]) {
            // Bump start + increase num of rooms needed
            startPointer++;
            currentRoomsNeeded++;
        } else {
            endPointer++;
            currentRoomsNeeded--;
        }
        
        maxRoomsNeeded = Math.max(currentRoomsNeeded, maxRoomsNeeded);
    }
    
    return maxRoomsNeeded;
};