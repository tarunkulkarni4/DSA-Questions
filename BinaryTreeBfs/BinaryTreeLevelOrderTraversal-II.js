{
  /*
    
 1.Using level order (using addFirst method to reverse an array or use Collections.reverse)

class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        // Initialize an empty list to store the level order traversal of the tree.
        List<List<Integer>> result = new ArrayList<>();
        
        // If the root is null, return the empty result list.
        if (root == null) {
            return result;
        }
        
        // Create a queue to help with the BFS (Breadth-First Search) traversal.
        Queue<TreeNode> queue = new LinkedList<>();
        
        // Add the root node to the queue to start the traversal.
        queue.add(root);

        // Start BFS loop to process each level of the tree.
        while (!queue.isEmpty()) {
            // Get the number of nodes at the current level.
            int size = queue.size();
            
            // Create a list to store the values of nodes at the current level.
            List<Integer> level = new ArrayList<>();
            
            // Process each node at the current level.
            for (int i = 0; i < size; i++) {
                // Poll the front node from the queue.
                TreeNode node = queue.poll();
                
                // Add the node's value to the current level's list.
                level.add(node.val);
                
                // If the current node has a left child, add it to the queue for the next level.
                if (node.left != null) {
                    queue.add(node.left);
                }
                
                // If the current node has a right child, add it to the queue for the next level.
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
            
            // Add the current level's list to the result list at the beginning (to reverse the order).
            // The goal is to add levels in bottom-to-top order.
            result.addFirst(level); // This will give an error, as ArrayList doesn't have addFirst method.
        }
        
        // Return the final result list with levels in bottom-to-top order.
        return result;
    }
}
    
                   0R

  2.By swapping

    public class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        // Result list to store levels in top-to-bottom order first.
        List<List<Integer>> result = new ArrayList<>();
        
        // If the tree is empty, return an empty list.
        if (root == null) {
            return result;
        }
        
        // Queue for BFS traversal.
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        
        // Perform BFS traversal.
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val); // Collect current level's nodes.
                
                // Add children to the queue for the next level.
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
            
            // Add the current level to result.
            result.add(level); // Levels are added in top-to-bottom order.
        }
        
        // Reverse the result list manually by swapping elements.
        int left = 0, right = result.size() - 1;
        while (left < right) {
            // Swap the elements at index left and right.
            List<Integer> temp = result.get(left);
            result.set(left, result.get(right));
            result.set(right, temp);
            
            // Move pointers.
            left++;
            right--;
        }
        
        return result;
    }
}

    
    */
}
