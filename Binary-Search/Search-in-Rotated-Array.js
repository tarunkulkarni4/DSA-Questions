{
  /*
    
     Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


Solution: using once binary search technique  so tc is o(log n) ,0(1)

class Solution {
    public int search(int[] nums, int target) {
        // Initialize the low pointer to the start of the array
        int low = 0;
        // Initialize the high pointer to the end of the array
        int high = nums.length - 1;

        // Continue searching while low pointer is less than or equal to the high pointer
        while (low <= high) {
            // Calculate the middle index of the current search range
            int mid = (low + high) / 2;

            // If the middle element is the target, return the mid index
            if (nums[mid] == target) {
                return mid;
            }

            // If the left portion of the array is sorted
            if (nums[low] <= nums[mid]) {
                // Check if the target is within the left sorted portion
                if (nums[low] <= target && target < nums[mid]) {
                    // If target is in the left portion, narrow the search to the left side
                    high = mid - 1;
                } else {
                    // Otherwise, narrow the search to the right side
                    low = mid + 1;
                }
            }
            // If the right portion of the array is sorted
            else {
                // Check if the target is within the right sorted portion
                if (nums[mid] < target && target <= nums[high]) {
                    // If target is in the right portion, narrow the search to the right side
                    low = mid + 1;
                } else {
                    // Otherwise, narrow the search to the left side
                    high = mid - 1;
                }
            }
        }
        
        // If target is not found, return -1
        return -1;
    }
}



                          OR


                          public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public int search(final List<Integer> A, int B) {
        int l = 0;
        int r = A.size() - 1;

        while (l <= r) {
            int mid = (l + r) / 2;

            // Check if mid is the target
            if (A.get(mid) == B) {
                return mid;
            }

            // Check if the left part is sorted
            if (A.get(l) <= A.get(mid)) {
                // Key lies in the left sorted part
                if (A.get(l) <= B && B < A.get(mid)) {
                    r = mid - 1;
                } else {
                    l = mid + 1; // Key is in the right part
                }
            }
            // Otherwise, the right part is sorted
            else {
                // Key lies in the right sorted part
                if (A.get(mid) < B && B <= A.get(r)) {
                    l = mid + 1;
                } else {
                    r = mid - 1; // Key is in the left part
                }
            }
        }

        return -1; // Key not found
    }
}


 
    
    */
}
