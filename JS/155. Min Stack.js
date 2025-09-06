// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Approach
// Keep main stack and auxiliary stack of current mins.
// Time: O(1) per operation, Space: O(n)

var MinStack = function () {
  this.stack = [];
  this.mins = [];
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // push new min or repeat current min
  if (!this.mins.length || x <= this.mins[this.mins.length - 1]) this.mins.push(x);
};

MinStack.prototype.pop = function () {
  const v = this.stack.pop();
  if (v === this.mins[this.mins.length - 1]) this.mins.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.mins[this.mins.length - 1];
};
