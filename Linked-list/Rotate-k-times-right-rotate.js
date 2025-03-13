{/*

    Rotate List

Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109


Brute Force:
tc is O(k*n)

Loop k times → For each rotation:
Find the last node and the second last node.
Make the last node the new head.
Update the second last node’s next pointer to null.
Repeat until k rotations are done.

optimized:

Handle Edge Cases → If the list is empty, has one node, or k == 0, return head.
Find the Length → Traverse the list to get the total number of nodes (length).
Optimize k → If k > length, take k % length to remove unnecessary rotations.
Make the List Circular → Connect the last node to the head, forming a circular linked list.
Find the New Tail → Move (length - k) steps from the head to find the new tail node.
Update Head and Break the Cycle → The new head is newTail.next, and set newTail.next = null.
Return the New Head → The rotated list is now ready.


class Solution {
    public Node rotateRight(Node head, int k) {
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

        // Step 5: Find the new tail (move length - k steps from head)
        curr = head;
        int stopAt = length - k;
        for (int i = 1; i < stopAt; i++) {
            curr = curr.next;
        }

        // Step 6: Update the new head and break the circular link
        Node newHead = curr.next;
        curr.next = null; // Break the circular connection

        return newHead;
    }
}

    
*/}