{/*
    114. Flatten Binary Tree to Linked List
Solved
Medium
Topics
Companies
Hint
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

Example 1:


Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [0]
Output: [0]

solution: using queue
   
  Time Complexity:O(n), where 
 space  complexity:O(n)
n is the number of nodes in the tree


class Solution {
    public void flatten(TreeNode root) {
        // If the tree is empty, there is nothing to flatten
        if (root == null) {
            return;
        }
        
        // Queue to store nodes in preorder traversal order
        Queue<TreeNode> queue = new LinkedList<>();
        
        // Populate the queue with nodes in preorder sequence
        preOrder(root, queue);

        // Start reconstructing the tree using the nodes in the queue
        TreeNode prev = queue.poll(); // The first node becomes the root of the linked list
        while (!queue.isEmpty()) {
            TreeNode current = queue.poll(); // Get the next node in the preorder sequence
            
            // Flatten the tree: remove the left child and connect to the right child
            prev.left = null;    // Clear the left child as we're forming a linked list
            prev.right = current; // Connect the current node as the right child
            prev = current;      // Move the pointer to the current node for the next iteration
        }
    }

    // Helper function to perform preorder traversal and store nodes in the queue
    private void preOrder(TreeNode root, Queue<TreeNode> queue) {
        if (root == null) {
            return; // Base case: stop recursion for null nodes
        }
        queue.add(root); // Add the current node to the queue
        preOrder(root.left, queue); // Recursively process the left subtree
        preOrder(root.right, queue); // Recursively process the right subtree
    }
}


*/}