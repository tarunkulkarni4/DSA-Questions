{/*
    
   Find Numbers with Even Number of Digits

Given an array nums of integers, return how many of them contain an even number of digits.

 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits. 

solution:

TC is  O(n⋅d),Sc is O(1)

class Solution {
    public int findNumbers(int[] nums) {
        int count = 0; // Step 2: Initialize counter
        
        for (int i = 0; i < nums.length; i++) { // Step 3: Loop through numbers
            int num = nums[i];
            int digits = 0;
            
            // Step 4: Count digits
            while (num > 0) {
                num /= 10; // Remove the last digit
                digits++;
            }
            
            // Step 5: Check if digits are even
            if (digits % 2 == 0) {
                count++;
            }
        }
        
        // Step 6: Return the result
        return count;
    }
}


                       OR 

Solution:using string builder 


TC is  O(n⋅d),Sc is O(d)

class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        
        for (int num : nums) {
            if (String.valueOf(num).length() % 2 == 0) {
                count++;
            }
        }
        
        return count;
    }
}


*/}