{/*

    Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

    Solution: 
   time,space is O(n),O(1)

    class Solution {
    public void moveZeroes(int[] nums) {
        int lastIndex = 0; // Pointer for the next non-zero position

        // Move all non-zero elements forward
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[lastIndex++] = nums[i];
            }
        }

        // Fill the remaining positions with zeros
        for (int i = lastIndex; i < nums.length; i++) {
            nums[i] = 0;
        }

        // Example Execution:
        // Input: nums = [0, 1, 0, 3, 12]
        // Step 1 (First for loop):
        // - i = 0, nums[0] = 0 → nums = [0, 1, 0, 3, 12], lastIndex = 0
        // - i = 1, nums[1] = 1 → nums = [1, 1, 0, 3, 12], lastIndex = 1
        // - i = 2, nums[2] = 0 → nums = [1, 1, 0, 3, 12], lastIndex = 1
        // - i = 3, nums[3] = 3 → nums = [1, 3, 0, 3, 12], lastIndex = 2
        // - i = 4, nums[4] = 12 → nums = [1, 3, 12, 3, 12], lastIndex = 3
        //
        // Step 2 (Second for loop):
        // - i = 3 → nums = [1, 3, 12, 0, 12]
        // - i = 4 → nums = [1, 3, 12, 0, 0]
        //
        // Final Output: nums = [1, 3, 12, 0, 0]
    }
}


                         OR

  2.solution 
    time,space is O(n),O(1)

   class Solution {
    public void moveZeroes(int[] nums) {
        int lastIndex = 0; // Pointer for the next non-zero position

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                // Swap nums[i] and nums[lastIndex] if needed
                if (i != lastIndex) {
                    int temp = nums[i];
                    nums[i] = nums[lastIndex];
                    nums[lastIndex] = temp;
                }
                lastIndex++; // Move to the next position for non-zero elements
            }
        }

        // Example Execution:
        // Input: nums = [0, 1, 0, 3, 12]
        // Step-by-step Swapping:
        // - i = 0, nums[0] = 0 → no swap, lastIndex = 0
        // - i = 1, nums[1] = 1 → swap nums[1] and nums[0], nums = [1, 0, 0, 3, 12], lastIndex = 1
        // - i = 2, nums[2] = 0 → no swap, lastIndex = 1
        // - i = 3, nums[3] = 3 → swap nums[3] and nums[1], nums = [1, 3, 0, 0, 12], lastIndex = 2
        // - i = 4, nums[4] = 12 → swap nums[4] and nums[2], nums = [1, 3, 12, 0, 0], lastIndex = 3
        //
        // Final Output: nums = [1, 3, 12, 0, 0]
    }
}


3.


class Solution {
    public void moveZeroes(int[] nums) {
        int insertPosition = 0; // Keeps track of where to place the next non-zero element.

        // First loop: Move all non-zero elements to the front of the array.
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) { // If the current element is not zero,
                nums[insertPosition] = nums[i]; // Place it at the 'insertPosition'.
                insertPosition++; // Increment 'insertPosition'.
            }
            // Example:
            // nums = [0, 1, 0, 3, 12], insertPosition = 0
            // Iteration 1: nums[0] = 0, skip. (nums = [0, 1, 0, 3, 12], insertPosition = 0)
            // Iteration 2: nums[1] = 1, place at nums[0]. (nums = [1, 1, 0, 3, 12], insertPosition = 1)
            // Iteration 3: nums[2] = 0, skip. (nums = [1, 1, 0, 3, 12], insertPosition = 1)
            // Iteration 4: nums[3] = 3, place at nums[1]. (nums = [1, 3, 0, 3, 12], insertPosition = 2)
            // Iteration 5: nums[4] = 12, place at nums[2]. (nums = [1, 3, 12, 3, 12], insertPosition = 3)
        }

        // Second loop: Fill the rest of the array with zeros.
        while (insertPosition < nums.length) {
            nums[insertPosition++] = 0; // Place a zero and increment 'insertPosition'.
            // Example:
            // nums = [1, 3, 12, 3, 12], insertPosition = 3
            // Iteration 1: Place 0 at nums[3]. (nums = [1, 3, 12, 0, 12], insertPosition = 4)
            // Iteration 2: Place 0 at nums[4]. (nums = [1, 3, 12, 0, 0], insertPosition = 5)
        }
    }
}

                      

*/}