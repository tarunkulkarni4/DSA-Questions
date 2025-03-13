{/*

    Brute-Force:

    Use a HashSet to keep track of visited nodes.
Traverse the linked list and insert each node into the HashSet.
If a node is already present in the HashSet, we have detected a cycle.
To count the cycle length, start from this node and keep moving forward until you reach the same node again.
Return the count as the length of the cycle.


public class Solution {
    public int countNodesInLoop(ListNode head) {
        HashSet<ListNode> visited = new HashSet<>();
        ListNode cycleNode = null;

        // Step 1: Detect cycle using HashSet
        while (head != null) {
            if (visited.contains(head)) { 
                cycleNode = head; // Found start of cycle
                break;
            }
            visited.add(head);
            head = head.next;
        }

        // If no cycle found, return 0
        if (cycleNode == null) return 0;

        // Step 2: Count the number of nodes in the cycle
        int count = 1;
        ListNode temp = cycleNode.next;
        while (temp != cycleNode) {
            count++;
            temp = temp.next;
        }

        return count; // Return the length of the loop
    }
}




Optimized:
    using Hare and tortoise 

    public class Solution {
    public int countNodesInLoop(ListNode head) {
        ListNode slow = head, fast = head;

        // Step 1: Detect cycle using Floyd’s Algorithm
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            // Cycle detected
            if (slow == fast) {
                return countLoopLength(slow); // Step 2: Count the loop length
            }
        }
        return 0; // No cycle
    }

    // Helper method to count the number of nodes in the loop
    private int countLoopLength(ListNode slow) {
        ListNode temp = slow;
        int count = 1; // Start counting from the first node in the cycle

        while (temp.next != slow) { // Move until we reach the starting point again
            count++;
            temp = temp.next;
        }
        return count; // Return the loop length
    }
}

*/}