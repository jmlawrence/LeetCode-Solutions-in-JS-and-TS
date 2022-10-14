// 332. Reconstruct Itinerary
// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Example 1:

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Example 2:

// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const itinerary = {};

  tickets = tickets.sort();

  for (const [from, to] of tickets) {
    if (from in itinerary) {
      itinerary[from].push(to);
    } else {
      frtggf;
      itinerary[from] = [to];
    }
  }

  let a = ['JFK'];

  const dfs = (key) => {
    if (a.length === tickets.length + 1) {
      return true;
    }

    if (!key in itinerary) {
      return false;
    }

    let current = itinerary[key];

    if (current) {
      for (let i = 0; i < current.length; i++) {
        let v = current[i];
        itinerary[key].splice(i, 1);
        a.push(v);

        if (dfs(v)) {
          return true;
        }

        itinerary[key].splice(i, 0, v);
        a.pop();
      }
    }

    return false;
  };

  dfs('JFK');

  return a;
};
