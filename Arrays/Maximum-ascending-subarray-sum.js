{/*
    Maximum Ascending Subarray Sum

Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.

 

Example 1:

Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
Example 2:

Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
Example 3:

Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.


class Solution {
    public int maxAscendingSum(int[] nums) {
        if (nums.length == 0) {
            return 0;  // Edge case for an empty array
        }
        
        int res = nums[0];  // Start with the first element
        int temp = nums[0];  // Temporary sum for the current ascending subarray
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                temp += nums[i];  // Add the current number to the ascending subarray
            } else {
                temp = nums[i];   // Reset the sum if the sequence is no longer ascending
            }
            res = Math.max(res, temp);  // Update the result with the maximum sum found
        }
        
        return res;
    }
}

    */}