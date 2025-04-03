{/*
    Number of Enclaves
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.
 
    class Solution {
    public int numEnclaves(int[][] grid) {
        int m = grid.length;  // Number of rows
        int n = grid[0].length;  // Number of columns

        // Flood fill all land cells connected to the borders
        for (int i = 0; i < m; i++) {
            if (grid[i][0] == 1) floodFill(grid, i, 0, m, n);     // Left border
            if (grid[i][n - 1] == 1) floodFill(grid, i, n - 1, m, n); // Right border
        }
        for (int j = 0; j < n; j++) {
            if (grid[0][j] == 1) floodFill(grid, 0, j, m, n);     // Top border
            if (grid[m - 1][j] == 1) floodFill(grid, m - 1, j, m, n); // Bottom border
        }

        int count = 0; // Count enclaves (remaining 1s)
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
        }
        return count;
    }

    // DFS function to convert connected land cells to water (0)
    private void floodFill(int[][] grid, int i, int j, int m, int n) {
        grid[i][j] = 0; // Mark current cell as visited (turn it into water)

        int[][] dir = { {-1, 0}, {0, 1}, {1, 0}, {0, -1} }; // Directions (up, right, down, left)

        for (int k = 0; k < 4; k++) {  // Explore all 4 directions
            int r = i + dir[k][0];
            int c = j + dir[k][1];

            // Continue flood fill if within bounds and it's a land cell (1)
            if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == 1) {
                floodFill(grid, r, c, m, n);
            }
        }
    }
}

*/}