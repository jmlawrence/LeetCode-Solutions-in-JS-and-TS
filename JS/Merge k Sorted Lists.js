// 23. Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || !lists.length) {
        return null;
    }
    
    while (lists.length > 1) {
        let merged = [];
        
        // For all the lists - increment by 2
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            // List 2 might be out of bounds - so use ternary to check
            let l2 = (i + 1) < lists.length ? lists[i + 1] : null;
            
            // Push in results
            merged.push(mergeTwoLists(l1, l2));
        }
        
        // Update lists to smaller arr
        lists = merged;
    }
    
    return lists[0];
};

// Same as LeetCode 21: Merge Two Sorted Lists
const mergeTwoLists = (list1, list2) => {
    let sentinal = new ListNode();
    let tail = sentinal;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if (list1) {
        tail.next = list1;
    }

    if (list2) {
        tail.next = list2;
    }

    return sentinal.next;
};