// 207. Course Schedule
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Have an array for every course - filled with their prerequisites
  const preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }
  for (const [crs, pre] of prerequisites) {
    preMap[crs].push(pre);
  }

  // Create set to help identify cycles
  const cycleCheck = new Set();

  const dfs = (course) => {
    // BASE CASE: already been visited: CYCLE DETECTED
    if (cycleCheck.has(course)) {
      return false;
    }

    // Either already been visited (and prereqs checked out) - or no prereqs
    if (preMap[course] === []) {
      return true;
    }

    // Mark course as visited - to help detects cycles
    cycleCheck.add(course);

    // If this course has any prereqs - process them
    for (const pre of preMap[course]) {
      // If any are false - return false - can't finish
      if (!dfs(pre)) {
        return false;
      }
    }

    // No cycles detected! Remove; in case other course have this as prereq
    cycleCheck.delete(course);

    // All prereqs have passed - mark its prereqs as empty
    preMap[course] = [];

    // If it passes all this - it's valid
    return true;
  };

  // In case there are islands - make sure to run through every course.
  // Since we have marked visited course as having no prereqs - shouldn't effect performance.
  for (const course in preMap) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
