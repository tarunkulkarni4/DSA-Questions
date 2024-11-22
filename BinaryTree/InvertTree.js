{
  /*
   
    
    1.recurisve solution //time complexity is  O(n) and O(logn)


class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root==null)
        {
            return null;
        }
        TreeNode left =invertTree(root.left);
        TreeNode right=invertTree(root.right);

        root.left=right;
        root.right=left;

        return root;
        
    }
}

   2.Using level order //time complexity is  O(n) and 0(1)
     
    class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root==null)
        {
            return root;
        }
       // build queue
       Queue<TreeNode>queue=new LinkedList<>();
       queue.add(root);
       
       while(!queue.isEmpty())
       {
        TreeNode element=queue.poll();
        //swap the node values
         TreeNode temp=element.left;
        element.left=element.right;
        element.right=temp;

        if(element.left!=null)
        {
            queue.add(element.left);
        }
        if(element.right!=null)
        {
            queue.add(element.right);
        }

       }
        return root;
    }
}
    
*/
}
