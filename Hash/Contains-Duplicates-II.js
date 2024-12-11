{/*
   
    Contains Duplicate II
Solved
Easy
Topics
Companies
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Solution:Using hashMap  time ,space is 0(n)
    
   class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // Create a HashMap to store the last index of each number encountered in the array
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Loop through the entire array of numbers
        for (int i = 0; i < nums.length; i++) {
            // Check if the current number exists in the map (i.e., if it has been seen before)
            if (map.containsKey(nums[i])) {
                // If the number was seen before, check the difference between current index and last index
                if ((i - map.get(nums[i])) <= k) {
                    // If the difference is within the given range k, return true indicating a nearby duplicate
                    return true;
                }
            }
            // Update the map with the current index of the number
            map.put(nums[i], i);
        }
        
        // If no nearby duplicate is found, return false
        return false;
    }
}

    
*/}