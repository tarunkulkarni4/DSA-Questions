{/*
   Coin Change – Simple Approach
Goal:
Find the minimum number of coins needed to make the given amount.

Use Dynamic Programming (DP) to build the answer from smaller amounts.

Create a dp[] array, where dp[i] means the fewest coins needed to make amount i.

Start with base case:
dp[0] = 0 → No coins needed to make amount 0.

For every amount from 1 to the target amount:
Try using each coin:

If the coin can be used (i.e., amount - coin >= 0)

Then update:

lua
Copy code
dp[amount] = min(dp[amount], dp[amount - coin] + 1)
Return dp[amount] if it's updated; else return -1 if amount can't be made.



 class Solution {
    public int coinChange(int[] coins, int amount) {
        // Set a max value to represent "infinity" (i.e., an impossible high number)
        int max = amount + 1;

        // Create a DP array where dp[i] means the minimum number of coins to make amount i
        int[] dp = new int[amount + 1];

        // Initialize all values to "infinity" since we haven't solved them yet
        Arrays.fill(dp, max);

        // Base case: 0 coins are needed to make amount 0
        dp[0] = 0;

        // Iterate through all amounts from 1 to the target amount
        for (int amountToTake = 1; amountToTake <= amount; amountToTake++) {

            // Try every coin to see if it can contribute to amountToTake
            for (int coinChoice : coins) {

                // Calculate the remainder if this coin is used
                int remainder = amountToTake - coinChoice;

                // If remainder is valid (i.e., non-negative)
                if (remainder >= 0) {
                    // Update the DP table: take the minimum between current and using this coin
                    dp[amountToTake] = Math.min(dp[amountToTake], dp[remainder] + 1);
                }
            }
        }

        // If dp[amount] is still max, it means we couldn't form that amount
        return dp[amount] == max ? -1 : dp[amount];
    }
}
   
*/}