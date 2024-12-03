{
  /*
              
    1.Simple way
    
    class Solution {
    public int maximizeMoney(int N, int K) {
        // The number of houses the thief can rob
        int maxHouses = (N + 1) / 2;
        
        // Maximum money the thief can rob
        return maxHouses * K;
    }
}

                 OR

  2.using dynamic programming
class Solution {
    public int maximizeMoney(int N, int K) {
        if (N == 0) return 0; // No houses to rob
        if (N == 1) return K; // Only one house

        // Create DP array
        int[] dp = new int[N + 1];
        dp[1] = K; // Base case for one house
        dp[2] = K; // Base case for two houses

        // Fill DP array
        for (int i = 3; i <= N; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + K);
        }

        // The maximum money robbed is stored in dp[N]
        return dp[N];
    }
}
  
    
*/
}
