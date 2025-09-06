// 211. Add and Search Word - Data structure design

// Implement addWord(word) and search(word). search can contain '.' to match any single character.

// Approach
// Use a trie; for search, DFS when encountering '.' wildcard.

var WordDictionary = function () {
  this.root = {};
};

WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const ch of word) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.isWord = true;
};

WordDictionary.prototype.search = function (word) {
  const dfs = (i, node) => {
    if (!node) return false;
    if (i === word.length) return !!node.isWord;
    const ch = word[i];
    if (ch === '.') {
      // Try all children
      for (const key of Object.keys(node)) {
        if (key === 'isWord') continue;
        if (dfs(i + 1, node[key])) return true;
      }
      return false;
    } else {
      return dfs(i + 1, node[ch]);
    }
  };
  return dfs(0, this.root);
};
