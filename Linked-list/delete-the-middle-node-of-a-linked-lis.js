{/*
   Delete the Middle Node of a Linked List

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.  

1. Brute Force (Two-Pass)
Approach:
Find the length of the linked list (count).
Traverse again to the middle node (count/2).
Delete the middle node.
Code (O(2N))

class Solution {
    public ListNode deleteMiddle(ListNode head) {
        if (head == null || head.next == null) return null; // If only one node, return null
        
        int count = 0;
        ListNode temp = head;
        
        // Step 1: Count total nodes
        while (temp != null) {
            count++;
            temp = temp.next;
        }

        // Step 2: Traverse to (middle - 1)th node
        temp = head;
        int middle = count / 2;
        for (int i = 0; i < middle - 1; i++) {
            temp = temp.next;
        }

        // Step 3:  Delete the middle node
        temp.next = temp.next.next;

        return head;
    }
}
Time Complexity: O(2N) → Two passes (one for length, one for deletion)
Space Complexity: O(1) → No extra space used


2. Optimized Two-Pointer (Slow & Fast) (One-Pass)
Approach:
Use slow and fast pointers.
Move fast by 2 steps and slow by 1 step.
When fast reaches the end, slow will be at the middle.
Delete the middle node.

class Solution {
    public ListNode deleteMiddle(ListNode head) {
        if (head == null || head.next == null) return null; // Single node case

        ListNode slow = head, fast = head, prev = null;

        // Move slow one step and fast two steps
        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // Delete the middle node
        prev.next = slow.next;
        
        return head;
    }
}
Time Complexity: O(N) → Single traversal
Space Complexity: O(1) → Only pointers used


3. Using Stack (Extra Space)
Approach:
Push all nodes onto a stack.
Pop N/2 times to find the middle node.
Delete the middle node.
Code (O(N) Time & Space)

import java.util.Stack;

class Solution {
    public ListNode deleteMiddle(ListNode head) {
        if (head == null || head.next == null) return null;

        Stack<ListNode> stack = new Stack<>();
        ListNode temp = head;

        // Push all nodes onto stack
        while (temp != null) {
            stack.push(temp);
            temp = temp.next;
        }

        // Pop half nodes to find middle
        int middle = stack.size() / 2;
        for (int i = 0; i < middle; i++) {
            temp = stack.pop();
        }

        // Remove the middle node
        ListNode prev = stack.peek();
        prev.next = temp.next;

        return head;
    }
}
Time Complexity: O(N)
Space Complexity: O(N) (Stack stores all nodes)

4. Recursive Approach
Approach:
Recursively reach the middle node.
Backtrack and delete the middle node.
Return the modified list.
Code (O(N))

class Solution {
    public ListNode deleteMiddle(ListNode head) {
        if (head == null || head.next == null) return null; // Single node case
        deleteHelper(head, null, 0);
        return head;
    }

    private int deleteHelper(ListNode current, ListNode prev, int index) {
        if (current == null) return index; // Base case

        int totalIndex = deleteHelper(current.next, current, index + 1);

        if (index == totalIndex / 2) { // If current node is middle node
            prev.next = current.next;
        }

        return totalIndex;
    }
}
Time Complexity: O(N)
Space Complexity: O(N) (Recursive stack)
*/}