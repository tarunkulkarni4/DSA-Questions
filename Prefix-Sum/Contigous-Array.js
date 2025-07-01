{/*
    
Contiguous Array

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
     

BruteForce:

public class Solution {
    public int findMaxLength(int[] nums) {
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            int count0 = 0;
            int count1 = 0;

            for (int j = i; j < nums.length; j++) {
                if (nums[j] == 0) {
                    count0++;
                } else {
                    count1++;
                }

                if (count0 == count1) {
                    int length = j - i + 1;
                    maxLength = Math.max(maxLength, length);
                }
            }
        }

        return maxLength;
    }
}


using prefixSum:

class Solution {
    public int findMaxLength(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                nums[i] = -1;
            }
        }

        int sum = 0;
        int maxLength = 0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);

        for (int i = 0; i < n; i++) {
            sum += nums[i];
            if (map.containsKey(sum)) {
                int last = map.get(sum);
                maxLength = Math.max(maxLength, i - last);
            } else {
                map.put(sum, i);
            }
        }

        return maxLength;
    }
}

*/}