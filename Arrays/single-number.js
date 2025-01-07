{
  /*
   
    Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.



    class Solution {
    public int singleNumber(int[] nums) {
        int result = 0; // Initialize result to 0

        // XOR all elements in the array
        for (int num : nums) {
            result ^= num; // Perform XOR operation
        }

        // The result will hold the single number
        return result;
    }
}


Time Complexity (TC): O(n)
- The algorithm iterates through the array once to XOR all elements.

Space Complexity (SC): O(1)
- The algorithm uses only a constant amount of extra space.

Example 1:
Input: nums = [2, 2, 1]
Output: 1
Explanation:
- XORing all elements: 2 ^ 2 ^ 1 = 0 ^ 1 = 1.

Example 2:
Input: nums = [4, 1, 2, 1, 2]
Output: 4
Explanation:
- XORing all elements: 4 ^ 1 ^ 2 ^ 1 ^ 2 = (1 ^ 1) ^ (2 ^ 2) ^ 4 = 0 ^ 0 ^ 4 = 4.

Example 3:
Input: nums = [1]
Output: 1
Explanation:
- Single element, no XOR needed.
*/
}
