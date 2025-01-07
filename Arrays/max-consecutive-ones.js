{/*
    Max Consecutive Ones
Solved
Easy
Topics
Companies
Hint
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

    class Solution {
    // Method to find the maximum number of consecutive 1s in the given binary array
    public int findMaxConsecutiveOnes(int[] nums) {
        int count = 0;  // This will track the current streak of consecutive 1s
        int max = 0;    // This will store the maximum streak of consecutive 1s found so far

        // Loop through the entire array
        for (int i = 0; i < nums.length; i++) {
            // If the current element is 1, increment the count
            if (nums[i] == 1) {
                count++;  // Increment the count for consecutive 1s
                max = Math.max(max, count);  // Update max if the current streak is larger than the previous max
            } else {
                // If the current element is 0, reset the count
                count = 0;  // Reset count when a 0 is encountered, as the streak of 1s is broken
            }
        }

        // Return the maximum consecutive 1s found
        return max;
    }
}

*/}