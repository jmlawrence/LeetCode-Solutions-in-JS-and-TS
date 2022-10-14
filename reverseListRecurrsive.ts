/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseListRecurrsive(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    
    let newHead = head;
    if (head.next) {
        newHead = reverseListRecurrsive(head.next);
        head.next.next = head;
    }
    
    head.next = null;
    
    return newHead;
};