{/*
  Question:
  . Longest Strictly Increasing or Strictly Decreasing Subarray

You are given an array of integers nums. Return the length of the longest 
subarray
 of nums which is either 
strictly increasing
 or 
strictly decreasing
.

 

Example 1:

Input: nums = [1,4,3,3,2]

Output: 2

Explanation:

The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].

The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].

Hence, we return 2.

Example 2:

Input: nums = [3,3,3,3]

Output: 1

Explanation:

The strictly increasing subarrays of nums are [3], [3], [3], and [3].

The strictly decreasing subarrays of nums are [3], [3], [3], and [3].

Hence, we return 1.

Example 3:

Input: nums = [3,2,1]

Output: 3

Explanation:

The strictly increasing subarrays of nums are [3], [2], and [1].

The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

Hence, we return 3.

 Solution:

  class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        // Initialize maxLength to store the maximum length of a monotonic subarray
        int maxLength = 1;
        
        // incLength tracks the length of the increasing subarray
        int incLength = 1;
        
        // decLength tracks the length of the decreasing subarray
        int decLength = 1;

        // Loop starts from index 1 to check the difference with the previous element
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) { // If the current element is greater than the previous one (Increasing sequence)
                incLength++; // Increase the length of increasing subarray
                decLength = 1; // Reset the decreasing subarray length
            } 
            else if (nums[i] < nums[i - 1]) { // If the current element is smaller than the previous one (Decreasing sequence)
                decLength++; // Increase the length of decreasing subarray
                incLength = 1; // Reset the increasing subarray length
            } 
            else { // If both elements are equal, reset both counts
                incLength = 1;
                decLength = 1;
            }

            // Update maxLength to keep track of the longest monotonic subarray found so far
            maxLength = Math.max(maxLength, Math.max(incLength, decLength));
        }

        // Return the maximum length found
        return maxLength;
    }
}

*/}