{
  /*
  1.using recursion Time and space complexiety is 0(N)


  
    class Solution {
    // Main method to perform inorder traversal
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>(); // Create a list to store the traversal result
        inorderHelper(root, result);             // Call the helper function to perform traversal
        return result;                           // Return the final result list
    }

    // Helper function to recursively traverse the tree in inorder
    private void inorderHelper(TreeNode node, List<Integer> result) {
        if (node == null) {                      // Base case: If the current node is null, stop recursion
            return;                              // Exit the function
        }
        inorderHelper(node.left, result);        // Recursively traverse the left subtree
        result.add(node.val);                   // Add the current node's value to the result list
        inorderHelper(node.right, result);       // Recursively traverse the right subtree
    }
}
  
    */
}
