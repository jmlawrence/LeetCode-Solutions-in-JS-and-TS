// 146. LRU Cache
// Problem: Design a data structure that follows Least Recently Used (LRU) cache constraints.
//
// Core Concept: Efficient Cache with O(1) Operations
// LRU Cache is a fundamental system design pattern used in:
// - CPU caches, page replacement algorithms
// - Web browsers, database buffer pools
// - Memory management systems
//
// Key Requirements:
// 1. get(key): Retrieve value and mark as most recently used
// 2. put(key, value): Insert/update and mark as most recently used
// 3. Eviction: Remove least recently used item when capacity exceeded
// 4. Both operations must be O(1) time complexity
//
// Data Structure Choice: JavaScript Map
// ES6 Map maintains insertion order, making it perfect for LRU implementation:
// - Insertion order = usage order for our cache
// - delete() + set() pattern simulates "move to end"
// - keys().next().value gives us the oldest (LRU) entry
// - All operations are O(1) average case
//
// Alternative: HashMap + Doubly Linked List (more complex but same efficiency)
// 
// Design Pattern: Order-Based Eviction
// Most recent = end of map, Least recent = beginning of map
// Access/update operations move entries to the end
//
// Time: O(1) for both get and put operations
// Space: O(capacity) for storing key-value pairs

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  // Map maintains insertion order - perfect for LRU tracking
  // Most recently used items will be at the end
  // Least recently used items will be at the beginning
  this.map = new Map();
};

/**
 * Retrieve value and update access order
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // Key doesn't exist in cache
  if (!this.map.has(key)) return -1;

  // Key exists: need to mark as most recently used
  const val = this.map.get(key);

  // Move to end strategy: delete then re-insert
  // This leverages Map's insertion order property
  // Deletion removes from current position
  this.map.delete(key);
  // Re-insertion places at end (most recent position)
  this.map.set(key, val);

  return val;
};

/**
 * Insert or update key-value pair with LRU eviction
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // If key exists, remove it first (will re-add at end)
  // This ensures update operations also move item to "most recent"
  if (this.map.has(key)) this.map.delete(key);

  // Add/update the key-value pair at end (most recent position)
  this.map.set(key, value);

  // Check capacity constraint and evict if necessary
  if (this.map.size > this.cap) {
    // Evict least recently used item (first entry due to insertion order)
    // keys().next().value gets the first (oldest) key efficiently
    const lruKey = this.map.keys().next().value;
    this.map.delete(lruKey);
  }
};

/**
 * Performance Analysis:
 * - Map operations (get, set, delete, keys().next()) are O(1) average
 * - No additional data structure overhead
 * - Memory efficient: only stores key-value pairs
 * - Insertion order maintenance is handled by Map internally
 * 
 * System Design Context:
 * - Suitable for high-throughput caching scenarios
 * - Common in database buffer pools, web caches
 * - Scales well with proper capacity tuning
 */
