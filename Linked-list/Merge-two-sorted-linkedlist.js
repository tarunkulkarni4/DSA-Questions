
{/*
    You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]


public class MergeSortedListsBruteForce {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ArrayList<Integer> values = new ArrayList<>();

        // Collect values from first list
        while (l1 != null) {
            values.add(l1.val);
            l1 = l1.next;
        }

        // Collect values from second list
        while (l2 != null) {
            values.add(l2.val);
            l2 = l2.next;
        }

        // Sort the values
        Collections.sort(values);

        // Construct the sorted linked list
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        for (int val : values) {
            current.next = new ListNode(val);
            current = current.next;
        }

        return dummy.next;
    }
}




public class MergeSortedLists {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Dummy node to simplify the merging logic
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;

        // Merge both lists
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        // Attach any remaining nodes
        if (l1 != null) current.next = l1;
        if (l2 != null) current.next = l2;

        return dummy.next;
    }
    
*/}