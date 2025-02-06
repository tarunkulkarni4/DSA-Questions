{/*
   
    Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

 

Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
Example 2:

Input: root = [1,2,3]
Output: [1,3]
 

Constraints:

The number of nodes in the tree will be in the range [0, 104].
-231 <= Node.val <= 231 - 1
    

class Solution {
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) {
            return result;  // If the tree is empty, return an empty list
        }
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);  // Start by adding the root to the queue
        
        while (!queue.isEmpty()) {  // Keep iterating as long as the queue is not empty
            int level = queue.size();  // Get the number of nodes at the current level
            int max = Integer.MIN_VALUE;  // Initialize max value for the current level
            
            for (int i = 0; i < level; i++) {  // Process all nodes at the current level
                TreeNode node = queue.poll();  // Remove the front node from the queue
                max = Math.max(max, node.val);  // Update the max value for this level
                
                // Add left and right children to the queue, if they exist
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
            
            result.add(max);  // Add the max value for this level to the result list
        }
        
        return result;  // Return the result list containing the largest values for each level
    }
}



    */}