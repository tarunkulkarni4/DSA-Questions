{/*
    1.using recursion Time and space complexiety is 0(N)

    
    class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>(); // Create an empty list to store the result
        postOrder(root, result);                    // Call the helper function to traverse the tree
        return result;                             // Return the list containing the traversal result
    }

    // Helper method to perform postorder traversal recursively
    private void postOrder(TreeNode node, List<Integer> result) {
        if (node == null) { // Base case: If the current node is null, stop the recursion
            return;         // Exit the function
        }

        postOrder(node.left, result);  // Recursively traverse the left subtree (visit left)
        postOrder(node.right, result); // Recursively traverse the right subtree (visit right)
        result.add(node.val); // Add the current node's value to the result list (visit root)
    }
}

    
*/}