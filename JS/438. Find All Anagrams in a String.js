// 438. Find All Anagrams in a String
// Problem: Find all start indices of anagrams of string p in string s.
//
// Core Concept: Sliding Window with Character Frequency Matching
// This is a classic sliding window pattern for substring problems:
// - Fixed-size window (length of pattern)
// - Track character frequencies in current window
// - Compare frequencies to determine anagram match
//
// Key Insight: Two strings are anagrams if they have identical character frequencies
// We can use a sliding window to efficiently check each substring of length p.
//
// Algorithm: Fixed-Size Sliding Window with Frequency Maps
// 1. Build frequency map for pattern p
// 2. Slide window of size p.length through string s
// 3. Maintain frequency map for current window
// 4. Compare frequencies to detect anagrams
//
// Optimization: Use a single frequency map with positive/negative counts
// - Positive count = excess characters from pattern
// - Negative count = deficit characters from pattern
// - Window is anagram when all counts are zero
//
// Time: O(s.length) - single pass through string s
// Space: O(1) - frequency map has at most 26 characters

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // Early termination: if pattern is longer than string
  if (p.length > s.length) return [];

  const result = [];
  const pFreq = new Map();
  const windowFreq = new Map();

  // Build frequency map for pattern p
  for (const char of p) {
    pFreq.set(char, (pFreq.get(char) || 0) + 1);
  }

  const windowSize = p.length;

  // Initialize the first window
  for (let i = 0; i < windowSize; i++) {
    const char = s[i];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
  }

  // Helper function to compare frequency maps
  const mapsEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
      if (map2.get(key) !== value) return false;
    }
    return true;
  };

  // Check if first window is an anagram
  if (mapsEqual(windowFreq, pFreq)) {
    result.push(0);
  }

  // Slide the window through the rest of the string
  for (let i = windowSize; i < s.length; i++) {
    // Add new character (right side of window)
    const newChar = s[i];
    windowFreq.set(newChar, (windowFreq.get(newChar) || 0) + 1);

    // Remove old character (left side of window)
    const oldChar = s[i - windowSize];
    const oldCount = windowFreq.get(oldChar) - 1;
    if (oldCount === 0) {
      windowFreq.delete(oldChar);
    } else {
      windowFreq.set(oldChar, oldCount);
    }

    // Check if current window is an anagram
    if (mapsEqual(windowFreq, pFreq)) {
      result.push(i - windowSize + 1);
    }
  }

  return result;
};

/**
 * Optimized Version: Single frequency map with difference tracking
 * More memory efficient and faster comparison
 */
var findAnagramsOptimized = function (s, p) {
  if (p.length > s.length) return [];

  const result = [];
  const freq = new Map();

  // Initialize frequency map with pattern characters (positive counts)
  for (const char of p) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let left = 0;
  let matches = 0; // Number of characters with correct frequency
  const target = freq.size; // Number of unique characters to match

  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    // Add right character to window
    if (freq.has(rightChar)) {
      freq.set(rightChar, freq.get(rightChar) - 1);
      if (freq.get(rightChar) === 0) {
        matches++;
      }
    }

    // Shrink window if it's too large
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      if (freq.has(leftChar)) {
        if (freq.get(leftChar) === 0) {
          matches--;
        }
        freq.set(leftChar, freq.get(leftChar) + 1);
      }
      left++;
    }

    // Check if current window is an anagram
    if (right - left + 1 === p.length && matches === target) {
      result.push(left);
    }
  }

  return result;
};

/**
 * Alternative: Array-based frequency counting (for lowercase letters only)
 * Fastest for the specific case of lowercase English letters
 */
var findAnagramsArray = function (s, p) {
  if (p.length > s.length) return [];

  const result = [];
  const pCount = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  // Helper to convert character to array index
  const charToIndex = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

  // Count characters in pattern
  for (const char of p) {
    pCount[charToIndex(char)]++;
  }

  // Sliding window approach
  for (let i = 0; i < s.length; i++) {
    // Add current character to window
    windowCount[charToIndex(s[i])]++;

    // Remove character that's no longer in window
    if (i >= p.length) {
      windowCount[charToIndex(s[i - p.length])]--;
    }

    // Check if window matches pattern (arrays are equal)
    if (i >= p.length - 1) {
      let isAnagram = true;
      for (let j = 0; j < 26; j++) {
        if (pCount[j] !== windowCount[j]) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        result.push(i - p.length + 1);
      }
    }
  }

  return result;
};

/**
 * Example Test Cases:
 */

// Example 1: s = "abab", p = "ab"
// Output: [0, 2]
// Explanation: "ab" at index 0, "ba" at index 2

// Example 2: s = "abacabad", p = "aabc"
// Output: [1]
// Explanation: "abac" at index 1 is an anagram of "aabc"

/**
 * Performance Comparison:
 * 
 * 1. Map-based solution:
 *    - Time: O(s.length * 26) for map comparisons
 *    - Space: O(26) for frequency maps
 *    - Most readable and general
 * 
 * 2. Optimized single-map solution:
 *    - Time: O(s.length) - single pass with O(1) comparisons
 *    - Space: O(26) for single frequency map
 *    - Best balance of performance and readability
 * 
 * 3. Array-based solution:
 *    - Time: O(s.length) - fastest for lowercase letters
 *    - Space: O(1) - fixed array size
 *    - Most efficient but limited to specific character sets
 * 
 * Interview Considerations:
 * - Start with map-based approach for clarity
 * - Optimize to single-map version for better performance
 * - Mention array-based approach for specific constraints
 * - Discuss trade-offs between readability and performance
 */
