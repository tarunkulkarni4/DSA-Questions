{/*
   
    Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

SOlution:

using stack so tc,sc leads to o(n),o(n) bcz using stack

class Solution {
    public ListNode reverseList(ListNode head) {
        // Create a stack to store the values of the nodes in the linked list
        Stack<Integer> stack = new Stack<>();
        
        // Traverse the linked list and push each node's value onto the stack
        while (head != null) {
            stack.push(head.val); // Push current node's value onto the stack
            head = head.next;     // Move to the next node
        }
        
        // Create a dummy node to act as the head of the reversed list
        ListNode reverse = new ListNode(Integer.MIN_VALUE);
        ListNode ptr = reverse; // Pointer to build the reversed list
        
        // Pop values from the stack and create nodes for the reversed list
        while (!stack.isEmpty()) {
            ptr.next = new ListNode(stack.pop()); // Create a new node with the popped value
            ptr = ptr.next;                      // Move the pointer forward
        }
        
        // Return the next node of the dummy, which is the actual reversed list head
        return reverse.next;
    }
}




            OR

OPTIMIZED APPROACH in sc i.e is o(1)
s

class Solution {
    public ListNode reverseList(ListNode head) {
        // If the input list is null, return null as there is nothing to reverse
        if (head == null) {
            return null;
        }
        
        // If the list has only one node, it is already reversed
        if (head.next == null) {
            return head;
        }

        // Initialize two pointers:
        // 'preNode' will track the previous node (starts as null)
        ListNode preNode = null;
        // 'currNode' will track the current node (starts at head)
        ListNode currNode = head;

        // Iterate through the list until all nodes are reversed
        while (currNode != null) {
            // Save the next node to preserve the rest of the list
            ListNode nextNode = currNode.next;
            // Reverse the current node's pointer to point to the previous node
            currNode.next = preNode;
            // Move 'preNode' forward to the current node
            preNode = currNode;
            // Move 'currNode' forward to the next node
            currNode = nextNode;
        }

        // Update the head to the last non-null node, which is now the new head
        head = preNode;
        return head; // Return the new head of the reversed list
    }
}

 

*/}