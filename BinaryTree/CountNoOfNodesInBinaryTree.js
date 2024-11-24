{/*
    1.using level order traversing Time complexirty o(n)and space also 0(n)
   class Solution {
    public int countNodes(TreeNode root) {
        // Base case: if the tree is empty, return 0 as there are no nodes.
        if (root == null) {
            return 0;
        }

        // Initialize a queue for Breadth-First Search (BFS) traversal.
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root); // Start by adding the root node to the queue.

        int count = 0; // Variable to keep track of the number of nodes.

        // Perform BFS while there are nodes in the queue.
        while (!queue.isEmpty()) {
            // Remove the front node from the queue.
            TreeNode nodes = queue.poll();

            // If the current node has a left child, add it to the queue.
            if (nodes.left != null) {
                queue.add(nodes.left);
            }

            // If the current node has a right child, add it to the queue.
            if (nodes.right != null) {
                queue.add(nodes.right);
            }

            // Increment the count for the current node.
            count++;
        }

        // Return the total number of nodes in the tree.
        return count;
    }
} 
    
    
*/}