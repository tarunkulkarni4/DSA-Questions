{/*Add Two Numbers
Solved
Medium
Topics
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.





tc ,sc is o(n),o(n)




    class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(0); // Dummy node to simplify the result
        ListNode ptr = re8sult; // Pointer to build the result list
        int carry = 0; // To handle carry during addition
        
        // Traverse both lists until both are null and no carry is left
        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry; // Start with the carry-over value
            
            // Add value from l1 if available
            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next; // Move to the next node in l1
            }
            
            // Add value from l2 if available
            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next; // Move to the next node in l2
            }
            
            carry = sum / 10; // Calculate the new carry
            sum = sum % 10; // Extract the current digit
            
            ptr.next = new ListNode(sum); // Create a new node for the digit
            ptr = ptr.next; // Move the pointer to the new node
        }
        
        return result.next; // Return the result list (excluding the dummy node)
    }
}

*/}