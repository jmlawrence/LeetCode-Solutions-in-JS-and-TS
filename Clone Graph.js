// 133. Clone Graph
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
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
        
        return copy
    }
    
    return node ? clone(node) : null;
};