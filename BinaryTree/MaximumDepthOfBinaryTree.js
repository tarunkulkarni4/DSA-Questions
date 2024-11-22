{/*
    
    1.using recursion

      public class Solution {
    public int maxDepth(TreeNode A) {
        if (A == null) {
            return 0; // Base case: empty tree has depth 0
        }

        // Recursively calculate the depths of left and right subtrees
        int leftDepth = maxDepth(A.left);
        int rightDepth = maxDepth(A.right);

        // Return the greater depth + 1 for the current level
        return 1 + Math.max(leftDepth, rightDepth);
    }
} 
      
             OR

    2.Using level order techinque

    class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root); // Start with the root node
        int level = 0;   // Initialize depth level to 0

        while (!queue.isEmpty()) {
            int count = queue.size(); // Get the number of nodes at the current level
            for (int i = 0; i < count; i++) {
                TreeNode node = queue.poll(); // Retrieve and remove the front node

                // Add left and right children (if they exist) to the queue
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
            level++; // Increment the level after processing all nodes at the current level
        }

        return level; // Return the maximum depth
    }
}



    */}