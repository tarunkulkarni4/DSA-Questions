{
  /*
    
 1.Brute force approach using recurison 
   
    class Solution {
    public int climbStairs(int n) {
         if (n == 0) return 1; // 1 way to stay at step 0
        if (n < 0) return 0;  // No way if steps go negative

        // Recursive calls to consider both 1-step and 2-step options
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
}




                         <---OR--->




 2.Using effective solution time and space complexeity is o(n)

      class Solution {
    public int climbStairs(int n) {
        // If there is only one step, there is only one way to climb
        if (n == 1) {
            return 1;
        }

        // Create a DP array to store the number of ways to reach each step
        // dp[i] represents the number of ways to reach the ith step
        int[] dp = new int[n + 1];

        // Base case: There is one way to reach the 1st step
        dp[1] = 1;

        // Base case: There are two ways to reach the 2nd step
        // (either take two 1-steps or one 2-step)
        dp[2] = 2;

        // Fill the DP array for steps 3 to n
        for (int i = 3; i <= n; i++) {
            // The number of ways to reach the ith step is the sum of:
            // - The ways to reach the (i-1)th step (and take 1 step)
            // - The ways to reach the (i-2)th step (and take 2 steps)
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        // The result is stored in dp[n], which represents the number of ways
        // to reach the nth step
        return dp[n];
    }
}

    
*/
}
