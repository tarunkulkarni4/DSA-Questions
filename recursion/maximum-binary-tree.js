{/*
    Maximum Binary Tree

You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.

 

Example 1:


Input: nums = [3,2,1,6,0,5]
Output: [6,3,5,null,2,0,null,null,1]
Explanation: The recursive calls are as follow:
- The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
    - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
        - Empty array, so no child.
        - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
            - Empty array, so no child.
            - Only one element, so child is a node with value 1.
    - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
        - Only one element, so child is a node with value 0.
        - Empty array, so no child.
Example 2:


Input: nums = [3,2,1]
Output: [3,null,2,null,1]
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000
All integers in nums are unique.
    

solution:

Time Complexity: O(n²) (in the worst case).
Space Complexity: O(n).

class Solution {
    // Function to construct the Maximum Binary Tree from the given array
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        // If the input array is null or empty, return null
        if (nums == null || nums.length == 0) {
            return null;
        }
        // Call the helper function to construct the tree and return the root
        return buildtree(nums, 0, nums.length - 1);
    }

    // Helper function to build the Maximum Binary Tree recursively
    private TreeNode buildtree(int[] nums, int start, int end) {
        // Base case: If the start index exceeds the end index, return null
        if (start > end) {
            return null;
        }

        // Initialize the index of the maximum value as the start index
        int idx = start;
        // Iterate through the range to find the index of the maximum element
        for (int i = start + 1; i <= end; i++) {
            // Update the index if a larger value is found
            if (nums[i] > nums[idx]) {
                idx = i;
            }
        }

        // Create a new tree node with the maximum value as its value
        TreeNode root = new TreeNode(nums[idx]);

        // Recursively build the left subtree using the range before the maximum index
        root.left = buildtree(nums, start, idx - 1);
        // Recursively build the right subtree using the range after the maximum index
        root.right = buildtree(nums, idx + 1, end);

        // Return the root node of the current subtree
        return root;
    }
}

*/}