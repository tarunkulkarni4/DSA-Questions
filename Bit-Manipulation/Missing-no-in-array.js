{/*
     Missing Number
Solved
Easy
Topics
Companies
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
      

soluion:   brute force approach using basic maths  time ,space O(n),O(1)

 class Solution {
    public int missingNumber(int[] nums) {
        // Initialize variable to store the sum of numbers from 0 to n
        int expectedSum = 0;
        
        // Get the length of the array, n
        int n = nums.length;
        
        // Calculate the expected sum of numbers from 0 to n using the formula n*(n+1)/2
        expectedSum = n * (n + 1) / 2;
        
        // Loop through the array and subtract each element from the expectedSum
        for (int i = 0; i < n; i++) {
            expectedSum -= nums[i];
        }
        
        // Return the remaining value, which will be the missing number
        return expectedSum;
    }
}


               OR


  Solution: using XoR bit manipulation  time ,space O(n),O(1)

  class Solution {
    public int missingNumber(int[] nums) {
        int XoR = 0;
        
        // XOR all the numbers in the range [0, n]
        for (int i = 0; i <= nums.length; i++) {
            XoR = XoR ^ i;
        }
        
        // XOR all the numbers in the given array
        for (int i = 0; i < nums.length; i++) {
            XoR = XoR ^ nums[i];
        }
        
        // The remaining number in XoR will be the missing number
        return XoR;
    }


           OR

class Solution {
    public static int missingNumber(int n, int[] arr) {
        
        // Calculate the sum of the first n natural numbers using the formula n*(n+1)/2
        int XoR=0;
        for(int i=0;i<=n;i++)
        {
            XoR=XoR^i;
        }
        for(int i=0;i<n-1;i++)
        {
            XoR=XoR^arr[i];
        }
        return XoR;
    }
}
}

      

    
    */}