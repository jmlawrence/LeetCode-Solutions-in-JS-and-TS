// 261. Graph Valid Tree
// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    // Sanity check n is > 0
    if (!n) {
        return false;
    }
    
    // Set up adjacency table
    // <nodes> : <nodes> 
    const adjacency = {};
    
    for (let i = 0; i < n; i++) {
        adjacency[i] = [];
    }
    
    // Note: we are marking adjacency both ways
    for (const [start, end] of edges) {
        adjacency[start].push(end);
        adjacency[end].push(start);
    }
    
    let visited = new Set();
    
    const dfs = (currentNode, prev) => {
        if (visited.has(currentNode)) {
            return false;
        }
        
        visited.add(currentNode);
    
        for (const adjacentNode of adjacency[currentNode]) {
            // We don't want to check this
            if (adjacentNode === prev) {
                continue;
            }
            
            // We want to check these
            if (!dfs(adjacentNode, currentNode)) {
                return false;
            }
        }
        
        return true;
    }
    
    // Check both: no cycles and no islands
    return dfs(0, -1) && n === visited.size;
};
