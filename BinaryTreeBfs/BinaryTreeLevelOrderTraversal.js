{
  /*

    1.using level order techinque

    

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {

        // The result list will store lists of integers for each level of the tree.
        List<List<Integer>> result = new ArrayList<>();
        
        // If the root is null, there is no tree to traverse, so return an empty result list.
        if (root == null) {
            return result;
        }

        // A queue is used for the Breadth-First Search (BFS) traversal of the tree.
        Queue<TreeNode> queue = new LinkedList<>();
        
        // Start with the root node by adding it to the queue.
        queue.add(root);

        // Perform BFS until the queue becomes empty.
        while (!queue.isEmpty()) {
            // Get the number of nodes at the current level.
            int size = queue.size();
            
            // Create a list to store the values of nodes at the current level.
            List<Integer> level = new ArrayList<>();

            // Process each node at the current level.
            for (int i = 0; i < size; i++) {
                // Remove the front node from the queue.
                TreeNode node = queue.poll();
                
                // Add the value of the current node to the level list.
                level.add(node.val);

                // If the current node has a left child, add it to the queue for processing in the next level.
                if (node.left != null) {
                    queue.add(node.left);
                }

                // If the current node has a right child, add it to the queue for processing in the next level.
                if (node.right != null) {
                    queue.add(node.right);
                }
            }

            // After processing all nodes at the current level, add the level list to the result list.
            result.add(level);
        }

        // Return the final result list containing all levels of the tree.
        return result;
    }
}

*/
}
