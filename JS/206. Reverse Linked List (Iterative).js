// 206. Reverse Linked List (Iterative)

// Reverse a singly linked list.

// Approach
// Iterative pointer reversal using prev/curr.
// Time: O(n), Space: O(1)

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
var reverseList = function (head) {
  // prev trails behind curr, building the reversed list
  let prev = null, curr = head;
  while (curr) {
    // Save next node before we break the link
    const next = curr.next;
    // Reverse the pointer
    curr.next = prev;
    // Advance both pointers
    prev = curr;
    curr = next;
  }
  return prev;
};
