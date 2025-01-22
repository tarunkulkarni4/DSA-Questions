{
  /*
    Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

Solution:

class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Step 1: Initialize arrays for left product and right product
        int[] left = new int[nums.length]; // Array to store products of elements to the left of each index
        int[] right = new int[nums.length]; // Array to store products of elements to the right of each index

        // Step 2: Calculate left product array
        left[0] = 1; // The first element has no left elements, so the product is 1
        for (int i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] * nums[i - 1]; // Product of all elements to the left of index i
        }

        // Step 3: Calculate right product array
        right[nums.length - 1] = 1; // The last element has no right elements, so the product is 1
        for (int i = nums.length - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1]; // Product of all elements to the right of index i
        }

        // Step 4: Calculate the final result
        int[] ans = new int[nums.length]; // Array to store the result
        for (int i = 0; i < nums.length; i++) {
            ans[i] = left[i] * right[i]; // Multiply left and right products for each index
        }

        // Step 5: Return the result
        return ans;
    }
}


             OR

             this is o(1)

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Step 1: Compute the left product in the result array
        result[0] = 1; // No elements to the left of index 0
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Step 2: Compute the right product and update the result array
        int rightProduct = 1; // No elements to the right of the last index
        for (int i = n - 1; i >= 0; i--) {
            result[i] = result[i] * rightProduct; // Multiply the left and right products
            rightProduct *= nums[i]; // Update the right product for the next iteration
        }

        return result;
    }
}



*/
}
