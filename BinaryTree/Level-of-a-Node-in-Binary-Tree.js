{
  /*
    Problem statement:
You are given a binary tree and a target value. You need to find the level of the node which contains the target value. 
The level of the root node is considered as 1. The level increases by 1 as you go down to the child nodes. If the node is not found, return -1.
      
  Input:

Root: [1, 2, 3]
Target: 2
Tree Structure:

markdown
Copy code
      1
     / \
    2   3
Output:

Copy code
2
Explanation: The target value 2 is found at level 2 of the tree.


   

Solution:
  
   class Solution
{
    
    int getLevel(Node node, int data)  
    { 
        // Write your code here
        if(node==null)
        {
            return -1;
            
        }
        Queue<Node>queue=new LinkedList<>();
        queue.add(node);
        int level=1;
        
        while(!queue.isEmpty())
        {
            int size=queue.size();
            for(int i=0;i<size;i++)
            {
                Node nodes=queue.poll();
                if(nodes.data==data){
                    return level;
                }
                if(nodes.left!=null)
                {
                    queue.add(nodes.left);
                }
                if(nodes.right!=null)
                {
                    queue.add(nodes.right);
                }
            }
            level++;
        }
        return 0;    } 

}
    
*/
}
