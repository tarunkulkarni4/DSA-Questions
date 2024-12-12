{/*
    . Find-First-and-Last-Position-of-Element-in-Sorted-Array
Solved
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
  
solution:brute force  time,space is o(n),o(1)

class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = -1; // Initialize first occurrence
        int last = -1;  // Initialize last occurrence

        // Loop through the array
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) { // When the target is found
                if (first == -1) {  // If this is the first occurrence
                    first = i;      // Set first index
                }
                last = i;           // Update last index
            }
        }

        return new int[]{first, last}; // Return the result
    }
}


                  OR

 
Solution: using binary search   time is o(logn)

class Solution {
    public int[] searchRange(int[] nums, int target) {
        int left = leftBound(nums, target); // Find the left bound
        int right = rightBound(nums, target); // Find the right bound

        return new int[]{left, right}; // Return the result as an array
    }

    private int leftBound(int[] nums, int target) {
        int index = -1;
        int low = 0;
        int high = nums.length - 1; // Fix: high should be nums.length - 1

        while (low <= high) {
            int mid = low + (high - low) / 2; // Avoid overflow
            if (nums[mid] == target) {
                index = mid; // Update index
                high = mid - 1; // Narrow search to the left half
            } else if (nums[mid] < target) {
                low = mid + 1; // Narrow search to the right half
            } else {
                high = mid - 1; // Narrow search to the left half
            }
        }

        return index;
    }

    private int rightBound(int[] nums, int target) {
        int index = -1;
        int low = 0;
        int high = nums.length - 1; // Fix: high should be nums.length - 1

        while (low <= high) {
            int mid = low + (high - low) / 2; // Avoid overflow
            if (nums[mid] == target) {
                index = mid; // Update index
                low = mid + 1; // Narrow search to the right half
            } else if (nums[mid] < target) {
                low = mid + 1; // Narrow search to the right half
            } else {
                high = mid - 1; // Narrow search to the left half
            }
        }

        return index;
    }
}

    
*/}