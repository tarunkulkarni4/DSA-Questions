{/*
    Question:same as robber but houses are in circular way
    Solution:

    class Solution {
    public int rob(int[] nums) {
        int n = nums.length;

        // If there are no houses, return 0
        if (n == 0) return 0;

        // If there is only one house, return the money in that house
        if (n == 1) return nums[0];

        // Arrays to store the values for cases where we skip the first or last house
        int[] skipLast = new int[nums.length - 1];
        int[] skipFirst = new int[nums.length - 1];

        // Use a single loop to populate both skipLast and skipFirst arrays
        for (int i = 0; i < n - 1; i++) {
            // For skipLast: copy all elements except the last one
            skipLast[i] = nums[i];
            
            // For skipFirst: copy all elements except the first one
           
           
            skipFirst[i] = nums[i + 1];
        }

        // Calculate the maximum loot when skipping the last house
        int lootSkipLast = robHelper(skipLast);
        
        // Calculate the maximum loot when skipping the first house
        int lootSkipFirst = robHelper(skipFirst);

        // Return the maximum of both cases
        return Math.max(lootSkipLast, lootSkipFirst);
    }

    // Helper function to calculate the maximum loot in a given array
    private int robHelper(int[] nums) {
        int n = nums.length;
        
        // If there are no houses, return 0
        if (n == 0) return 0;
        
        // If there's only one house, return the money in that house
        if (n == 1) return nums[0];

        // DP array to store the maximum loot at each house
        int[] dp = new int[n];
        
        // Base cases: loot the first house or the max of first two houses
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        // Iterate over the remaining houses, calculating the maximum loot
        for (int i = 2; i < n; i++) {
            // For each house, either skip it or rob it and add the loot from 2 houses before
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }

        // Return the maximum loot from the last house
        return dp[n - 1];
    }
}

    
*/}