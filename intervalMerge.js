/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const output = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const stackTop = output[output.length - 1];
        const [start, end] = intervals[i];
        const [_, lastEnd] = stackTop;
        
        if (start <= lastEnd) {
            stackTop[1] = Math.max(lastEnd, end);
        } else {
            output.push([start, end]);
        }
    }
    
    return output;
};