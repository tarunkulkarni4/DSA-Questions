{/*
   Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []

Node removeElements(Node head, int val) {
    Node dummy = new Node(-1); // dummy node before head
    dummy.next = head;
    Node curr = dummy;

    while (curr.next != null) {
        if (curr.next.data == val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
}

*/}