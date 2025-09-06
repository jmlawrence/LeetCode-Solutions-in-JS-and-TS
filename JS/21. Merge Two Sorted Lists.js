// 21. Merge Two Sorted Lists
// Problem: Merge two sorted linked lists into one sorted list.
// Approach: Use sentinel node and two pointers to compare and merge.
// Time: O(m + n), Space: O(1) extra

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Sentinel node to simplify head handling
    let sentinel = new ListNode();
    let tail = sentinel;

    // While both lists have nodes
    while (list1 && list2) {
        // Compare values and attach smaller one
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next; // Move list1 forward
        } else {
            tail.next = list2;
            list2 = list2.next; // Move list2 forward
        }

        // Advance tail
        tail = tail.next;
    }

    // Attach remaining nodes from the non-empty list
    if (list1) {
        tail.next = list1;
    }

    if (list2) {
        tail.next = list2;
    }

    return sentinel.next; // Return merged list head
};