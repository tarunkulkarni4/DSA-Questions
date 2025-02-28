{/*
  Find Unique Binary String

Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 

Example 1:

Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
Example 2:

Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.
Example 3:

Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 

Constraints:

n == nums.length
1 <= n <= 16
nums[i].length == n
nums[i] is either '0' or '1'.
All the strings of nums are unique.

class Solution {
    public String findDifferentBinaryString(String[] nums) {
        StringBuilder result = new StringBuilder(); // Initialize an empty string to store the result
        
        for (int i = 0; i < nums.length; i++) {
            // Check the i-th character of the i-th binary string in nums
            if (nums[i].charAt(i) == '0') {
                result.append('1'); // Flip '0' to '1' and append to result
            } else {
                result.append('0'); // Flip '1' to '0' and append to result
            }
        }
        
        return result.toString(); // Return the generated binary string
    }
}

    
*/}