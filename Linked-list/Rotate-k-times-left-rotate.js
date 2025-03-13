{/*
Rotate a Linked List

Given the head of a singly linked list, your task is to left rotate the linked list k times.

Examples:

Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
Output: 50 -> 10 -> 20 -> 30 -> 40
Explanation:
Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
Rotate 4: 50 -> 10 -> 20 -> 30 -> 40

Input: head = 10 -> 20 -> 30 -> 40 , k = 6
Output: 30 -> 40 -> 10 -> 20 
 
Constraints:

1 <= number of nodes <= 105
0 <= k <= 109
0 <= data of node <= 109

Optimized :
tc is O(n) and o(1)

Handle Edge Cases → If the list is empty, has one node, or k == 0, return head.
Find the Length → Traverse the list to get the total number of nodes (length).
Optimize k → If k > length, take k % length to remove unnecessary rotations.
Make the List Circular → Connect the last node to the head, forming a circular linked list.
Find the New Tail → Move k steps from the head to find the new tail node.
Update Head and Break the Cycle → The new head is newTail.next, and set newTail.next = null.
Return the New Head → The rotated list is now ready.
    


class Solution {
    public Node rotateLeft(Node head, int k) {
        // Step 1: Handle edge cases
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        // Step 2: Find the length of the linked list
        Node curr = head;
        int length = 1;
        while (curr.next != null) {
            curr = curr.next;
            length++;
        }

        // Step 3: Optimize k (handle cases where k > length)
        k = k % length;
        if (k == 0) {
            return head; // No rotation needed
        }

        // Step 4: Make the list circular by connecting last node to head
        curr.next = head;

        // Step 5: Find the new tail (move k steps from head)
        curr = head;
        for (int i = 1; i < k; i++) { // Move k-1 times
            curr = curr.next;
        }

        // Step 6: Update the new head and break the circular link
        Node newHead = curr.next;
        curr.next = null; // Break the circular connection

        return newHead;
    }
}

*/}