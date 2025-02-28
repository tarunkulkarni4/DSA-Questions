{/*
    Find Minimum in Rotated Sorted Array II

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.

 

Example 1:

Input: nums = [1,3,5]
Output: 1
Example 2:

Input: nums = [2,2,2,0,1]
Output: 0
 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
nums is sorted and rotated between 1 and n times.

Solution:

class Solution {
    public int findMin(int[] nums) {
        int min = nums[0];
        // Traverse the array to find the minimum
        for (int num : nums) {
            if (num < min) {
                min = num;
            }
        }
        return min;
    }
}




using Binary Search:

class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] < nums[right]) {
                // Minimum is in the left part (including mid)
                right = mid;
            } else if (nums[mid] > nums[right]) {
                // Minimum is in the right part (excluding mid)
                left = mid + 1;
            } else {
                // nums[mid] == nums[right], can't be sure, so reduce search space
                right--;
            }
        }
        
        // left == right, which is the index of the minimum element
        return nums[left];
    }
}

*/}