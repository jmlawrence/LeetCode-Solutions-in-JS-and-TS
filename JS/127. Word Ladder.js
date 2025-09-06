// 127. Word Ladder
// Problem: Find the length of shortest transformation sequence from beginWord to endWord.
//
// Core Concept: Shortest Path in Unweighted Graph
// This is a classic shortest path problem where:
// - Each word is a node in the graph
// - Two words are connected if they differ by exactly one character
// - We need the minimum number of edges (transformations) to reach the target
//
// Graph Construction Strategy:
// We build an implicit graph by checking character differences.
// For efficiency, we use a pattern-based approach with wildcards.
//
// Algorithm: BFS (Breadth-First Search)
// BFS guarantees the shortest path in unweighted graphs.
// Level-order traversal ensures we find the minimum transformation length.
//
// Optimization Techniques:
// 1. Pattern matching: Group words by patterns (e.g., "*ot" matches "hot", "dot")
// 2. Preprocessing: Build adjacency list using wildcard patterns
// 3. Early termination: Stop as soon as we find the target
//
// Time: O(M² × N) where M = word length, N = number of words
//   - O(M) to generate patterns per word
//   - O(M) to compare words
//   - O(N) words to process
// Space: O(M × N) for pattern storage and BFS queue

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // Quick validation: endWord must exist in dictionary
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const L = beginWord.length;

  // Build pattern-to-words mapping for efficient neighbor discovery
  // Pattern: replace one character with '*' (e.g., "hot" -> ["*ot", "h*t", "ho*"])
  // This preprocessing allows O(1) neighbor lookup instead of O(26*M) character substitution
  const allCombo = new Map();

  for (const word of wordSet) {
    // Generate all possible patterns for this word
    for (let i = 0; i < L; i++) {
      // Create wildcard pattern by replacing character at position i
      const pattern = word.slice(0, i) + '*' + word.slice(i + 1);

      // Group words that share this pattern (they're neighbors)
      if (!allCombo.has(pattern)) allCombo.set(pattern, []);
      allCombo.get(pattern).push(word);
    }
  }

  // BFS setup: queue stores [word, transformation_count]
  const q = [[beginWord, 1]];
  const visited = new Set([beginWord]);

  // BFS traversal to find shortest path
  while (q.length) {
    const [currentWord, level] = q.shift();

    // For each character position, find all possible neighbors
    for (let i = 0; i < L; i++) {
      // Generate pattern by wildcarding current position
      const pattern = currentWord.slice(0, i) + '*' + currentWord.slice(i + 1);

      // Get all words that match this pattern (differ by 1 char at position i)
      const neighbors = allCombo.get(pattern) || [];

      for (const neighbor of neighbors) {
        // Found target word! Return transformation count
        if (neighbor === endWord) return level + 1;

        // Add unvisited neighbors to queue for next level exploration
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          q.push([neighbor, level + 1]);
        }
      }
    }
  }

  // No transformation path exists
  return 0;
};
