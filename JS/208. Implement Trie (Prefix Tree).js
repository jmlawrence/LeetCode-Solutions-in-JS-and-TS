// 208. Implement Trie (Prefix Tree)

// Implement insert, search, and startsWith for a trie.

// Approach
// Standard trie node with children map and isWord flag.

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const ch of word) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (const ch of word) {
    if (!node[ch]) return false;
    node = node[ch];
  }
  return !!node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (const ch of prefix) {
    if (!node[ch]) return false;
    node = node[ch];
  }
  return true;
};
