// 297. Serialize and Deserialize Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var serialize = function(root) {
    // Arr for each node
    const res = [];
    
    const dfs = (node) => {
        // Base case -> add N
        if (!node) {
            res.push("N");
            return;
        }
        
        // Add value
        res.push(node.val);
        
        // Left and right
        dfs(node.left);
        dfs(node.right);
    }
    
    // Start at root
    dfs(root);
    
    // Return - joined - as string
    return res.join(',');
};

var deserialize = function(data) {
    let vals = data.split(',');
    let i = 0;
    
    const dfs = () => {
        // If a 'null' char - return null
        if (vals[i] === "N") {
            // Always increment
            i++;
            
            // Leaf node
            return null;
        }
        
        // Create a new node - remember to convert to int
        let node = new TreeNode(+vals[i]);
        
        // Increment
        i++;
        
        // Go left and right (no need to pass in anything; since we're using i)
        node.left = dfs();
        node.right = dfs();
        
        return node;
    }
    
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */