{/*
   
    Number of Closed Islands

Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
    
    
using Dfs:

Flood Fill Boundary Islands:

Perform DFS on all boundary 0s to mark them as 1, since they cannot be closed islands.

Count Remaining Closed Islands:

Iterate through the grid.

If a 0 is found, perform DFS to mark the entire island and increase the count.

🚀 Why Not Use a visited[][] Array?
✅ Grid itself acts as a visited marker:

Instead of using visited[][], modify grid[][] directly (set 0 → 1).

Saves extra space (O(1)) compared to O(m*n).


class Solution {
    public int closedIsland(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int count = 0;

        // Step 1: Flood Fill Boundary Islands (Convert boundary 0s to 1)
        for (int i = 0; i < m; i++) {
            if (grid[i][0] == 0) {
                dfs(grid, i, 0, m, n); // Convert boundary-connected 0s to 1
            }
            if (grid[i][n - 1] == 0) {
                dfs(grid, i, n - 1, m, n); // Convert boundary-connected 0s to 1
            }
        }
        for (int j = 0; j < n; j++) {
            if (grid[0][j] == 0) {
                dfs(grid, 0, j, m, n); // Convert boundary-connected 0s to 1
            }
            if (grid[m - 1][j] == 0) {
                dfs(grid, m - 1, j, m, n); // Convert boundary-connected 0s to 1
            }
        }

        // Step 2: Count the Closed Islands
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) { // Found a closed island
                    dfs(grid, i, j, m, n); // Convert all 0s in the closed island to 1
                    count++;
                }
            }
        }
        return count;
    }

    private void dfs(int[][] grid, int i, int j, int m, int n) {
        // Mark the current cell as visited by changing 0 to 1
        grid[i][j] = 1;

        // Define 4 possible movement directions
        int[][] dir = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int k = 0; k < 4; k++) {
            int newR = i + dir[k][0];
            int newC = j + dir[k][1];

            // If the new cell is within bounds and is land (0), perform DFS
            if (newR >= 0 && newR < m && newC >= 0 && newC < n && grid[newR][newC] == 0) {
                dfs(grid, newR, newC, m, n);
            }
        }
    }
}



*/}