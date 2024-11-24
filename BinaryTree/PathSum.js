{/*
  1.using level order time complexiety is o(n) and 0(n)


class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        // If the tree is empty, there can't be any path, so return false.
        if (root == null) {
            return false;
        }

        // Use stacks to perform a Depth-First Search (DFS).
        Stack<TreeNode> path = new Stack<>();       // Stack to keep track of nodes.
        Stack<Integer> pathSum = new Stack<>();     // Stack to keep track of cumulative sums.

        // Push the root node and its value into the respective stacks.
        path.push(root);
        pathSum.push(root.val);

        // While there are nodes to process in the stack
        while (!path.isEmpty()) {
            // Pop the top node and its corresponding sum
            TreeNode temp = path.pop();
            int sum = pathSum.pop();

            // Check if the current node is a leaf (no children) and the cumulative sum matches the target.
            if (temp.left == null && temp.right == null && sum == targetSum) {
                return true; // Path found
            }

            // If the left child exists, push it into the stack along with its updated sum.
            if (temp.left != null) {
                path.push(temp.left);
                pathSum.push(temp.left.val + sum);
            }

            // If the right child exists, push it into the stack along with its updated sum.
            if (temp.right != null) {
                path.push(temp.right);
                pathSum.push(temp.right.val + sum);
            }
        }

        // If we exit the loop without finding a valid path, return false.
        return false;
    }
}

    
*/}