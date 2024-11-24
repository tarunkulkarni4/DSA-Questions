{/*
    1.Using level order(time and space complexiety is o(n) and 0(n)->it takes no of nodes)
    class Solution {
    public boolean isSymmetric(TreeNode root) {
        // If the tree is empty, it is symmetric by definition
        if (root == null) {
            return true;
        }

        // Create two queues to hold the nodes for left and right subtrees
        Queue<TreeNode> leftTree = new LinkedList<>();
        Queue<TreeNode> rightTree = new LinkedList<>();

        // Add the left and right children of the root to their respective queues
        leftTree.add(root.left);
        rightTree.add(root.right);

        // Process the queues until both are empty
        while (!leftTree.isEmpty() && !rightTree.isEmpty()) {
            // Get the front node from each queue
            TreeNode leftNode = leftTree.poll();
            TreeNode rightNode = rightTree.poll();

            // If both nodes are null, continue to the next pair
            if (leftNode == null && rightNode == null) {
                continue;
            }

            // If one of the nodes is null, or their values are different, the tree is not symmetric
            if (leftNode == null || rightNode == null || leftNode.val != rightNode.val) {
                return false;
            }

            // Add children of the left and right nodes to their respective queues
            // Add leftNode's left child and right child to the leftTree queue
            leftTree.add(leftNode.left);
            leftTree.add(leftNode.right);

            // Add rightNode's right child and left child (mirrored order) to the rightTree queue
            rightTree.add(rightNode.right);
            rightTree.add(rightNode.left);
        }

        // If both queues are processed without issues, the tree is symmetric
        return true;
    }
}
    
*/}