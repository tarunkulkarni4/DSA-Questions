{
  /*
   
    Maximum Subarray

Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
   

solution:

class Solution {
    public int maxSubArray(int[] nums) {
        // Initialize variables
        // maxSum: Stores the maximum sum of a subarray found so far
        // currentsum: Tracks the sum of the current subarray
        int maxSum = nums[0];
        int currentsum = nums[0];

        // Iterate through the array starting from the second element
        for (int i = 1; i < nums.length; i++) {
            // Update currentsum:
            // Choose the maximum between starting a new subarray with nums[i]
            // or extending the current subarray to include nums[i]
            currentsum = Math.max(nums[i], nums[i] + currentsum);

            // Update maxSum to keep track of the maximum subarray sum so far
            maxSum = Math.max(currentsum, maxSum);
        }

        // Return the maximum subarray sum
        return maxSum;
    }
}


Time Complexity (TC): O(n)
- The algorithm processes each element of the array exactly once in a single loop.

Space Complexity (SC): O(1)
- The algorithm uses a constant amount of space, as only a few variables are used (maxSum, currentsum).

Example:
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.


                    OR

brute force approach:

class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE; // Initialize with the smallest possible value

        // Outer loop for the starting point of the subarray
        for (int i = 0; i < nums.length; i++) {
            int currentSum = 0; // To store the sum of the current subarray

            // Inner loop for the ending point of the subarray
            for (int j = i; j < nums.length; j++) {
                currentSum += nums[j]; // Add the current element to the sum

                // Update maxSum if the current subarray sum is greater
                maxSum = Math.max(maxSum, currentSum);
            }
        }

        return maxSum; // Return the maximum sum found
    }
}


Time Complexity (TC): O(n^2)
- The outer loop runs n times, and the inner loop runs approximately n/2 times on average.
- Total: O(n^2).

Space Complexity (SC): O(1)
- The algorithm uses a constant amount of space, regardless of the input size.

Example:
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.




*/
}
