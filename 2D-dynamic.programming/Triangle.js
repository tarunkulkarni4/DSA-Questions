{
  /*

    Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10



Time Complexity	O(height²) or O(n)
Space Complexity	O(height²) (can be optimized to O(height))


    1.using  bottom-up approach  time ,space complexiety is 0(n2)

    class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        // Get the number of rows (height) in the triangle
        int height = triangle.size();

        // Create a 2D DP array of size [height+1][height+1]
        // Extra row is added to simplify calculations for the bottom-most row
        int[][] dp = new int[height + 1][height + 1];

        // Traverse the triangle from the second last row up to the top (bottom-up approach)
        for (int level = height - 1; level >= 0; level--) {
            // Iterate over all elements in the current row
            for (int i = 0; i <= level; i++) {
                // Compute the minimum path sum for the current element
                // Add the current element value to the smaller of the two possible path sums from the row below
                dp[level][i] = triangle.get(level).get(i) + Math.min(dp[level + 1][i], dp[level + 1][i + 1]);
            }
        }

        // The minimum path sum for the entire triangle is now stored in dp[0][0]
        return dp[0][0];
    }
}

*/
}
