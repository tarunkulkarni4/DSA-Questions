{/*

class Solution {
    public boolean checkTree(TreeNode root) {
        int rootValue = root.val;
        int leftValue = root.left.val;
        int rightValue = root.right.val;
        return rootValue == (leftValue + rightValue);
    }
}


              or
 
 
class Solution {
    public boolean checkTree(TreeNode root) {
        if (root == null) {
            return true;
        }
        
        // Initialize a queue for BFS
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        
        // Perform level-order traversal (BFS)
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node.left == null && node.right == null)
                continue;

            
            // Initialize left and right sums to 0
            int left = 0, right = 0;
            
            // If left child exists, add its data
            if (node.left != null) {
                left = node.left.val;
            }
            
            // If right child exists, add its data
            if (node.right != null) {
                right = node.right.val;
            }
            
            // Check if the current node's data is equal to the sum of its children's data
            if (node.val != left + right) {
                return false;  // If the property is violated, return 0
            }
            
            // Add the left and right children to the queue if they exist
            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
        }
        
        // Return 1 if all nodes satisfy the children sum property
        return true;
    }
}
*/}