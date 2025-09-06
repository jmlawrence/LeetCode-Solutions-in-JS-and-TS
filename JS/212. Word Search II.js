// 212. Word Search II

// Given a board and a list of words, find all words on the board.

// Approach
// Build trie of words and DFS from each cell, pruning using trie nodes and marking visited cells.
// Time: O(M * 4^L) worst-case; optimized in practice by trie pruning.

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const root = {};
  // Build trie
  for (const w of words) {
    let node = root;
    for (const ch of w) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.word = w; // store word at terminal
  }

  const res = [];
  const m = board.length, n = board[0].length;
  const dfs = (i, j, node) => {
    const ch = board[i][j];
    if (!node[ch]) return;
    node = node[ch];
    if (node.word) {
      res.push(node.word);
      node.word = null; // avoid duplicates
    }
    // mark visited
    board[i][j] = '#';
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [di, dj] of dirs) {
      const ni = i + di, nj = j + dj;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] !== '#') dfs(ni, nj, node);
    }
    board[i][j] = ch;
  };

  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) dfs(i, j, root);
  return res;
};
