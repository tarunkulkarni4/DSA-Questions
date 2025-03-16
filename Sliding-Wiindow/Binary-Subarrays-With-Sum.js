{/*
    Binary Subarrays With Sum
The problem Binary Subarrays With Sum asks us to find the number of subarrays whose sum equals a given value goal.

Problem Statement
Given a binary array nums (only containing 0s and 1s) and an integer goal, return the number of subarrays that have a sum equal to goal.

Example
Example 1
plaintext
Copy
Edit
Input: nums = [1, 0, 1, 0, 1], goal = 2
Output: 4
Explanation: The subarrays that sum to 2 are:
[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1]
Example 2
plaintext
Copy
Edit
Input: nums = [0, 0, 0, 0, 0], goal = 0
Output: 15
Explanation: All subarrays with only `0`s contribute to sum `0`.
    
BruteForce:

class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        int count = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += nums[j];
                if (sum == goal) {
                    count++;
                }
            }
        }
        return count;
    }
}

Prifix-HashMap based

Use a HashMap to store prefix sums and their frequencies.
For each prefixSum, check if prefixSum - goal exists in the map.
Works for all integers (positive, zero, and negative).

import java.util.HashMap;

class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);  // Initialize: sum 0 appears once (for subarrays starting from index 0)

        int prefixSum = 0;  // Running sum
        int count = 0;      // Count of valid subarrays

        for (int num : nums) {
            prefixSum += num;  // Add current number to running sum

            // Check if (prefixSum - goal) exists in HashMap
            if (map.containsKey(prefixSum - goal)) {
                count += map.get(prefixSum - goal);  // Add frequency of required sum
            }

            // Store the current prefixSum count in HashMap
            map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);
        }

        return count;
    }
}



Optimized:
Sliding Window

Find subarrays with sum ≤ goal (atMost(goal)).
Find subarrays with sum ≤ goal - 1 (atMost(goal - 1)).
Difference gives subarrays with exact sum goal.
Works only for non-negative arrays.

class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        return atMost(nums, goal) - atMost(nums, goal - 1);
    }

    private int atMost(int[] nums, int goal) {
        if (goal < 0) {
            return 0;  // Edge case: No valid subarrays if goal is negative
        }

        int count = 0;  // Stores total count of subarrays with sum <= goal
        int left = 0;   // Left pointer of sliding window
        int sum = 0;    // Stores the sum of current window
        int right = 0;  // Right pointer of sliding window

        while (right < nums.length) {
            sum += nums[right];  // Expand the window by adding nums[right]

            // If sum exceeds goal, shrink window from the left
            while (sum > goal) {
                sum -= nums[left];  
                left++;
            }

            // All subarrays between left and right are valid
            count += right - left + 1;

            right++;  // Move right pointer forward
        }

        return count;
    }
}



*/}