{/*
    
 1.using array
class Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        // Create a map to store the index of each value in the inorder array
        Map<Integer, Integer> inOrderMap = new HashMap<>();
        
        // Fill the map with inorder values and their corresponding indices
        for (int i = 0; i < inorder.length; i++) {
            inOrderMap.put(inorder[i], i);
        }

        // Initialize an array to keep track of the current root index in postorder (starting from the last element)
        int[] rootIndex = {postorder.length - 1};

        // Call the helper function to start building the tree
        return splitTree(postorder, inOrderMap, rootIndex, 0, inorder.length - 1);
    }

    private TreeNode splitTree(int[] postorder, Map<Integer, Integer> inOrderMap, int[] rootIndex, int left, int right) {
        // Base case: if left > right, return null (no elements left to process)
        if (left > right) {
            return null;
        }

        // Get the root value from the current index in postorder array
        int rootValue = postorder[rootIndex[0]];

        // Create a new tree node for the root value
        TreeNode newTree = new TreeNode(rootValue);

        // Find the index of the root value in the inorder array using the map
        int inOrderIndex = inOrderMap.get(rootValue);

        // Move to the next root in postorder (decrement the index)
        rootIndex[0]--;

        // Recursively build the right subtree first (because postorder visits right subtree before left subtree)
        newTree.right = splitTree(postorder, inOrderMap, rootIndex, inOrderIndex + 1, right);

        // Recursively build the left subtree
        newTree.left = splitTree(postorder, inOrderMap, rootIndex, left, inOrderIndex - 1);

        // Return the newly created node
        return newTree;
    }
}
 

2.using ARray list




public class Solution {
	public TreeNode buildTree(ArrayList<Integer> inorder, ArrayList<Integer> postorder) {
	    
	    if (inorder == null || postorder == null || inorder.size() == 0 || inorder.size() != postorder.size())
	        return null;
	    
	    TreeNode root;
	    int n = inorder.size();
	    
	    root = rec(inorder, postorder, 0, n - 1, n - 1);
	    
	    return root;
	    
	}
	
	
	public TreeNode rec(ArrayList<Integer> inorder, ArrayList<Integer> postorder, int start, int end, int postIndex) {
	    
	    if (start > end)
	        return null;
	    
	    TreeNode node;
	    int nodeVal = postorder.get(postIndex);
	    node = new TreeNode(nodeVal);
	    int i;
	    
	    for (i = start; i <= end; i++) {
	        if (inorder.get(i) == nodeVal)
	            break;
	    }
	    
	    node.left = rec(inorder, postorder, start, i - 1, postIndex - (end - i + 1));
	    node.right = rec(inorder, postorder, i + 1, end, postIndex - 1);
	    
	    return node;
	}
	
}

    
    
*/}