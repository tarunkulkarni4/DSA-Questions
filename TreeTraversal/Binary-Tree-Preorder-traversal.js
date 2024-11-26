{/*
    
    1.Recursive solution time ans space is 0(N)
  class Solution {
    // Main method to perform preorder traversal
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>(); // Create an empty list to store the result
        preOrder(root, result);                    // Call the helper function to traverse the tree
        return result;                             // Return the list containing the traversal result
    }

    // Helper method to perform preorder traversal recursively
    private void preOrder(TreeNode node, List<Integer> result) {
        if (node == null) { // Base case: If the current node is null, stop the recursion
            return;         // Exit the function
        }

        result.add(node.val); // Add the current node's value to the result list (visit root)
        preOrder(node.left, result);  // Recursively traverse the left subtree (visit left)
        preOrder(node.right, result); // Recursively traverse the right subtree (visit right)
    }
}

*/}