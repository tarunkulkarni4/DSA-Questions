{
  /*
    Search Insert Position
Solved
Easy
Topics
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


solution: o(log n)
   

class Solution {
    public int searchInsert(int[] nums, int target) {
        // Initialize two pointers: left and right
        int left = 0; // The start of the array
        int right = nums.length - 1; // The end of the array

        // Start the binary search loop
        while (left <= right) {
            // Calculate the mid index to divide the search space
            int mid = (left + right) / 2;

            // Check if the target is found at mid index
            if (nums[mid] == target) {
                return mid; // Return the index where the target is found
            } 
            // If the target is greater than the value at mid, search the right half
            else if (nums[mid] < target) {
                left = mid + 1; // Move the left pointer to mid + 1
            } 
            // If the target is smaller than the value at mid, search the left half
            else {
                right = mid - 1; // Move the right pointer to mid - 1
            }
        }

        // If the target is not found, left will be the position where the target can be inserted
        return left;
    }
}


    
*/
}
