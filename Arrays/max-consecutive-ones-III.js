{/*

Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

    time ,space is o(n) and o(1)


 class Solution {
    public int longestOnes(int[] nums, int k) {
        int start = 0;  // This is the starting index of the sliding window
        int maxones = 0; // This will store the maximum length of consecutive 1s (with at most k flips)
        int zerocount = 0; // This will count the number of 0's in the current window

        // Traverse through the array with the 'end' pointer
        for (int end = 0; end < nums.length; end++) {
            // If we encounter a 0, increase the zerocount
            if (nums[end] == 0) {
                zerocount++;
            }

            // If zerocount exceeds k, move the start pointer to shrink the window
            while (zerocount > k) {
                // If the element at 'start' is 0, decrement zerocount as we are removing this zero
                if (nums[start] == 0) {
                    zerocount--;
                }
                // Move the 'start' pointer to the right to shrink the window
                start++;
            }

            // Update maxones with the largest window size that contains at most k zeros
            maxones = Math.max(maxones, end - start + 1);
        }

        // Return the maximum length of consecutive 1s (with at most k flips)
        return maxones;
    }
}
   

Brute force appraoch

time,space is o(n2),o(1)

class Solution {
    public int longestOnes(int[] nums, int k) {
        int maxLength = 0;  // To store the maximum length of the subarray with at most k flips

        // Iterate over all possible subarrays
        for (int start = 0; start < nums.length; start++) {
            int zeroCount = 0;  // To count the number of 0's in the current subarray

            for (int end = start; end < nums.length; end++) {
                // If the current element is 0, increment zeroCount
                if (nums[end] == 0) {
                    zeroCount++;
                }

                // If the number of 0's in the current subarray exceeds k, break the loop
                if (zeroCount > k) {
                    break;
                }

                // Otherwise, calculate the length of the current subarray
                maxLength = Math.max(maxLength, end - start + 1);
            }
        }

        return maxLength;  // Return the maximum length found
    }
}

*/}