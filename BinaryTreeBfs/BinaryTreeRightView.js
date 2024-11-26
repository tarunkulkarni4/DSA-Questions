{/*
    
    1.solution using level order tecnique
    class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        // List to store the rightmost node of each level
        List<Integer> result = new ArrayList<>();

        // If the root is null, the result should also be empty
        if (root == null) {
            return result;
        }

        // Queue to perform level order traversal (BFS)
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);  // Start with the root node

        // Perform level-order traversal
        while (!queue.isEmpty()) {
            // Get the number of nodes at the current level
            int size = queue.size();

            // Process all nodes at the current level
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();  // Get the next node from the queue

                // If this is the last node at the current level, add it to the result
                if (i == size - 1) {
                    result.add(node.val);
                }

                // Add the left child to the queue if it exists
                if (node.left != null) {
                    queue.add(node.left);
                }

                // Add the right child to the queue if it exists
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
        }

        // Return the final result, which contains the rightmost nodes at each level
        return result;
    }
}
    
    
    
    
    

*/}