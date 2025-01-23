{/*
Problem Statement:

Next Permutation
Solved
Medium
Topics
Companies
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]


    Solution:

Brute Force:
  1.GENERATE ALL POSSIBLE SORTED PERMUTATIONS
  2.DO LINEAR SEARCH
  3.JUTS INCREMENT NEXT INDEX



                 OR

optimized:
using inplace 
so tc,sc is o(n) and o(1)

    public class Solution {
    public static void nextPermutation(int[] nums) {
        int n = nums.length; // Length of the array.

        // Step 1: Find the first decreasing element from the end.
        int ind = -1; // Initialize the break point as -1.
        for (int i = n - 2; i >= 0; i--) { // Traverse from the second last element to the start.
            if (nums[i] < nums[i + 1]) { // Find where nums[i] is smaller than nums[i+1].
                ind = i; // Store the index of the break point.
                break; // Exit the loop once the break point is found.
            }
        }

        // Step 2: If no break point exists, reverse the whole array to get the smallest permutation.
        if (ind == -1) {
            // Reverse the entire array to get the smallest permutation.
            for (int i = 0, j = n - 1; i < j; i++, j--) {
                // Swap nums[i] and nums[j].
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            return; // Exit the function as the array is now the smallest permutation.
        }

        // Step 3: Find the next larger element to the right of the break point and swap it with nums[ind].
        for (int i = n - 1; i > ind; i--) { // Start from the end of the array and move left.
            if (nums[i] > nums[ind]) { // Find the first element greater than nums[ind].
                // Swap nums[i] and nums[ind].
                int temp = nums[i];
                nums[i] = nums[ind];
                nums[ind] = temp;
                break; // Exit the loop after swapping.
            }
        }

        // Step 4: Reverse the portion of the array to the right of the break point to get the smallest order.
        for (int i = ind + 1, j = n - 1; i < j; i++, j--) {
            // Swap nums[i] and nums[j].
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}
*/}