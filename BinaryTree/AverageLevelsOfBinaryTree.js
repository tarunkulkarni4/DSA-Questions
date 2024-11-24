{/*
    
class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> result = new ArrayList<>();
        if (root == null) {
            return result;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size(); // Number of nodes at the current level
            double sum = 0;

            for (int i = 0; i < levelSize; i++) {
                TreeNode current = queue.poll(); // Get the front node in the queue
                sum += current.val;

                // Add the child nodes of the current node to the queue
                if (current.left != null) {
                    queue.add(current.left);
                }
                if (current.right != null) {
                    queue.add(current.right);
                }
            }

            // Calculate the average for the current level and add it to the result list
            result.add(sum / levelSize);
        }

        return result;
    }
}

    
*/}