{/*

    Equilibrium Point   or find pivot index or find middle index in array

Given an array of integers arr[], the task is to find the first equilibrium point in the array.

The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists. 

Examples:

Input: arr[] = [1, 2, 0, 3]
Output: 2 
Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 0 + 3 = 3.
Input: arr[] = [1, 1, 1, 1]
Output: -1
Explanation: There is no equilibrium index in the array.
Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
Output: 3
Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1.


Solution:

time comlexiety is O(n),
space complexiety is O(1)

class Solution {
    // Function to find equilibrium point in the array.
    public static int findEquilibrium(int arr[]) {
        // Get the length of the array
        int n = arr.length;
        
        // Step 1: Calculate the total sum of the array
        int totalSum = 0;
        for (int i = 0; i < n; i++) {
            totalSum += arr[i];
        }
        
        // Step 2: Initialize left sum to 0
        int leftSum = 0;
        
        // Step 3: Iterate through the array to find the equilibrium point
        for (int i = 0; i < n; i++) {
            // Subtract the current element from totalSum to get the right sum
            totalSum -= arr[i];
            
            // Step 4: Check if left sum equals the right sum (totalSum is now right sum)
            if (leftSum == totalSum) {
                return i ; // Return 1-based index
            }
            
            // Update left sum by adding the current element
            leftSum += arr[i];
        }
        
        // Step 5: If no equilibrium point is found, return -1
        return -1;
    }
}

                OR


    public class Solution {
    public int pivotIndex(int[] nums) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        int leftSum = 0;
        for (int i = 0; i < nums.length; i++) {
            int rightSum=totalSum - leftSum - nums[i];
            // Check if left sum equals right sum at index i
            if (leftSum == rightSum) {
                return i;
            }
            leftSum += nums[i];
        }

        return -1; // Return -1 if no pivot index is found
    }
}


*/}