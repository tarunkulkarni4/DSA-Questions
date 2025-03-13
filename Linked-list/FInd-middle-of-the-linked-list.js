{/*

     Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


Brute Force:

class Solution {
    public Node findMiddle(Node head) {
        if (head == null) return null; // Edge case: empty list

        // Step 1: Find the length of the linked list
        int length = 0;
        Node curr = head;
        while (curr != null) {
            length++;
            curr = curr.next;
        }

        // Step 2: Find the middle position
        int middle = length / 2;

        // Step 3: Traverse again to the middle node
        curr = head;
        for (int i = 0; i < middle; i++) {
            curr = curr.next;
        }

        // Step 4: Return the middle node
        return curr;
    }
}


Optimized:

using Tortoise and Hare algorithm

class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        // Fix: Check both `fast` and `fast.next` before accessing `fast.next.next`
        while (fast != null && fast.next != null) {  
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;  // `slow` is at the middle when `fast` reaches the end
    }
}


*/}