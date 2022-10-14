// 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    
    // Shift right by n
    while (n > 0 && right) {
        right = right.next;
        n--;
    }
    
    // move right and left until right hits end
    while (right) {
        left = left.next;
        right = right.next;
    }
    
    // delete n
    left.next = left.next.next;

    // Return head
    return dummy.next;
};