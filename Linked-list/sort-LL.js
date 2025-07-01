{/*
Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]

Solution:
using Sorting 

public class SortLinkedListWithExtraArray {
    public ListNode sortList(ListNode head) {
        if (head == null) return null;

        // Step 1: Store values in array
        List<Integer> values = new ArrayList<>();
        ListNode temp = head;
        while (temp != null) {
            values.add(temp.val);
            temp = temp.next;
        }

        // Step 2: Sort the array
        Collections.sort(values);

        // Step 3: Rewrite values into the list
        temp = head;
        for (int val : values) {
            temp.val = val;
            temp = temp.next;
        }

        return head;
    }
}

Using standar merge sort:

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class InPlaceSortLinkedList {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;

        // Step 1: Split list into two halves
        ListNode mid = getMid(head);
        ListNode rightHead = mid.next;
        mid.next = null;  // break the list

        // Step 2: Sort each half recursively
        ListNode left = sortList(head);
        ListNode right = sortList(rightHead);

        // Step 3: Merge the sorted halves
        return merge(left, right);
    }

    private ListNode getMid(ListNode head) {
        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;  // middle node
    }

    private ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1), current = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
}

    
*/}