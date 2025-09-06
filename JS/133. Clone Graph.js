// 133. Clone Graph
// Problem: Given a reference of a node in a connected undirected graph, return a deep copy.
// Approach: DFS or BFS with hashmap to track visited nodes and their copies.
// Time: O(V + E), Space: O(V)

var cloneGraph = function (node) {
  // Hashmap of existing newly copied nodes
  const oldToNew = {};

  const clone = (node) => {
    // See if node already copied (using its val as a property)
    if (node.val in oldToNew) {
      return oldToNew[node.val];
    }

    // Create copy of this node
    const copy = new Node(node.val);

    // Add to hashmap
    oldToNew[node.val] = copy;

    // For all neighbors, push in result of this dfs method
    for (const neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }

    return copy;
  };

  return node ? clone(node) : null;
};
