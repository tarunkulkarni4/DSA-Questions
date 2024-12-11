{
  /*
    Validate Binary Search Tree
Solved
Medium
Topics
Companies
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 
solution: fully optimized


class Solution {
    ArrayList<Integer> ar; // ArrayList to store the in-order traversal of the tree

    // Helper method to perform in-order traversal of the tree
    public void solve(TreeNode root) {
        if (root == null) // Base case: if the node is null, return
            return;
        
        solve(root.left); // Recursively traverse the left subtree
        ar.add(root.val); // Add the value of the current node to the list
        solve(root.right); // Recursively traverse the right subtree
    }

    // Main method to check if the tree is a valid BST
    public boolean isValidBST(TreeNode root) {
        ar = new ArrayList<Integer>(); // Initialize the ArrayList
        solve(root); // Populate the ArrayList with in-order traversal values
        
        // Loop through the ArrayList to check if it is sorted in strictly ascending order
        int key = ar.get(0); // Get the first element as the initial key
        for (int i = 1; i < ar.size(); i++) { // Traverse from the second element
            if (key >= ar.get(i)) { // Check if the current element is not greater than the previous one
                return false; // If not, it's not a valid BST
            }
            key = ar.get(i); // Update the key to the current element
        }
        return true; // If all elements are in ascending order, it's a valid BST
    }
}


                         OR



    SOlution: time and space i 0(n)

  

class Solution {
    // Method to check if a binary tree is a valid Binary Search Tree
    public boolean isValidBST(TreeNode root) {
        // List to store the in-order traversal of the tree
        List<Integer> inorderValues = new LinkedList<>();
        
        // Helper method to perform in-order traversal and populate the list
        helper(root, inorderValues);

        // Variable to keep track of whether the tree is a valid BST
        boolean bst = true;
        
        // Initialize the previous value with the first element in the list
        int prev = inorderValues.get(0); // First element from in-order traversal

        // Loop through the list to check if it is sorted in strictly ascending order
        for (int i = 1; i < inorderValues.size(); i++) {
            // If the current value is less than or equal to the previous value, it is not a BST
            if (inorderValues.get(i) <= prev) {
                bst = false; // Mark as not a BST
            }
            // Update the previous value to the current value
            prev = inorderValues.get(i);
        }

        return bst; // Return true if the tree is a BST, otherwise false
    }

    // Helper method to perform in-order traversal
    private void helper(TreeNode node, List<Integer> inorderValues) {
        if (node == null) {
            return; // Base case: if the node is null, return
        }

        // Recursively traverse the left subtree
        helper(node.left, inorderValues);
        
        // Add the current node's value to the list
        inorderValues.add(node.val);
        
        // Recursively traverse the right subtree
        helper(node.right, inorderValues);
    }
}

                 OR


class Solution {
    // Function to check whether a Binary Tree is BST or not.
    boolean isBST(Node root) {
        // List to store the in-order traversal of the tree
        List<Integer> inorderList = new LinkedList<>();
        helper(root, inorderList); // Populate the list using in-order traversal
        
        // Check if the list is sorted in strictly increasing order
        for (int i = 1; i < inorderList.size(); i++) {
            if (inorderList.get(i) <= inorderList.get(i - 1)) {
                return false; // If any element is smaller or equal to the previous, it's not a BST
            }
        }
        return true; // If the loop completes, the tree is a BST
    }

    // Helper function to perform in-order traversal
    private void helper(Node node, List<Integer> inorderList) {
        if (node == null) {
            return; // Base case: if node is null, return
        }
        helper(node.left, inorderList); // Traverse left subtree
        inorderList.add(node.data); // Add current node value to the list
        helper(node.right, inorderList); // Traverse right subtree
    }
}

 
*/
}
