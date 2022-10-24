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

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.minHeap = new Heap('min');
    this.maxHeap = new Heap('max');
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.top());
    this.maxHeap.pop();
    
    if(this.minHeap.size > this.maxHeap.size) {
        this.maxHeap.push(this.minHeap.top());
        this.minHeap.pop();
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size === this.minHeap.size) {
        return (this.maxHeap.top() + this.minHeap.top()) * 0.5;
    }
    
    return this.maxHeap.top();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
    constructor(type) {
        this.storage = [];
        this.size = 0;
        this.type = type;
    }
    
    swap(index1, index2) {
        let temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }
    
    comparator(a,b) {
        if (this.type === 'min') {
            return a - b;
        }

        return b - a;
    }
    
    push(data) {
        this.storage[this.size] = data;
        this.size++;
        this.heapifyUp();
    }
    
    heapifyUp() {
        let index = this.size - 1;
        let parentIndex = Math.trunc((index-1) / 2);
        while(parentIndex >= 0 && this.comparator(this.storage[parentIndex], this.storage[index]) > 0) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.trunc((index - 1) / 2);
        }
    }
    
    pop() {
        if(this.size == 0) {
            throw new Error("Empty Heap");
        }
        let data = this.storage[0];
        this.storage[0] = this.storage[this.size - 1];
        this.size--;
        this.heapifyDown();
    }
    
    heapifyDown() {
        let index = 0;
        while(2 * index+1 < this.size) {
            let nextIndex = 2 * index + 1;
            if (2 * index + 2 < this.size && this.comparator(this.storage[nextIndex], this.storage[2 * index + 2]) > 0) {
                nextIndex = 2 * index + 2;
            }
            
            if (this.comparator(this.storage[index], this.storage[nextIndex]) <= 0) {
                break;
            }
            
            this.swap(index, nextIndex);
            
            index = nextIndex;
        }
    }
    
    top() {
        return this.storage[0];
    }
}