// 207. Course Schedule
// Problem: Determine if it's possible to finish all courses given prerequisites.
//
// Core Concept: Cycle Detection in Directed Graph
// This is fundamentally a graph problem - courses are nodes, prerequisites are edges.
// If there's a cycle in the dependency graph, courses can't be completed.
//
// Graph Theory Insight:
// - A DAG (Directed Acyclic Graph) allows topological ordering
// - Any cycle makes completion impossible (circular dependency)
// - We need to detect if the prerequisite graph contains any cycles
//
// Algorithm Choice: DFS with Three Colors
// White (unvisited) -> Gray (in progress) -> Black (completed)
// Gray nodes on the recursion stack indicate a back-edge (cycle)
//
// Alternative: Kahn's Algorithm (BFS with indegree)
// This solution uses DFS for educational clarity about cycle detection
//
// Time: O(V + E) where V = courses, E = prerequisites
// Space: O(V + E) for adjacency list + O(V) for recursion stack

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Build adjacency list representation of the graph
  // preMap[course] = [list of prerequisites for this course]
  const preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }

  // Add edges: for each [course, prerequisite] pair
  for (const [course, prerequisite] of prerequisites) {
    preMap[course].push(prerequisite);
  }

  // Three-color DFS state tracking
  const UNVISITED = 0;
  const IN_PROGRESS = 1;  // Gray - currently exploring (on recursion stack)
  const COMPLETED = 2;    // Black - fully explored (no cycles below)

  const state = new Array(numCourses).fill(UNVISITED);

  /**
   * DFS to detect cycles starting from a course
   * @param {number} course - current course being explored
   * @return {boolean} - true if no cycle detected, false if cycle found
   */
  const dfs = (course) => {
    // Cycle detected: found a back-edge to a node on recursion stack
    if (state[course] === IN_PROGRESS) {
      return false;
    }

    // Already fully explored this subtree - no cycles below
    if (state[course] === COMPLETED) {
      return true;
    }

    // Mark as currently being explored (gray)
    state[course] = IN_PROGRESS;

    // Explore all prerequisites (children in the graph)
    for (const prerequisite of preMap[course]) {
      if (!dfs(prerequisite)) {
        return false; // Cycle found in subtree
      }
    }

    // Finished exploring all prerequisites - mark as completed (black)
    state[course] = COMPLETED;

    return true;
  };

  // Check all courses (handles disconnected components)
  // Some courses might have no prerequisites or be in separate components
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false; // Cycle detected
    }
  }

  return true; // No cycles found - all courses can be completed
};
