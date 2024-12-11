{
  /*

    Problem: Minimum Absolute Difference in BST
You are given the root of a Binary Search Tree (BST), and you need to return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:
Input:

css
Copy code
root = [4,2,6,1,3]
Output:

Copy code
1
Example 2:
Input:

csharp
Copy code
root = [1,0,48,null,null,12,49]
Output:

Copy code
1
Constraints:
The number of nodes in the tree is in the range [2, 10^4].
Node values are between 0 and 10^5.

Approach:
Inorder Traversal:
Since a Binary Search Tree (BST) is always sorted in inorder (left subtree, root, right subtree), an inorder traversal of the tree will give us the node values in ascending order.
Calculating the Minimum Absolute Difference:
Once the values are in sorted order, we can calculate the absolute difference between every pair of consecutive nodes, and the smallest of these differences will be our answer.


Algorithm:
Perform an inorder traversal of the tree.
Store the node values in a list during the traversal.
Iterate through the list of node values and calculate the absolute differences between each pair of consecutive nodes.
Track the minimum difference found.
Return the minimum difference.

Solution :time,space is o(N)


class Solution {
    // Method to find the minimum absolute difference in the BST
    public int getMinimumDifference(TreeNode root) {
        // Edge case: if the tree is empty, return -1
        if (root == null) {
            return -1;
        }

        // List to store the inorder traversal of the BST
        List<Integer> inorderList = new ArrayList<>();
        
        // Perform the inorder traversal and store the node values in the list
        helper(root, inorderList);
        
        // Initialize mindifference to the largest possible integer value
        int mindifference = Integer.MAX_VALUE;
        
        // Iterate through the inorder list to calculate the minimum absolute difference
        for (int i = 1; i < inorderList.size(); i++) {
            // Calculate the difference between consecutive elements
            int diff = inorderList.get(i) - inorderList.get(i - 1);
            // Update the minimum difference found so far
            mindifference = Math.min(mindifference, diff);
        }
        
        // Return the minimum difference found
        return mindifference;
    }

    // Helper method to perform inorder traversal and store node values
    private void helper(TreeNode node, List<Integer> inorderList) {
        if (node == null) {
            return;  // Base case: if the node is null, return
        }
        
        // Recursively traverse the left subtree
        helper(node.left, inorderList);
        
        // Add the current node's value to the inorder list
        inorderList.add(node.val);
        
        // Recursively traverse the right subtree
        helper(node.right, inorderList);
    }
}

                       OR 
SOlution: time,space is o(n),o(H)

class Solution {
    // This variable will store the last node value seen during the inorder traversal
    TreeNode lastSeen = null;
    
    // This variable keeps track of the minimum difference encountered so far
    int min = Integer.MAX_VALUE;
    
    // Main method to start the minimum difference calculation
    public int getMinimumDifference(TreeNode root) {
        // Call the helper function to perform inorder traversal and update min
        helper(root);
        
        // Return the final minimum difference
        return min;
    }

    // Helper method to perform inorder traversal recursively
    private void helper(TreeNode root) {
        // Base case: if the current node is null, return (no processing needed)
        if (root == null) return;
        
        // Recursively traverse the left subtree
        helper(root.left);
        
        // If the lastSeen node is not null, calculate the difference between
        // the current node and the last seen node, and update min if the new difference is smaller
        if (lastSeen != null)
            min = Math.min(min, root.val - lastSeen.val);
        
        // Update lastSeen to the current node for the next iteration
        lastSeen = root;
        
        // Recursively traverse the right subtree
        helper(root.right);
    }
}

*/
}
