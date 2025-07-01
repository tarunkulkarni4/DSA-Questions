{/*
  Sort a linked list of 0s, 1s and 2s

Given the head of a linked list where nodes can contain values 0s, 1s, and 2s only. Your task is to rearrange the list so that all 0s appear at the beginning, followed by all 1s, and all 2s are placed at the end.

Examples:

Input: head = 1 → 2 → 2 → 1 → 2 → 0 → 2 → 2

Output: 0 → 1 → 1 → 2 → 2 → 2 → 2 → 2

Two Pass solution:O(2) and O(1)

class Solution {
    static Node segregate(Node head) {
        // Step 1: Count the number of 0s, 1s, and 2s
        int zeroCount = 0, oneCount = 0, twoCount = 0;
        Node temp = head;
        
        while (temp != null) {
            if (temp.data == 0) zeroCount++;
            else if (temp.data == 1) oneCount++;
            else twoCount++;
            temp = temp.next;
        }
        
        // Step 2: Overwrite values based on counts
        temp = head;
        while (temp != null) {
            if (zeroCount > 0) {
                temp.data = 0;
                zeroCount--;
            } else if (oneCount > 0) {
                temp.data = 1;
                oneCount--;
            } else {
                temp.data = 2;
                twoCount--;
            }
            temp = temp.next;
        }
        
        return head;
    }
}
 
                         ---------OR---------


One-Pass SOlution Using dummy Nodes:

class Solution {
    static Node segregate(Node head) {
        // Step 1: Create dummy heads for three linked lists for 0s, 1s, and 2s
        Node zeroHead = new Node(-1); // Dummy head for 0s
        Node oneHead = new Node(-1);  // Dummy head for 1s
        Node twoHead = new Node(-1);  // Dummy head for 2s

        // Step 2: Create tail pointers to build the three lists
        Node zeroTail = zeroHead;
        Node oneTail = oneHead;
        Node twoTail = twoHead;

        // Step 3: Traverse the original list and distribute nodes into the three lists
        Node curr = head;
        while (curr != null) {
            if (curr.data == 0) {
                zeroTail.next = curr;
                zeroTail = zeroTail.next;
            } else if (curr.data == 1) {
                oneTail.next = curr;
                oneTail = oneTail.next;
            } else {
                twoTail.next = curr;
                twoTail = twoTail.next;
            }
            curr = curr.next;
        }

        // Step 4: Terminate the list of 2s properly to avoid cycle
        twoTail.next = null;

        // Step 5: Connect 0s list to 1s list (if it exists), otherwise connect to 2s
        zeroTail.next = (oneHead.next != null) ? oneHead.next : twoHead.next;

        // Step 6: Connect 1s list to 2s list
        oneTail.next = twoHead.next;

        // Step 7: Final head should be start of 0s list if it exists,
        // otherwise 1s list or 2s list
        return zeroTail.next;
}


*/}