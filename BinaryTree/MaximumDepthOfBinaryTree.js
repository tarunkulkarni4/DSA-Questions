{
  /*
  This can be done by two approches(Time and space complexiet is same O(n) )
  
   1.recursive 
      
   class Solution {
    //Function to find the height of a binary tree.
    int height(Node node) 
    {
        // code here 
        if(node==null)
        {
            return 0;
        }
        int left=height(node.left);
        int right=height(node.right);
        
        return Math.max(left,right)+1;
    }
}
 

    2.Using level ordering using Queue

      class Solution {
    public int maxDepth(TreeNode root) {
        // If the tree is empty, its depth is 0
        if (root == null) {
            return 0;
        }

        // Initialize a queue to store nodes for level-order traversal
        Queue<TreeNode> queue = new LinkedList<>();
        // Add the root node to start processing
        queue.add(root);
        // Variable to keep track of the number of levels (tree depth)
        int levels = 0;

        // Loop until the queue is empty (all nodes have been processed)
        while (!queue.isEmpty()) {
            // Count the number of nodes at the current level
            int countNode = queue.size();

            // This condition is redundant since the while loop ensures the queue isn't empty.
            // It can be safely removed without affecting the logic.
            if (countNode == 0) {
                return levels;
            }

            // Process all nodes at the current level
            while (countNode > 0) {
                // Remove a node from the queue for processing
                TreeNode element = queue.poll();

                // If the current node has a left child, add it to the queue for the next level
                if (element.left != null) {
                    queue.add(element.left);
                }

                // If the current node has a right child, add it to the queue for the next level
                if (element.right != null) {
                    queue.add(element.right);
                }

                // Decrement the count of nodes left to process at this level
                countNode--;
            }

            // Increment the depth (level count) after processing all nodes at the current level
            levels++;
        }

        // Return the total number of levels
        return levels++;
    }
}
 

    
    
    
*/
}
