// 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln

// Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
     // Find middle
    let slow = head;
    let fast = head.next;
    
    // Turtle and hare to get pointers in right place ...
    // ... one at the end and one at the beginning
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let second = slow.next;
    let prev = null;
    slow.next = null; // Break off the first half
    
    while (second) {
        let temp = second.next;
        second.next = prev;

        prev = second;
        second = temp;
    }
    
    // Merge halves
    let firstHalfNode = head;
    let secondHalfNode = prev;
    
    // We use second, since we know it will be shorter (if not the same)
    while (secondHalfNode) {
        let temp1 = firstHalfNode.next;
        let temp2 = secondHalfNode.next;
        
        firstHalfNode.next = secondHalfNode;
        secondHalfNode.next = temp1;

        firstHalfNode = temp1;
        secondHalfNode = temp2;
    }
};