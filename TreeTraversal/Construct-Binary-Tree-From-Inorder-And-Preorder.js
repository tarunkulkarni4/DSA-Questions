{
  /*

    1.for Array list we have to use get methods

public class Solution {
    public TreeNode buildTree(ArrayList<Integer> A, ArrayList<Integer> B) {
        Map<Integer,Integer>inOrderMap=new HashMap<>();
        
        for(int i=0;i<B.size();i++)
        {
            inOrderMap.put(B.get(i),i);
        }
        
        int[] rootIndex={0};
        
        return splitTree(A,inOrderMap,rootIndex,0,B.size()-1);
        
    }
    private TreeNode splitTree(ArrayList<Integer> A, Map<Integer,Integer>inOrderMap,int [] rootIndex,int left,int right)
    {
        if(left>right)
        {
            return null;
        }
        
        //get root value
        int rootValue=A.get(rootIndex[0]);
        ///now we got rootvalue now create a new tree
        TreeNode newNode=new TreeNode(rootValue);
        
        //try to get rootvalue in inOrder
        int inOrderIndex=inOrderMap.get(rootValue);
        
        rootIndex[0]++;
        
        // create left and right sub tree
        newNode.left=splitTree(A,inOrderMap,rootIndex,left,inOrderIndex-1);
        newNode.right=splitTree(A,inOrderMap,rootIndex,inOrderIndex+1,right);
            return newNode;
    }

}

            OR
    
    2.using array

class Solution {
    public static Node buildTree(int inorder[], int preorder[]) {
        // Step 1: Build a map to find the index of any element in inorder
        Map<Integer, Integer> inOrderMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            inOrderMap.put(inorder[i], i);
        }

        // Step 2: Initialize the root index for preorder traversal
        int[] rootIndex = {0};

        // Step 3: Start building the tree
        return splitTree(preorder, inOrderMap, rootIndex, 0, inorder.length - 1);
    }

    private static Node splitTree(int preorder[], Map<Integer, Integer> inOrderMap, int[] rootIndex, int left, int right) {
        // Base case: If there is no subtree to construct
        if (left > right) {
            return null;
        }

        // Step 1: Get the root value from preorder
        int rootValue = preorder[rootIndex[0]];
        Node newNode = new Node(rootValue);

        // Step 2: Find the root value in inorder
        int inorderIndex = inOrderMap.get(rootValue);

        // Step 3: Move to the next root in preorder
        rootIndex[0]++;

        // Step 4: Recursively build the left and right subtrees
        newNode.left = splitTree(preorder, inOrderMap, rootIndex, left, inorderIndex - 1);
        newNode.right = splitTree(preorder, inOrderMap, rootIndex, inorderIndex + 1, right);

        return newNode;
    }
}
*/
}
