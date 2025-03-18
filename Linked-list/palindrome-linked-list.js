{/*
     Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
    
Using stack:

Traverse the linked list and push all elements onto a stack.
Traverse the linked list again and compare elements by popping from the stack.
If all elements match, the list is a palindrome.

import java.util.Stack;

class Solution {
    public boolean isPalindrome(ListNode head) {
        Stack<Integer> stack = new Stack<>();
        ListNode temp = head;
        
        // Push all elements into stack
        while (temp != null) {
            stack.push(temp.val);
            temp = temp.next;
        }

        // Compare with original list
        temp = head;
        while (temp != null) {
            if (temp.val != stack.pop()) {
                return false;
            }
            temp = temp.next;
        }
        return true;
    }
}


Using Hare and tortoise :

Find the middle of the linked list using slow and fast pointers.
Reverse the second half of the list.
Compare the first and reversed second half.
Restore the original list (optional)

class Solution {
    public boolean isPalindrome(ListNode head) {
        // Step 1: Use slow and fast pointers to find the middle of the linked list
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the linked list
        slow = reverseList(slow);
        fast = head; // Reset fast pointer to start

        // Step 3: Compare the first half with the reversed second half
        while (slow != null) { // Only need to check the second half
            if (fast.val != slow.val) { // If values don't match, it's not a palindrome
                return false;
            }
            fast = fast.next;
            slow = slow.next;
        }
        return true; // If all values match, it's a palindrome
    }

    // Function to reverse a linked list
    private ListNode reverseList(ListNode head) {
        ListNode preNode = null; // Previous pointer (initially null)
        ListNode currNode = head; // Current pointer (initially head)

        while (currNode != null) {
            ListNode nextNode = currNode.next; // Save next node
            currNode.next = preNode; // Reverse link
            preNode = currNode; // Move previous pointer forward
            currNode = nextNode; // Move current pointer forward
        }
        return preNode; // New head of the reversed list
    }
}
*/}