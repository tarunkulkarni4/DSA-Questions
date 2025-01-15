{/*

Max and min element in Binary Tree

Given a Binary Tree, find maximum and minimum elements in it.

Example:

Input: 
           
Output: 11 1
Explanation: The maximum and minimum element in this binary tree is 11 and 1 respectively.
Input: 
           6
        / \
       5   8
      /
     2
Output: 8 2
Explanation: The maximum and minimum element in this binary tree is 8 and 2 respectively.


class Solution {
    // Function to find the maximum value in the binary tree
    public static int findMax(Node root) {
        // Base case: if the tree is empty, return the smallest possible value
        if (root == null) {
            return Integer.MIN_VALUE;
        }

        // Recursively find the max in the left and right subtrees
        int leftMax = findMax(root.left);
        int rightMax = findMax(root.right);

        // Return the maximum of the current node, left subtree, and right subtree
        return Math.max(root.data, Math.max(leftMax, rightMax));
    }

    // Function to find the minimum value in the binary tree
    public static int findMin(Node root) {
        // Base case: if the tree is empty, return the largest possible value
        if (root == null) {
            return Integer.MAX_VALUE;
        }

        // Recursively find the min in the left and right subtrees
        int leftMin = findMin(root.left);
        int rightMin = findMin(root.right);

        // Return the minimum of the current node, left subtree, and right subtree
        return Math.min(root.data, Math.min(leftMin, rightMin));
    }
}

*/}