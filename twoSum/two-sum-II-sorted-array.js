{/*
Two Sum II - Input Array Is Sorted
Solved
Medium
Topics
Companies
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

BRute force:
time complexiety o(n2) and o(1)

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Iterate over all possible pairs of indices
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) { // Fix the loop condition
                // Check if the pair adds up to the target
                if (numbers[i] + numbers[j] == target) {
                    return new int[]{i+1, j+1}; // Return the indices as the result
                }
            }
        }
        // If no such pair exists, return an empty array
        return new int[]{};
    }
}


              OR

using two pointers
time complexiety o(n) and o(1)

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // Initialize two pointers
        int left = 0; // Start pointer
        int right = numbers.length - 1; // End pointer

        // Iterate while the pointers do not overlap
        while (left < right) {
            int sum = numbers[left] + numbers[right]; // Calculate the sum of the two pointers

            if (sum == target) {
                // If the sum matches the target, return the 1-based indices
                return new int[]{left + 1, right + 1};
            } else if (sum < target) {
                // If the sum is less than the target, move the left pointer forward
                left++;
            } else {
                // If the sum is greater than the target, move the right pointer backward
                right--;
            }
        }

        // If no solution is found, return an empty array (though the problem guarantees a solution)
        return new int[]{};
    }
}

*/}