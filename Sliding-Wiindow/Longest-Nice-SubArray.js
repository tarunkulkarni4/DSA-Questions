{/*
    Longest Nice Subarray

You are given an array nums consisting of positive integers.

We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

Return the length of the longest nice subarray.

A subarray is a contiguous part of an array.

Note that subarrays of length 1 are always considered nice.

 

Example 1:

Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.
Example 2:

Input: nums = [3,1,5,11,13]
Output: 1
Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.
 
BruteForce:

We check every possible subarray.
If all elements in a subarray have no common set bits (& operation is 0), update the max length.

class Solution {
    public int longestNiceSubarray(int[] nums) {
        int n = nums.length;
        int maxLength = 0;

        // Try all subarrays
        for (int i = 0; i < n; i++) {
            int bitwiseAnd = 0; // Track AND of the subarray
            for (int j = i; j < n; j++) {
                if ((bitwiseAnd & nums[j]) == 0) { // If no common set bits
                    bitwiseAnd |= nums[j]; // Add nums[j] to the set
                    maxLength = Math.max(maxLength, j - i + 1);
                } else {
                    break; // Stop if a conflict is found
                }
            }
        }
        return maxLength;
    }
}

Using sliding window:

We maintain a window that is a "nice subarray".
If adding nums[right] makes the window not nice (AND ≠ 0), shrink the window.
Use Bitwise OR (|) to extend the window and Bitwise XOR (^) to shrink it.

class Solution {
    public int longestNiceSubarray(int[] nums) {
        int left = 0, maxLength = 0;
        int currentAnd = 0; // Stores bitwise OR of all elements in the window

        for (int right = 0; right < nums.length; right++) {
            // If adding nums[right] causes conflict, remove elements from the left
            while ((currentAnd & nums[right]) != 0) { 
                currentAnd ^= nums[left]; // Remove nums[left] (XOR removes its bits)
                left++; // Shrink the window
            }

            // Now, we can safely add nums[right] to the window
            currentAnd |= nums[right];

            // Update max length of the nice subarray
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}


*/}