{/*
    

Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Solution:
1.using sorting
time space is o(n log n),o(n)

class Solution {
    public void sortColors(int[] nums) {
        Arrays.sort(nums);
    }
}


                     OR


2.in-place method or dutch flag method
Time Complexity:O(n)
Space Complexity: O(1), since no extra space is used except for the pointers.

class Solution {
    public void sortColors(int[] nums) {
        // Initialize pointers: start, mid, and end
        int start = 0;  // Points to the next position for 0
        int mid = 0;    // Points to the current element to examine
        int end = nums.length - 1;  // Points to the next position for 2

        // Traverse the array until mid surpasses end
        while (mid <= end) {
            // Switch based on the value of nums[mid]
            switch (nums[mid]) {
                case 0:
                    // If nums[mid] is 0, swap it with the start element
                    swap(nums, start, mid);
                    // Move both start and mid pointers to the right
                    start++;
                    mid++;
                    break;

                case 1:
                    // If nums[mid] is 1, just move mid pointer to the right
                    mid++;
                    break;

                case 2:
                    // If nums[mid] is 2, swap it with the end element
                    swap(nums, mid, end);
                    // Move the end pointer to the left
                    end--;
                    break;
            }
        }
    }

    // Helper method to swap two elements in the array
    private void swap(int[] arr, int pos1, int pos2) {
        int temp = arr[pos1];  // Store the value at pos1
        arr[pos1] = arr[pos2];  // Swap the values at pos1 and pos2
        arr[pos2] = temp;  // Assign the stored value to pos2
    }
}

*/}