{
  /*
  time complxiety is O(n) and space is 0(1);
1.using recursive 

public class Solution {
    public int minDepth(TreeNode A) {
        if (A == null) {
            return 0;
        }

        // If the node is a leaf node, return 1
        if (A.left == null && A.right == null) {
            return 1;
        }

        // If one of the children is null, calculate depth of the other child
        if (A.left == null) {
            return 1 + minDepth(A.right);
        }
        if (A.right == null) {
            return 1 + minDepth(A.left);
        }

        // If both children are non-null, calculate the minimum of the two depths
        return 1 + Math.min(minDepth(A.left), minDepth(A.right));
    }
}


                        OR

                        
2.using level ordering


class Solution
{
	int minDepth(Node root){
	    if(root == null) {
	        return 0;
	    }
	    
	    // build queue
	    Queue<Node>queue=new LinkedList<>();
	    // add root element to queue
	    queue.add(root);
	    // levele
	    int level=1;
	    
	    // check if queue is not empty then only we add elements ryt?
	    while(!queue.isEmpty())
	    {
	        // take count for to get size of current node
	        int count=queue.size();
	        // traverse through nodes
	        for(int i=0;i<count;i++)
	        { 
	            // get the elements 
	            Node element=queue.poll();
	            // if both right and keft have no nodes then return level
	            if(element.left==null && element.right==null)
	            {
	                return level;
	            }
	            // if contains any element

	            if(element.left!=null)
	            {
	                queue.add(element.left);
	            }
	            if(element.right!=null)
	            {
	                queue.add(element.right);
	            }
	        }
	        level++;
	    }
	   return level;
	}
}


*/
}
