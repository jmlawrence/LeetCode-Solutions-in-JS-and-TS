// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
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
var mergeTwoLists = function(list1, list2) {
    let sentinal = new ListNode();
    let tail = sentinal;
    
    // While there is something in both lists
    while (list1 && list2) {
        // Find lower value and set that as the next node ...
        // ... then, move the lower value list along
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        
        // Move primary linked list along
        tail = tail.next;
    }
    
    // If there's one list longer than the other ...
    // ... add what's left on the longer list to the shorter list
    if (list1) {
        tail.next = list1;
    } 
    
    if (list2) {
        tail.next = list2;
    }
    
    return sentinal.next;
};