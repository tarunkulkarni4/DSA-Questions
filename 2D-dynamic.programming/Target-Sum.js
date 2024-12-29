{/*
  Target Sum

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 

Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
Example 2:

Input: nums = [1], target = 1
Output: 1
 

Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000  



Solution:   time complexiety is o(n2),space is O(n)

class Solution {
    static int findTargetSumWays(int N, int[] A, int target) {
        // Initialize dp with 0 sum and 1 way (empty set)
        HashMap<Integer, Integer> dp = new HashMap<>();
        dp.put(0, 1);

        // Iterate through the numbers in the array A
        for (int i = 0; i < N; i++) {
            int num = A[i];
            // Create a new map for the next state of dp
            HashMap<Integer, Integer> newdp = new HashMap<>();
            for (int sum : dp.keySet()) {
                int count = dp.get(sum);
                // Add num to the current sum and subtract num from the current sum
                newdp.put(sum + num, newdp.getOrDefault(sum + num, 0) + count);
                newdp.put(sum - num, newdp.getOrDefault(sum - num, 0) + count);
            }
            // Move to the next state of dp
            dp = newdp;
        }

        // Return the number of ways to reach the target sum
        return dp.getOrDefault(target, 0);
    }
}

    
*/}