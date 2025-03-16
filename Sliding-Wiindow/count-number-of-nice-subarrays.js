{/*
   
    Count Number of Nice Subarrays

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.
Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 

Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length


BruteFOrce:

class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        int count = 0;

        for (int i = 0; i < nums.length; i++) {
            int oddCount = 0;

            for (int j = i; j < nums.length; j++) {
                if (nums[j] % 2 != 0) {
                    oddCount++;
                }

                if (oddCount == k) {
                    count++;
                }
            }
        }
        return count;
    }
}


OPtimized:

its same as the binary sum

class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        return countSubarraysWithAtMostKOdd(nums, k) - countSubarraysWithAtMostKOdd(nums, k - 1);
    }

    private int countSubarraysWithAtMostKOdd(int[] nums, int k) {
        int left = 0, right = 0, totalSubarrays = 0, oddCount = 0;

        while (right < nums.length) {
            if (nums[right] % 2 != 0) {  // If the number is odd, increase oddCount
                oddCount++;
            }

            while (oddCount > k) {  // If oddCount exceeds k, shrink the window
                if (nums[left] % 2 != 0) {
                    oddCount--;  // Reduce odd count when removing an odd number
                }
                left++;
            }

            totalSubarrays += right - left + 1;  // Count valid subarrays
            right++;
        }
        return totalSubarrays;
    }
}

    
*/}