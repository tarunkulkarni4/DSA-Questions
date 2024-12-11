{/*
    
    217. Contains Duplicate
Easy
Topics
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true


Solutiion:
               Brute force (time is 0(n2) and space is 0(1)) 

   
class Solution {
    public boolean checkDuplicates(int arr[]) {
        // Code here
        for(int i=0;i<arr.length;i++)
        {
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[i]==arr[j])
                {
                    return true;
                }
            }
        }
        return false;
    }
}

Solution: 
                 using hash map  time and space is (O(n))

import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Create a HashSet to store the elements as we iterate through the array
        Set<Integer> isSet = new HashSet<>();

        // Loop through the array using a variable 'i'
        for (int i = 0; i < nums.length; i++) {
            // Check if the element is already in the set
            if (isSet.contains(nums[i])) {
                // If found, return true because we found a duplicate
                return true;
            }
            // Otherwise, add the current element to the set
            isSet.add(nums[i]);
        }

        // If no duplicates are found, return false
        return false;
    }
}





*/}