{/*
    Divide Array Into Equal Pairs
Solved
Easy
Topics
Companies
Hint
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

 

Example 1:

Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
Example 2:

Input: nums = [1,2,3,4]
Output: false
Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.\

uisng map;

class Solution {
    public boolean divideArray(int[] nums) {
        Map<Integer,Integer>map=new HashMap<>();
        for(int num:nums)
        {
            map.put(num,map.getOrDefault(num,0)+1);
        }
        for(int count:map.values())
        {
            if(count%2!=0)
            {
                return false;
            }
        }
        return true;
    }
}

usings sorting:


import java.util.Arrays;

class Solution {
    public boolean divideArray(int[] nums) {
        Arrays.sort(nums);  // Sort array

        for (int i = 0; i < nums.length; i += 2) {
            if (nums[i] != nums[i + 1]) {
                return false;
            }
        }
        return true;
    }
}



hashset:

import java.util.HashSet;

class Solution {
    public boolean divideArray(int[] nums) {
        HashSet<Integer> set = new HashSet<>();

        for (int num : nums) {
            if (set.contains(num)) {
                set.remove(num); // Pair found, remove from set
            } else {
                set.add(num); // First occurrence, add to set
            }
        }

        return set.isEmpty(); // If empty, all elements have even frequency
    }
}

*/}