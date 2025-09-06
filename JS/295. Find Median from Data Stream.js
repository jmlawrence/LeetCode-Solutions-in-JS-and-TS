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

var MedianFinder = function () {
  // Approach: two-heaps
  // - this.one: Max-heap for the lower half
  // - this.two: Min-heap for the upper half
  // Invariant:
  //   - sizes differ by at most 1
  //   - when total count is odd, min-heap (this.two) holds the extra element
  // Time per operation: addNum O(log n), findMedian O(1)
  // Note: Uses LeetCode's built-in MaxPriorityQueue/MinPriorityQueue in JS.
  this.one = new MaxPriorityQueue();
  this.two = new MinPriorityQueue();
  this.balanced = true;
};

MedianFinder.prototype.addNum = function (num) {
  // We alternate pushes to keep sizes balanced.
  // When balanced=true, push into max-heap then move top to min-heap so min-heap may be larger.
  if (this.balanced) {
    this.one.enqueue(num);
    // Move the largest from lower half to upper half
    this.two.enqueue(this.one.dequeue().element);
  } else {
    // When balanced=false, push into min-heap then move top to max-heap
    this.two.enqueue(num);
    this.one.enqueue(this.two.dequeue().element);
  }

  // Flip balanced flag: min-heap (this.two) will contain the extra element when odd count
  this.balanced = !this.balanced;
};

MedianFinder.prototype.findMedian = function () {
  if (this.balanced) {
    return (
      (this.one.front().element +
        this.two.front().element) /
      2
    );
  } else {
    return this.two.front().element;
  }
};
