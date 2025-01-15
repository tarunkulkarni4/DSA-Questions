{/*

Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 

Follow up: Could you solve the problem in linear time and in O(1) space?


Brute force :

tc is o(n2),o(1)



public class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        int n = nums.length;
        int threshold = n / 3;

        // Iterate through all elements
        for (int i = 0; i < n; i++) {
            int count = 0;

            // Count occurrences of nums[i]
            for (int j = 0; j < n; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }

            // Check if it's a majority element and not already added
            if (count > threshold && !result.contains(nums[i])) {
                result.add(nums[i]);
            }
        }

        return result;
    }
}


using boomers algorithm


Time Complexity (TC): O(n).
Space Complexity (SC): O(1).

import java.util.*;

class Solution {
    // Function to find elements that appear more than n/3 times in the array
    public List<Integer> findMajority(int[] nums) {
        List<Integer> majorityElements = new ArrayList<>(); // List to store the majority elements
        int candidate1 = -1; // First potential candidate for majority element
        int candidate2 = -1; // Second potential candidate for majority element
        int count1 = 0; // Count for occurrences of candidate1
        int count2 = 0; // Count for occurrences of candidate2

        // First pass: Identify the potential majority element candidates
        for (int num : nums) {
            if (num == candidate1) {
                count1++; // Increment count1 if the current number matches candidate1
            } else if (count1 == 0) {
                candidate1 = num; // Set the current number as candidate1 if count1 is zero
                count1 = 1; // Initialize count1 to 1 since candidate1 is now set
            } else if (num == candidate2) {
                count2++; // Increment count2 if the current number matches candidate2
            } else if (count2 == 0) {
                candidate2 = num; // Set the current number as candidate2 if count2 is zero
                count2 = 1; // Initialize count2 to 1 since candidate2 is now set
            } else {
                count1--; // Decrease count1 if the current number is not equal to either candidate
                count2--; // Decrease count2 if the current number is not equal to either candidate
            }
        }

        // Second pass: Count the occurrences of candidate1 and candidate2 in the array
        count1 = 0; // Reset count1 to zero for counting the occurrences of candidate1
        count2 = 0; // Reset count2 to zero for counting the occurrences of candidate2
        for (int num : nums) {
            if (num == candidate1) {
                count1++; // Increment count1 for each occurrence of candidate1
            } else if (num == candidate2) {
                count2++; // Increment count2 for each occurrence of candidate2
            }
        }

        // Determine the threshold (n/3) and check if the candidates meet the majority criteria
        int threshold = nums.length / 3; // Calculate the threshold for majority (n/3)
        if (count1 > threshold) {
            majorityElements.add(candidate1); // Add candidate1 to result if it appears more than n/3 times
        }
        if (count2 > threshold) {
            majorityElements.add(candidate2); // Add candidate2 to result if it appears more than n/3 times
        }

        return majorityElements; // Return the list of majority elements (can be empty if no element qualifies)
    }
}



    */}