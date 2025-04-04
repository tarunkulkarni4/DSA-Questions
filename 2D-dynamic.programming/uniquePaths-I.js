{
  /*
    
     Unique Paths
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Solution: 

              time and space complexiety is O(mxn)


              class Solution {
    public int uniquePaths(int m, int n) {
        // Create a 2D grid to store the number of unique paths to each cell
        // Space Complexity: O(m * n)
        int[][] grid = new int[m][n];

        // Iterate over all cells in the grid
        // Time Complexity: O(m * n)
        for (int i = 0; i < m; i++) { // Outer loop for rows
            for (int j = 0; j < n; j++) { // Inner loop for columns
                
                // Base case: If the cell is in the first row or first column,
                // there's only one way to reach it (all moves are either right or down).
                if (i == 0 || j == 0) {
                    grid[i][j] = 1; // Set paths to 1 for the first row/column
                } else {
                    // For other cells, the number of paths is the sum of paths
                    // from the cell directly above and the cell directly to the left.
                    grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
                }
            }
        }

        // The value at the bottom-right corner contains the total unique paths
        return grid[m - 1][n - 1];
    }
}

*/
}
