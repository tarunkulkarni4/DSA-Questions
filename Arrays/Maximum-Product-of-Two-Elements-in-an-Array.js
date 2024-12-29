{/*

    Maximum Product of Two Elements in an Array

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 

Constraints:

2 <= nums.length <= 500
1 <= nums[i] <= 10^3

1..using sorting:

class Solution {
    public int maxProduct(int[] nums) {
        Arrays.sort(nums);

        int num1=nums[nums.length-1]-1;
        int num2=nums[nums.length-2]-1;

        return num1*num2;
        
    }
}


                 OR
2.. optimized  time is o(n)

public class MaxProduct {
    // Function to find the maximum product of two elements in the array
    public static int maxProduct(int[] nums) {
        // Initialize the two largest numbers
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;

        // Traverse the array once to find the two largest elements
        for (int num : nums) {
            // If the current number is greater than the largest element found so far
            if (num > max1) {
                max2 = max1;  // Update second largest
                max1 = num;   // Update largest
            } 
            // If the current number is greater than the second largest but smaller than the largest
            else if (num > max2) {
                max2 = num;   // Update second largest
            }
        }

        // Return the product of (max1 - 1) and (max2 - 1)
        return (max1 - 1) * (max2 - 1);
    }
    
    // Example 1:
    // Input: [3, 4, 5, 2]
    // Largest elements are 5 and 4
    // The product is (5 - 1) * (4 - 1) = 4 * 3 = 12
    // Output: 12
    
    // Example 2:
    // Input: [1, 5, 4, 5]
    // Largest elements are 5 and 5
    // The product is (5 - 1) * (5 - 1) = 4 * 4 = 16
    // Output: 16
    
    // Example 3:
    // Input: [3, 7]
    // Largest elements are 7 and 3
    // The product is (7 - 1) * (3 - 1) = 6 * 2 = 12
    // Output: 12
}

    */}