{/*

    Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
Example 2:

Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
 

Constraints:

1 <= days <= weights.length <= 5 * 104
1 <= weights[i] <= 500
    
Solution:

class Solution {
    public int shipWithinDays(int[] weights, int days) {
        // Initialize minCap to the maximum weight of a single package (for the lower bound of capacity)
        int minCap = 0;
        // Initialize maxCap to the total sum of all weights (for the upper bound of capacity)
        int maxCap = 0;

        // Loop through all the weights to calculate the min and max possible capacities
        for (int i = 0; i < weights.length; i++) {
            minCap = Math.max(minCap, weights[i]); // The minimum capacity must be at least the weight of the heaviest package
            maxCap += weights[i]; // The maximum capacity is the total sum of all package weights
        }

        // Binary search to find the minimum capacity required to ship all packages in 'days' days
        while (minCap < maxCap) {
            int mid = (minCap + maxCap) / 2; // Try the middle capacity (average of minCap and maxCap)
            int dayss = 1; // Start with the first day
            int sum = 0; // Track the current day's total weight

            // Loop through the weights and calculate the number of days required
            for (int i = 0; i < weights.length; i++) {
                if (sum + weights[i] > mid) { // If adding the current weight exceeds the mid capacity
                    dayss++; // Need a new day to ship this package
                    sum = 0; // Start a new day with the current package's weight
                }
                sum += weights[i]; // Add the current package weight to the current day's total
            }

            // If more days are required than allowed, increase the capacity
            if (dayss > days) {
                minCap = mid + 1; // Increase capacity since more days are required
            } else {
                maxCap = mid; // Decrease capacity, try to minimize the capacity required
            }
        }

        // Return the minimum capacity that allows shipping within the given days
        return minCap;
    }
}

/*
Time Complexity: O(n * log(sum)), where n is the number of packages and sum is the total sum of package weights.
  - The binary search runs O(log(sum)) times (because we're adjusting the search space between minCap and maxCap).
  - Inside each binary search iteration, we loop over the array of weights (O(n)) to calculate the number of days required.

Space Complexity: O(1), constant space.
  - The algorithm only uses a few extra variables to track minCap, maxCap, mid, dayss, and sum.



*/}