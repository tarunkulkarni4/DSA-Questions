{/*
    
    Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

    public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA;
        
        while (a != null) {
            ListNode b = headB;
            while (b != null) {
                if (a == b) { // checking reference, not value
                    return a;
                }
                b = b.next;
            }
            a = a.next;
        }
        
        return null;
    }
}


using hashset:

import java.util.HashSet;

public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        HashSet<ListNode> set = new HashSet<>();

        // Add all nodes of list A to the set
        while (headA != null) {
            set.add(headA);
            headA = headA.next;
        }

        // Traverse list B and check for intersection
        while (headB != null) {
            if (set.contains(headB)) {
                return headB; // Intersection point
            }
            headB = headB.next;
        }

        return null; // No intersection
    }
}

using Length:

 
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int lenA=getlength(headA);
        int lenB=getlength(headB);

        while(lenA>lenB)
        {
            lenA--;
            headA=headA.next;
        }
        while(lenB>lenA)
        {
            lenB--;
            headB=headB.next;
        }
        while(headA!=headB)
        {
            headA=headA.next;
            headB=headB.next;
        }
        return headB;
    }
    public int getlength(ListNode head)
    {
        int count=0;
        ListNode temp=head;
        while(temp!=null)
        {
            count++;
            temp=temp.next;
        }
        return count;
    }
}
*/}