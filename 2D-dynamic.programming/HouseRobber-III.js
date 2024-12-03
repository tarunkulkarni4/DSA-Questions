{
  /*
  
Question:


 House Robber III
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root."

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place form a binary tree." It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

Example 1:
Input:
markdown
Copy code
    3
   / \
  2   3
   \    \
    3    1
Output:
Copy code
7
Explanation:
Maximum amount = 3 (root) + 3 (left-right leaf) + 1 (right-right leaf) = 7.
Example 2:
Input:
markdown
Copy code
    3
   / \
  4   5
 / \    \
1   3    1
Output:
Copy code
9
Explanation:
Maximum amount = 4 (left child) + 5 (right child) = 9.
Constraints:



Tricky formula:
       i:A(rob)=B(skip)+C(skip);

       ii:A(skip)=max((B(rob),B(skip))+(C(rob),C(skip)));



    1.solution:Using recursion (time,space complexiety is 0(n) )

 
class Solution {
    // Main function to calculate the maximum amount that can be robbed
    public int rob(TreeNode root) {
        // Call the helper function to calculate results for the root
        int[] options = travel(root);
        
        // Return the maximum of robbing the root (options[0]) or skipping it (options[1])
        return Math.max(options[0], options[1]);
    }

    // Helper function to perform a post-order traversal and calculate options
    private int[] travel(TreeNode root) {
        // Base case: If the node is null, return [0, 0] (no money can be robbed)
        if (root == null) {
            return new int[2];
        }

        // Recursive calls to calculate results for the left subtree
        int[] leftChoices = travel(root.left);
        // Recursive calls to calculate results for the right subtree
        int[] rightChoices = travel(root.right);
        
        // Create an array to store the results for the current node
        int[] options = new int[2];

        // Option 0: Rob the current node
        // Add the current node's value and the money from not robbing its children
        options[0] = root.val + leftChoices[1] + rightChoices[1];

        // Option 1: Do not rob the current node
        // Take the maximum of robbing or not robbing each child individually
        options[1] = Math.max(leftChoices[0], leftChoices[1]) + Math.max(rightChoices[0], rightChoices[1]);

        // Return the calculated options for the current node
        return options;
    }
} 
*/
}
