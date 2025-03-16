{/*
  
    Odd Even Linked List

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]


Effiecent solution:

class Solution {
    public ListNode oddEvenList(ListNode head) {
        // Edge case: If the list is empty or has only one node, return as is
        if (head == null || head.next == null) {
            return head;
        }

        // Create two dummy nodes to form separate odd and even lists
        ListNode oddDummy = new ListNode(0);
        ListNode evenDummy = new ListNode(0);
        ListNode oddTail = oddDummy, evenTail = evenDummy;
        
        ListNode current = head;
        int index = 1; // 1-based index to track odd/even positions

        // Traverse the original list and distribute nodes to odd and even lists
        while (current != null) {
            if (index % 2 == 1) { // Odd index
                oddTail.next = new ListNode(current.val);
                oddTail = oddTail.next;
            } else { // Even index
                evenTail.next = new ListNode(current.val);
                evenTail = evenTail.next;
            }
            current = current.next;
            index++;
        }

        // Connect odd list's tail to even list's head
        oddTail.next = evenDummy.next;

        // Return the head of the new odd-even reordered list
        return oddDummy.next;
    }
}



optimized:

class Solution {
    public ListNode oddEvenList(ListNode head) {
        // Edge case: If the list is empty or has only one node, return as is
        if (head == null) {
            return head;
        }

        // Initialize pointers
        ListNode odd = head;         // Points to the odd index nodes
        ListNode even = head.next;    // Points to the even index nodes
        ListNode evenHead = even;     // Stores the head of the even list

        // Traverse the list and rearrange nodes
        while (even != null && even.next != null) {
            // Link odd nodes together
            odd.next = odd.next.next;
            odd = odd.next;

            // Link even nodes together
            even.next = even.next.next;
            even = even.next;
        }

        // Connect the odd list to the even list
        odd.next = evenHead;

        // Return the modified list
        return head;
    }
}

 
    
    
*/}