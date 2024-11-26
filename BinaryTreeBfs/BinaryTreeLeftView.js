{/*
    
    1.using level order traversing 

 class Solution {
    // Function to return list containing elements of left view of binary tree.
    ArrayList<Integer> leftView(Node root) {
        // Resultant list to store the left view elements
        ArrayList<Integer> result = new ArrayList<>();
        
        if (root == null) {
            return result;
        }
        
        // Queue for level order traversal
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                // Get the current node from the queue
                Node nodes = queue.poll();
                
                // Add the first element of each level to the result
                if (i == 0) {
                    result.add(nodes.val);
                }
                
                // Add left and right children of the current node to the queue
                if (nodes.left != null) {
                    queue.add(nodes.left);
                }
                if (nodes.right != null) {
                    queue.add(nodes.right);
                }
            }
        }
        return result;
    }
}
     
*/}