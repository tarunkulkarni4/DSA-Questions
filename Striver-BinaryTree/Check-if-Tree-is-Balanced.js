{/*
    A balanced binary tree is a binary tree in which the height difference between
     the left and right subtrees of every node is at most 1.

1)     Brute Force using Recursion:

    Time Complexity: O(n²)

class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) return true;

        int leftHeight = height(root.left);
        int rightHeight = height(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        // Recurse on left and right subtrees
        return isBalanced(root.left) && isBalanced(root.right);
    }

    private int height(TreeNode node) {
        if (node == null) return 0;
        return Math.max(height(node.left), height(node.right)) + 1;
    }
}

 2)      Optimized Recursive Solution — O(n)

 class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) {
        this.val = val;
    }
}

class Solution {
    public boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }

    private int checkHeight(TreeNode node) {
        if (node == null) return 0;

        int left = checkHeight(node.left);
        int right = checkHeight(node.right);

        // If either subtree is unbalanced, propagate -1
        if (left == -1 || right == -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }
}



*/}