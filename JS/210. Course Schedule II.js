// 210. Course Schedule II

// Return a possible order to finish all courses given prerequisites, or [] if impossible.

// Approach
// Kahn's algorithm (BFS topological sort): build indegree and adjacency list, push zero-indegree nodes to queue,
// repeatedly remove and decrement neighbors. If we output all courses, return order; otherwise a cycle exists.
// Time: O(V + E), Space: O(V + E)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const indeg = new Array(numCourses).fill(0);

  // Build graph
  for (const [crs, pre] of prerequisites) {
    adj[pre].push(crs);
    indeg[crs]++;
  }

  const q = [];
  // Start with courses that have no prerequisites
  for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) q.push(i);

  const order = [];
  while (q.length) {
    const node = q.shift();
    order.push(node);
    // Decrease indegree of neighbors; if becomes zero enqueue
    for (const nei of adj[node]) {
      indeg[nei]--;
      if (indeg[nei] === 0) q.push(nei);
    }
  }

  // If we scheduled all courses, return order; otherwise cycle present
  return order.length === numCourses ? order : [];
};
