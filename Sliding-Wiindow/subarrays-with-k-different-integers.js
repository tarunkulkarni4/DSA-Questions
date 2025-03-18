{/*
  ubarrays with K Different Integers

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
    
BruteForce:

Using HashMap:

Nested loops to check all subarrays.
Use a HashSet to track distinct elements.
Break when distinct elements exceed k.
Time Complexity: O(N²) (Quadratic).

import java.util.HashSet;

class Solution {
    public int subarraysWithKDistinct(int[] nums, int k) {
        int count = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            HashSet<Integer> set = new HashSet<>();
            for (int j = i; j < n; j++) {
                set.add(nums[j]);
                if (set.size() == k) {
                    count++;
                } else if (set.size() > k) {
                    break;
                }
            }
        }
        return count;
    }
}



Sliding window:

Two pointers (left & right) to maintain a valid window.
HashMap to store frequency of elements.
Shrink window if distinct elements exceed k.
Count valid subarrays dynamically.
Time Complexity: O(N) (Linear)

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int subarraysWithKDistinct(int[] nums, int k) {
        return atMost(nums, k) - atMost(nums, k - 1);
    }

    private int atMost(int[] nums, int k) {
        int left = 0;
        int count = 0;
        Map<Integer, Integer> map = new HashMap<>();

        for (int right = 0; right < nums.length; right++) {
            map.put(nums[right], map.getOrDefault(nums[right], 0) + 1);

            // Fix: Use a while loop to correctly shrink the window
            while (map.size() > k) {
                int freqCount = map.get(nums[left]);
                if (freqCount == 1) {
                    map.remove(nums[left]);
                } else {
                    map.put(nums[left], freqCount - 1);
                }
                left++;
            }

            count += right - left + 1;
        }
        return count;
    }
}


*/}