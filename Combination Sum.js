// 39. Combination Sum

// -------------------------------------------

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// ---------------------------

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// -------------------------------------------

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const dfs = (idx, current, total) => {
        // Base case
        // If it matches the target ...
        if (total === target) {
            // ... push to result
            result.push([...current]);
            
            // Finish recurssion
            return;
        }
        
        // If out of bounds or over our target: return
        if (idx >= candidates.length || total > target) {
            return;
        }
        
        // Consider permutations that include this candidate
        current.push(candidates[idx]);
        
        // Run with new config
        dfs(idx, current, total + candidates[idx]);
        
        // Pop off the new candidate - try without it
        current.pop();
        
        // Run with incremented idx
        dfs(idx + 1, current, total);
    }
    
    // Start with empty config
    dfs(0, [], 0);
    
    return result;
};