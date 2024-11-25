{
  /*

    1.using level order techinque using stackl and queue(time and space complexiety is both are same 0(n))
       
    
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> zigzag = new ArrayList<>(); // Result list to store zigzag traversal
        if (root == null) {
            return zigzag; // Return empty list if the tree is empty
        }

        Queue<TreeNode> queue = new LinkedList<>(); // Queue for level-order traversal
        queue.add(root); // Add root to start the traversal
        boolean flag = false; // If false, traverse left-to-right; if true, traverse right-to-left

        while (!queue.isEmpty()) {
            int size = queue.size(); // Number of nodes at the current level
            List<Integer> level = new ArrayList<>(); // List to store the current level's values
            Stack<Integer> reverseStack = new Stack<>(); // Stack for reversing values when flag is true

            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll(); // Remove the front node from the queue

                if (flag) {
                    reverseStack.push(node.val); // Add value to stack for reverse order
                } else {
                    level.add(node.val); // Add value directly for left-to-right order
                }

                // Add the left child to the queue if it exists
                if (node.left != null) {
                    queue.add(node.left);
                }

                // Add the right child to the queue if it exists
                if (node.right != null) {
                    queue.add(node.right);
                }
            }

            // If flag is true, add reversed values from the stack to the level list
            if (flag) {
                while (!reverseStack.isEmpty()) {
                    level.add(reverseStack.pop());
                }
            }

            zigzag.add(level); // Add the current level to the result
            flag = !flag; // Toggle flag for the next level
        }

        return zigzag; // Return the zigzag traversal result
    }
}


*/
}
