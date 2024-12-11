{
/*
First the solution for these both problem is same .because we using queue thats visit each level and the pointer
i.first one is perfect binary tree
ii.its a tree not perfect

 solution:using queue level order  (time ,space is O(n) )


class Solution {
    public Node connect(Node root) {
        // Base case: if the root is null, no work is needed
        if(root == null) {
            return null;
        }

        // Initialize a queue for level-order traversal
        Queue<Node> queue = new LinkedList<>();
        queue.add(root); // Start with the root node

        // Continue the traversal until the queue is empty
        while(!queue.isEmpty()) {
            // Get the number of nodes at the current level
            int level = queue.size();
            Node prev = null;  // To track the previous node on the current level

            // Process all nodes at the current level
            for(int i = 0; i < level; i++) {
                // Poll the current node from the queue
                Node current = queue.poll();

                // Connect the previous node's `next` to the current node
                if(prev != null) {
                    prev.next = current;
                }

                // Update `prev` to the current node for the next iteration
                prev = current;

                // Add the left and right children of the current node (if they exist) to the queue
                if(current.left != null) {
                    queue.add(current.left);
                }
                if(current.right != null) {
                    queue.add(current.right);
                }
            }

            // After processing all nodes at the current level, set the `next` of the last node to null
            if(prev != null) {
                prev.next = null;
            }
        }
        
        // Return the root, which now has its `next` pointers set for all nodes
        return root;
    }
}

*/
}