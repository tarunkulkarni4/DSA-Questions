{
  /*
    
  1.solution   time,space complexiety is 0(1)
    class Solution {
    public boolean checkTree(TreeNode root) {
        int rootValue = root.val;
        int leftValue = root.left.val;
        int rightValue = root.right.val;
        return rootValue == (leftValue + rightValue);
    }
}
    

2.using queue


class Solution {
    // Function to check whether all nodes of a tree have the value
    // equal to the sum of their child nodes.
    public static int isSumProperty(Node root) {
        if (root == null) {
            return 1; // An empty tree satisfies the property
        }

        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            Node node = queue.poll();
            int childSum = 0;

            // Add the value of the left child if it exists
            if (node.left != null) {
                childSum += node.left.data;
                queue.add(node.left);
            }

            // Add the value of the right child if it exists
            if (node.right != null) {
                childSum += node.right.data;
                queue.add(node.right);
            }

            // Check the children sum property (only for non-leaf nodes)
            if ((node.left != null || node.right != null) && node.data != childSum) {
                return 0; // Property violated
            }
        }

        return 1; // Property satisfied
    }
}

*/
}
