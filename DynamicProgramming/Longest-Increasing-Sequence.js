{
  /*
   
    Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1


1.solution 
 
class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] T = new int[nums.length];
        Arrays.fill(T, 1); // Initialize T with 1 since each element is a LIS of length 1

        for (int i = 1; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    T[i] = Math.max(T[i], T[j] + 1); // FIXED: Take maximum value n
                }
            } T = [1, 1, 1, 2, 2, 3, 4, 4] this will get in this step so now find max sum that will be ur length
        }

        int maxLIS = 0;
        for (int i = 0; i < nums.length; i++) {
            maxLIS = Math.max(maxLIS, T[i]); // FIXED: Find the maximum value in T
        }
        return maxLIS; // FIXED: Return the maximum LIS length
    }
}


                         OR            


    2.

    import java.util.*;

public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public int lis(final List<Integer> A) {
        // Special case: Empty list
        if (A.isEmpty()) return 0;

        // Create an array to store LIS values
        int[] T = new int[A.size()];
        Arrays.fill(T, 1); // Each element is its own LIS initially

        // Calculate LIS for each element
        for (int i = 1; i < A.size(); i++) {
            for (int j = 0; j < i; j++) {
                if (A.get(i) > A.get(j)) {
                    T[i] = Math.max(T[i], T[j] + 1);
                }
            }
        }

        // Find the maximum LIS value
        int maxLIS = 0;
        for (int i = 0; i < T.length; i++) {
            maxLIS = Math.max(maxLIS, T[i]);
        }

        return maxLIS;
    }
}





    
    
*/
}
