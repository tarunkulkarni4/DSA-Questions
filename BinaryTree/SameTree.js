{/*
    1.Recursive (time complxiety is o(n) and space is o(h))
  
 
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Base case: both nodes are null
        if (p == null && q == null) {
            return true;
        }
        
        // If one is null or their values differ
        if (p == null || q == null || p.val != q.val) {
            return false;
        }
        
        // Recursively check left and right subtrees
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
  
                      OR
  
    2.Using level order(time complxiety is o(n) and space is o(1))
     
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Initialize a queue to hold nodes from both trees
        Queue<TreeNode> queue = new LinkedList<>();
        
        // Add the roots of both trees to the queue
        queue.add(p);
        queue.add(q);

        // Process the queue until it's empty
        while (!queue.isEmpty()) {
            // Retrieve and remove the next two nodes from the queue
            TreeNode pqueue = queue.poll();
            TreeNode qqueue = queue.poll();
            
            // If both nodes are null, continue to the next pair
            if (pqueue == null && qqueue == null) {
                continue;
            }
            
            // If one node is null or their values are not equal, trees are not identical
            if (pqueue == null || qqueue == null || pqueue.val != qqueue.val) {
                return false;
            }
            
            // Add the left children of both nodes to the queue
            queue.add(pqueue.left);
            queue.add(qqueue.left);
            
            // Add the right children of both nodes to the queue
            queue.add(pqueue.right);
            queue.add(qqueue.right);
        }
        
        // If all nodes were processed without mismatches, the trees are identical
        return true;
    }
}


    */}