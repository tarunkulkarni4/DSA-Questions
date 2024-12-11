{/*
    question:
     
    You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []


solution:  using level order (time ,space is O(n))

class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        // If the root is null, return null as there's no tree to search
        if (root == null) {
            return null;
        }

        // Initialize a queue for level-order traversal (Breadth-First Search)
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root); // Start the traversal with the root node

        // Perform level-order traversal until the queue is empty
        while (!queue.isEmpty()) {
            // Poll the node from the front of the queue
            TreeNode node = queue.poll();

            // Check if the current node's value matches the target value
            if (node.val == val) {
                return node; // Return the node if the value matches
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

        // If the node with the value is not found, return null
        return null;
    }
}
 
    
    
*/}