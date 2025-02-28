{/*
  
     Find Elements in a Contaminated Binary Tree

Given a binary tree with the following rules:

root.val == 0
For any treeNode:
If treeNode.val has a value x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val has a value x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

Implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
bool find(int target) Returns true if the target value exists in the recovered binary tree.
 

Example 1:


Input
["FindElements","find","find"]
[[[-1,null,-1]],[1],[2]]
Output
[null,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1]); 
findElements.find(1); // return False 
findElements.find(2); // return True 
Example 2:


Input
["FindElements","find","find","find"]
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
Output
[null,true,true,false]
Explanation
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False
Example 3:


Input
["FindElements","find","find","find","find"]
[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
Output
[null,true,false,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
findElements.find(2); // return True
findElements.find(3); // return False
findElements.find(4); // return False
findElements.find(5); // return True
    
using queue:

import java.util.*;

class FindElements {
    HashSet<Integer> set; // Stores all recovered values

    public FindElements(TreeNode root) {
        set = new HashSet<>();
        recoverTree(root);
    }

    private void recoverTree(TreeNode root) {
        if (root == null) return;

        Queue<TreeNode> queue = new LinkedList<>();
        root.val = 0;
        queue.offer(root);
        set.add(0);

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            int value = node.val;

            if (node.left != null) {
                node.left.val = 2 * value + 1;
                set.add(node.left.val);
                queue.offer(node.left);
            }

            if (node.right != null) {
                node.right.val = 2 * value + 2;
                set.add(node.right.val);
                queue.offer(node.right);
            }
        }
    }

    public boolean find(int target) {
        return set.contains(target);
    }
}


recursion:

import java.util.HashSet;

class FindElements {
    HashSet<Integer> set; // Stores all recovered values

    public FindElements(TreeNode root) {
        set = new HashSet<>();
        recoverTree(root, 0);
    }
    
    public boolean find(int target) {
        return set.contains(target);
    }

    private void recoverTree(TreeNode root, int value) {
        if (root == null) return;
        set.add(value);
        root.val = value;
        recoverTree(root.left, 2 * value + 1);
        recoverTree(root.right, 2 * value + 2);
    }
}
*/}