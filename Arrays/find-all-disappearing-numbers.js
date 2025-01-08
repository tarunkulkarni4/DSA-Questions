{/*
    Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        // Result list to store the missing numbers
        List<Integer> result = new ArrayList<>();

        // Time Complexity: O(n)
        // Space Complexity: O(1) (excluding result list)
        // Example: nums = [4, 3, 2, 7, 8, 2, 3, 1]
        
        // Step 1: Mark numbers as visited
        for (int i = 0; i < nums.length; i++) {
            // Find the correct index corresponding to nums[i]
            int idx = Math.abs(nums[i]) - 1; // Math.abs() handles already marked indices
            
            // Mark the number at the index as visited by making it negative
            if (nums[idx] > 0) { 
                nums[idx] *= -1; // Negate only if it's positive
            }
        }

        // After marking: nums = [-4, -3, -2, -7, 8, 2, -3, -1]
        
        // Step 2: Identify indices with positive values (missing numbers)
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) { 
                // If nums[i] is positive, the number (i + 1) is missing
                result.add(i + 1);
            }
        }

        // Missing numbers: [5, 6]
        return result;
    }
}







brute force

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        // Result list to store the missing numbers
        List<Integer> result = new ArrayList<>();
        
        // Example:
        // Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
        // Output: [5, 6]
        
        // Step 1: Check every number from 1 to n
        for (int i = 1; i <= nums.length; i++) {
            boolean found = false; // Flag to check if the number exists
            
            // Step 2: Search for the number in the array
            for (int j = 0; j < nums.length; j++) {
                if (nums[j] == i) { // If number is found, break the inner loop
                    found = true;
                    break;
                }
            }
            
            // Step 3: If the number is not found, add it to the result list
            if (!found) {
                result.add(i);
            }
        }

        // Missing numbers: [5, 6]
        return result;
    }
}


*/}