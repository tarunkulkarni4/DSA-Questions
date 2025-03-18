{/*

    Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in o

bruteForce:

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int length = 0;
        ListNode temp = head;

        // Step 1: Find length of linked list
        while (temp != null) {
            length++;
            temp = temp.next;
        }

        // Step 2: If the head node needs to be removed
        if (n == length) return head.next;

        // Step 3: Find the node before the one to be deleted
        temp = head;
        for (int i = 0; i < length - n - 1; i++) {
            temp = temp.next;
        }

        // Step 4: Delete the Nth node
        temp.next = temp.next.next;

        return head;
    }
}




Optimized:

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode slow = head;
        ListNode fast = head;

        // Move fast pointer n steps ahead
        for (int i = 0; i < n; i++) {
            if (fast == null) return head; // ✅ Handle edge case where n > length
            fast = fast.next;
        }

        // If fast becomes null, it means we need to remove the head node
        if (fast == null) {
            return head.next;
        }

        // Move both pointers together until fast reaches the last node
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Delete the Nth node from the end
        slow.next = slow.next.next;

        return head;
    }
}

    
*/}