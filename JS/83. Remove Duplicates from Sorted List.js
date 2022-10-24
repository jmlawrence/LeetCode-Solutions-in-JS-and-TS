// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // NOTE: the important thing to remember is that the list is sorted. Because of this, we don't have to keep track of all the past items, we can just see if two adjacent node values are the same.

  let current = head;

  // While we are on a valid node and it has a 'next' node ...
  while (current && current.next) {
    // ... if the current is the same as the next ...
    if (current.val === current.next.val) {
      // ... take the next one out of the list
      current.next = current.next.next;
    } else {
      // ... otherwise, just move the list along
      current = current.next;
    }
  }

  // Return the head.
  return head;
};
