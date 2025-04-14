{/*
    You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

    class Solution {
    public int jump(int[] nums) {

        // Step 1: Initialize variables
        int jumps = 0;               // To count the number of jumps made
        int coverage = 0;            // The farthest index we can currently reach
        int lastIndex = 0;           // The end of the range for the current jump
        int destination = nums.length - 1;  // The target index (last index)

        // Step 2: Handle edge case - only one element means no jump needed
        if (nums.length == 1) {
            return 0;
        }

        // Step 3: Iterate through the array
        for (int i = 0; i < nums.length; i++) {

            // Step 4: Update the farthest index we can reach from current index
            coverage = Math.max(coverage, i + nums[i]);

            // Step 5: If we reach the end of the current jump range
            if (i == lastIndex) {
                // Step 6: Make a jump and update the lastIndex
                lastIndex = coverage;
                jumps++;

                // Step 7: If coverage has reached or passed destination, return result
                if (coverage >= destination) {
                    return jumps;
                }


*/}