{/*
    
    Binary Tree Maximum Path Sum

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

Example 1:


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
Example 2:


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
-1000 <= Node.val <= 1000
    

Solution:

recursive

class Solution {
    int maxSum = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        // Start DFS traversal
        dfs(root);
        return maxSum;
    }

    // Helper function to perform DFS
    private int dfs(TreeNode node) {
        // Base case: if node is null, return 0
        if (node == null) {
            return 0;
        }

        // Recursively calculate the max sum for the left and right subtrees
        int leftMax = Math.max(dfs(node.left), 0);  // Only take positive sums
        int rightMax = Math.max(dfs(node.right), 0);  // Only take positive sums

        // Calculate the path sum including both left and right children
        int currentMax = node.val + leftMax + rightMax;

        // Update the global max sum if the current path sum is larger
        maxSum = Math.max(maxSum, currentMax);

        // Return the maximum sum path including the node and one of its subtrees
       int hey= node.val + Math.max(leftMax, rightMax);
        return hey;
    }
}


using queue:

import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int maxPathSum(TreeNode root) {
        // Base case: if the tree is empty, return 0
        if (root == null) {
            return 0;
        }

        // Initialize maxSum to the smallest possible integer value
        int maxSum = Integer.MIN_VALUE;

        // Use a queue for level-order traversal
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        // Process all nodes in the binary tree
        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();

            // Calculate left and right maximum contributions
            int leftmax = 0;
            if (current.left != null) {
                if (current.left.val > 0) {
                    leftmax = current.left.val; // Use left child's value if positive
                } else {
                    leftmax = 0; // Ignore negative contributions
                }
            }

            int rightmax = 0;
            if (current.right != null) {
                if (current.right.val > 0) {
                    rightmax = current.right.val; // Use right child's value if positive
                } else {
                    rightmax = 0; // Ignore negative contributions
                }
            }

            // Calculate the current path sum including the current node
            int currentsum = leftmax + rightmax + current.val;

            // Update global maxSum with the maximum of currentsum and maxSum
            maxSum = Math.max(maxSum, currentsum);

            // Update the current node's value for contributing to its parent
            if (leftmax > rightmax) {
                current.val += leftmax;
            } else {
                current.val += rightmax;
            }

            // Add left and right children to the queue for further processing
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }

        // Return the maximum path sum found
        return maxSum;
    }
}

*/}
