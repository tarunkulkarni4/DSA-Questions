{/*
    Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

Solutions:

1.Sorting:  

Time Complexity:
O(nlogn) (average case for Dual-Pivot QuickSort).

Space Complexity: 
O(logn)

class Solution {
    public int[] sortArray(int[] nums) {
        Arrays.sort(nums); // Sorts the array in ascending order
        return nums; // Return the sorted array
    }
}



2.brute force approch  o(n2) and o(1)

class Solution {
    public int[] sortArray(int[] nums) {
        int n = nums.length;

        // Brute-force sorting
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] > nums[j]) {
                    // Swap nums[i] and nums[j]
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }

        return nums; // Return the sorted array
    }
}


3.bubble sort
Time Complexity	
Best: O(n), Average: O(n2), Worst: O(n2)




class Solution {
    public int[] sortArray(int[] nums) {
        int n = nums.length;
        
        // Bubble Sort algorithm
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    // Swap nums[j] and nums[j + 1]
                    int temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }
        }
        
        return nums; // Return the sorted array
    }
}

 
    
*/}