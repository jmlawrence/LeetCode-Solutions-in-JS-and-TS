// 567. Permutation in String
// Problem: Check if any permutation of s1 exists as a substring in s2.
//
// Core Concept: Fixed-Size Sliding Window with Character Frequency
// This is essentially finding if s2 contains any anagram of s1 as a substring.
// - A permutation has the same character frequencies as the original
// - We need a sliding window of size s1.length to check each substring
// - Compare character frequencies efficiently
//
// Key Insight: Permutation detection = Anagram detection
// Two strings are permutations of each other iff they have identical char frequencies.
//
// Algorithm: Sliding Window with Frequency Matching
// 1. Build frequency map for s1 (target frequencies)
// 2. Slide window of size s1.length through s2
// 3. Track current window frequencies
// 4. Return true when frequencies match
//
// Optimization Techniques:
// 1. Early termination when match found
// 2. Single frequency map with difference tracking
// 3. Counter of matching characters for O(1) comparison
//
// Time: O(s1.length + s2.length) - linear scan
// Space: O(1) - frequency map has at most 26 characters

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // Early termination: s1 cannot fit in s2
  if (s1.length > s2.length) return false;

  // Build frequency map for s1 (target pattern)
  const s1Freq = new Map();
  for (const char of s1) {
    s1Freq.set(char, (s1Freq.get(char) || 0) + 1);
  }

  // Sliding window frequency map
  const windowFreq = new Map();
  const windowSize = s1.length;

  // Helper function to compare frequency maps
  const mapsEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
      if (map2.get(key) !== value) return false;
    }
    return true;
  };

  // Initialize the first window
  for (let i = 0; i < windowSize; i++) {
    const char = s2[i];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
  }

  // Check if first window matches
  if (mapsEqual(windowFreq, s1Freq)) return true;

  // Slide window through rest of s2
  for (let i = windowSize; i < s2.length; i++) {
    // Add new character (expand window right)
    const newChar = s2[i];
    windowFreq.set(newChar, (windowFreq.get(newChar) || 0) + 1);

    // Remove old character (shrink window left)
    const oldChar = s2[i - windowSize];
    const oldCount = windowFreq.get(oldChar) - 1;
    if (oldCount === 0) {
      windowFreq.delete(oldChar);
    } else {
      windowFreq.set(oldChar, oldCount);
    }

    // Check if current window matches
    if (mapsEqual(windowFreq, s1Freq)) return true;
  }

  return false;
};

/**
 * Optimized Version: Single frequency map with match counter
 * More efficient - avoids map comparison on each iteration
 */
var checkInclusionOptimized = function (s1, s2) {
  if (s1.length > s2.length) return false;

  // Single frequency map: positive = need more, negative = have excess
  const freq = new Map();

  // Initialize with s1 characters (positive counts)
  for (const char of s1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let left = 0;
  let matches = 0; // Count of characters with perfect frequency match
  const targetMatches = freq.size; // Total unique characters to match

  // Expand window with right pointer
  for (let right = 0; right < s2.length; right++) {
    const rightChar = s2[right];

    // Process right character entering window
    if (freq.has(rightChar)) {
      freq.set(rightChar, freq.get(rightChar) - 1);
      if (freq.get(rightChar) === 0) {
        matches++; // Perfect frequency match for this character
      }
    }

    // Shrink window if it exceeds target size
    if (right - left + 1 > s1.length) {
      const leftChar = s2[left];
      if (freq.has(leftChar)) {
        if (freq.get(leftChar) === 0) {
          matches--; // Lost perfect match for this character
        }
        freq.set(leftChar, freq.get(leftChar) + 1);
      }
      left++;
    }

    // Check if we have a permutation match
    if (right - left + 1 === s1.length && matches === targetMatches) {
      return true;
    }
  }

  return false;
};

/**
 * Array-based solution for lowercase letters only
 * Fastest implementation for specific character set constraints
 */
var checkInclusionArray = function (s1, s2) {
  if (s1.length > s2.length) return false;

  // Frequency arrays for s1 and current window
  const s1Count = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  // Helper function to convert character to array index
  const charIndex = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

  // Count characters in s1
  for (const char of s1) {
    s1Count[charIndex(char)]++;
  }

  // Sliding window approach
  for (let i = 0; i < s2.length; i++) {
    // Add current character to window
    windowCount[charIndex(s2[i])]++;

    // Remove character falling out of window
    if (i >= s1.length) {
      windowCount[charIndex(s2[i - s1.length])]--;
    }

    // Check if current window matches s1 frequencies
    if (i >= s1.length - 1) {
      let isMatch = true;
      for (let j = 0; j < 26; j++) {
        if (s1Count[j] !== windowCount[j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) return true;
    }
  }

  return false;
};

/**
 * Alternative: Two-pointer approach with character matching
 * Different perspective but same time complexity
 */
var checkInclusionTwoPointer = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const need = new Map();
  for (const char of s1) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0, right = 0;
  let valid = 0; // Count of characters meeting requirement

  while (right < s2.length) {
    const rightChar = s2[right];
    right++;

    // Update window data
    if (need.has(rightChar)) {
      need.set(rightChar, need.get(rightChar) - 1);
      if (need.get(rightChar) === 0) {
        valid++;
      }
    }

    // Check if window size exceeds s1 length
    while (right - left >= s1.length) {
      // Check if we found a valid permutation
      if (valid === need.size) {
        return true;
      }

      // Remove leftmost character
      const leftChar = s2[left];
      left++;

      if (need.has(leftChar)) {
        if (need.get(leftChar) === 0) {
          valid--;
        }
        need.set(leftChar, need.get(leftChar) + 1);
      }
    }
  }

  return false;
};

/**
 * Example Test Cases:
 */

// Example 1: s1 = "ab", s2 = "eidbaooo"
// Output: true (substring "ba" is permutation of "ab")

// Example 2: s1 = "ab", s2 = "eidboaoo"
// Output: false (no permutation of "ab" exists in s2)

/**
 * Performance Analysis:
 * 
 * 1. Basic map comparison: O(s2.length * 26) time
 * 2. Optimized with match counter: O(s2.length) time, best balance
 * 3. Array-based: O(s2.length) time, fastest for lowercase letters
 * 4. Two-pointer: O(s2.length) time, alternative perspective
 * 
 * All solutions use O(1) space (bounded by character set size)
 * 
 * Interview Strategy:
 * - Start with basic sliding window + map comparison
 * - Optimize to match counter approach
 * - Discuss array optimization for specific constraints
 * - Mention relationship to anagram problems (438. Find All Anagrams)
 */
