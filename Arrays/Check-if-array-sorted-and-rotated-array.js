{/*
    
Check if Array Is Sorted and Rotated

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

Soution:

class Solution {
    public boolean check(int[] nums) {
        int n = nums.length;  // Get the length of the array
        int count = 0;  // Initialize the count of order breaks

        // Loop through the array
        for(int i = 0; i < n; i++) {
            // Check if the current element is greater than the next one (circularly)
            if(nums[i] > nums[(i + 1) % n]) {
                count++;  // If yes, increment the count of breaks
            }
        }

        // If there is 0 or 1 break, it means the array is sorted and rotated, return true
        // If there are more than 1 break, return false as it's not a rotated sorted array
        return count <= 1;
    }
}


*/}