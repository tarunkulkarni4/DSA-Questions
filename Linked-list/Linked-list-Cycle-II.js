{/*
    Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

BruteForce:

public class Solution {
    public ListNode detectCycle(ListNode head) {
        Set<ListNode> seen = new HashSet<>();
        
        while (head != null) {
            if (seen.contains(head)) {
                return head; // Cycle detected, return the starting node of the cycle
            }
            seen.add(head);
            head = head.next;
        }
        
        return null; // No cycle detected
    }
}


using hare and tortoise Algo:



public class Solution {
    public ListNode detectCycle(ListNode head) {
        // Step 1: Initialize two pointers - slow moves 1 step, fast moves 2 steps
        ListNode slow = head;
        ListNode fast = head;

        // Step 2: Detect if a cycle exists using the slow and fast pointers
        while (fast != null && fast.next != null) {
            slow = slow.next;          // Move slow pointer by 1 step
            fast = fast.next.next;     // Move fast pointer by 2 steps

            // If slow and fast meet, a cycle is detected
            if (slow == fast) {
                // Step 3: Find the starting node of the cycle
                while (head != slow) {
                    head = head.next;  // Move head by 1 step
                    slow = slow.next;  // Move slow by 1 step
                }
                return slow; // Cycle detected, return the start of the cycle
            }
        }
        
        return null; // No cycle detected
    }
}

 
    
*/}