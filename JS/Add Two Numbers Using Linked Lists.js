// 2. Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    
    let carry = 0;
    
    // If a list or carry still exists
    while (l1 || l2 || carry) {
        // Peel off the values - or set as 0
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        
        // Do the math
        let sum = v1 + v2 + carry;
        
        // Get the carry using integer division
        carry = (sum / 10) | 0;
        
        // Get take off carry
        sum = sum % 10;
        
        // Set the next node
        current.next = new ListNode(sum);
        
        // Move along nodes
        current = current.next;
        
        // Define the next on our new node
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    // Return the head
    return dummy.next;
};