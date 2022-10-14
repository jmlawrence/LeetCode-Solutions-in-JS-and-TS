// 323. Number of Connected Components in an Undirected Graph
// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // Parent array with [0, 1, 2 ... n];
    let parent = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }
    
    // Rank [1, 1, 1 ...];
    let rank = new Array(n).fill(1);
    
    // Find where the root of the node given is.
    const findRootParent = (node) => {
        while (node !== parent[node]) {
            parent[node] = parent[parent[node]];
            node = parent[node];
        }
        
        return node;
    }
     
    // Find parent roots of nodes and join them together.
    const union = (n1, n2) => {
        let parentOne = findRootParent(n1);
        let parentTwo = findRootParent(n2);
        
        // Same parents - so we don't need to do anything.
        if (parentOne === parentTwo) {
            return 0;
        }
        
        // Rank here means size of connected section.
        // We want to attach smaller to bigger.
        if (rank[parentTwo] > rank[parentOne]) {
            parent[parentOne] = parentTwo;
            rank[parentTwo] += rank[parentOne];
        } else {
            parent[parentTwo] = parentOne;
            rank[parentOne] += rank[parentTwo];
        }
        
        // We'll use this to decrement the total number of components.
        return 1;
    }
    
    // Assume all nodes are their own island.
    let result = n;
    
    // For all the edges, decrement the result by what the union finds ...
    // 0 -> same parent
    // 1 -> have different parent, so fewer components
    for (const [n1, n2] of edges) {
        result -= union(n1, n2);
    }
    
    return result;
};