// 295. Find Median from Data Stream

// -------------------------------------------

// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// -------------------------------------------

var MedianFinder = function() {
    this.one = new MaxPriorityQueue();
    this.two = new MinPriorityQueue();
    this.balanced = true;
};

MedianFinder.prototype.addNum = function(num) {
    if (this.balanced) {
        this.one.enqueue(num); 
        this.two.enqueue(this.one.dequeue().element);
    } else {
        this.two.enqueue(num);
        this.one.enqueue(this.two.dequeue().element);
    }
    
    this.balanced = !this.balanced;
};

MedianFinder.prototype.findMedian = function() {
    if (this.balanced) {
        return (this.one.front().element + this.two.front().element) / 2;
    } else {
        return this.two.front().element;
    }
};