{/*
  Partition Array According to Given Pivot

You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

Every element less than pivot appears before every element greater than pivot.
Every element equal to pivot appears in between the elements less than and greater than pivot.
The relative order of the elements less than pivot and the elements greater than pivot is maintained.
More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
Return nums after the rearrangement.

 

Example 1:

Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
Example 2:

Input: nums = [-3,4,3,2], pivot = 2
Output: [-3,2,4,3]
Explanation: 
The element -3 is less than the pivot so it is on the left side of the array.
The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.  


Using three arrays:

class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        List<Integer>left=new ArrayList<>();
        List<Integer>middle=new ArrayList<>();
        List<Integer>right=new ArrayList<>();

        for (int num : nums) {
            if (num < pivot) {
                left.add(num);  // ✅ Corrected
            } else if (num == pivot) {
                middle.add(num);
            } else {
                right.add(num);
            }
        }


        int index=0;
        for(int num:left)
        {
            nums[index]=num;
            index++;
        }
        for(int num:middle)
        {
            nums[index]=num;
            index++;
        }
        for(int num:right)
        {
            nums[index]=num;
            index++;
        }
        return nums;
    }
}


using two pointers:

import java.util.Arrays;

class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int n = nums.length;
        int[] result = new int[n];
        int left = 0, right = n - 1;
        
        // First pass: Place elements < pivot at the start
        for (int num : nums) {
            if (num < pivot) {
                result[left++] = num;
            }
        }

        // Second pass: Place elements == pivot
        for (int num : nums) {
            if (num == pivot) {
                result[left++] = num;
            }
        }

        // Third pass: Place elements > pivot
        for (int num : nums) {
            if (num > pivot) {
                result[left++] = num;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {9, 12, 5, 10, 14, 3, 10};
        int pivot = 10;
        System.out.println(Arrays.toString(sol.pivotArray(nums, pivot)));
    }
}

*/}