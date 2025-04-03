{/*
   Number of Islands
Solved
Medium
Topics
Companies
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
    
    using dfs:

    class Solution {
    public int numIslands(char[][] grid) {
        int m = grid.length; // Number of rows in the grid
        int n = grid[0].length; // Number of columns in the grid

        boolean[][] vis = new boolean[m][n]; // Visited array to track visited cells
        int count = 0; // Counter for the number of islands

        // Iterate through each cell in the grid
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // If the current cell is land ('1') and has not been visited, it's a new island
                if (grid[i][j] == '1' && !vis[i][j]) {
                    count++; // Increment island count
                    dfs(grid, vis, i, j, m, n); // Perform DFS to mark the entire island
                }
            }
        }
        return count; // Return the total number of islands found
    }

    // Depth-First Search (DFS) function to explore the island
    private void dfs(char[][] grid, boolean[][] vis, int i, int j, int m, int n) {
        vis[i][j] = true; // Mark the current cell as visited

        // Define possible directions: left, right, up, down
        int[][] dirs = { {0, -1}, {0, 1}, {-1, 0}, {1, 0} };

        // Explore all four directions
        for (int k = 0; k < 4; k++) {
            int newR = i + dirs[k][0]; // New row index
            int newC = j + dirs[k][1]; // New column index

            // Check if the new cell is within bounds, is land ('1'), and is unvisited
            if (newR >= 0 && newR < m && newC >= 0 && newC < n && grid[newR][newC] == '1' && !vis[newR][newC]) {
                dfs(grid, vis, newR, newC, m, n); // Recursively visit the new cell
            }
        }
    }
}


using bfs:

Use a queue (BFS traversal) to explore all land ('1') cells connected to the current land cell.

Use a visited array (vis[][]) to mark cells we have already processed.

Initialize a counter (count) to track the number of islands.

For each unvisited land cell ('1'),

Increment count (found a new island).

Perform BFS to mark all connected land cells as visited.

Process the BFS queue:

Dequeue the current cell.

Explore 4 directions (up, down, left, right).

If a neighboring cell is land ('1') and not visited, mark it as visited and add it to the queue.

Repeat until all islands are counted.

import java.util.*;

class Solution {
    // Custom class to store row and column positions
    class Pair {
        int row, col;
        public Pair(int row, int col) {
            this.row = row;
            this.col = col;
        }
    }

    public int numIslands(char[][] grid) {
        int count = 0; // Counter for number of islands
        int m = grid.length; // Number of rows
        int n = grid[0].length; // Number of columns

        // Directions for moving up, down, left, right
        int[][] dir = { {1, 0}, {-1, 0}, {0, 1}, {0, -1} };

        // Visited array to track explored cells
        boolean[][] vis = new boolean[m][n];

        // Iterate through every cell in the grid
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // If the cell is land ('1') and not visited, it's a new island
                if (grid[i][j] == '1' && !vis[i][j]) {
                    count++; // Increment island count
                    Queue<Pair> queue = new LinkedList<>(); // BFS queue
                    queue.add(new Pair(i, j)); // Add current cell to queue
                    vis[i][j] = true; // Mark it as visited

                    // Perform BFS traversal
                    while (!queue.isEmpty()) {
                        Pair curr = queue.remove(); // Dequeue current cell
                        int r = curr.row;
                        int c = curr.col;

                        // Explore 4 possible directions
                        for (int k = 0; k < 4; k++) {
                            int newR = r + dir[k][0];
                            int newC = c + dir[k][1];

                            // Check if new position is within bounds and is unvisited land
                            if (newR >= 0 && newR < m && newC >= 0 && newC < n && grid[newR][newC] == '1' && !vis[newR][newC]) {
                                queue.add(new Pair(newR, newC)); // Add to queue
                                vis[newR][newC] = true; // Mark as visited
                            }
                        }
                    }
                }
            }
        }
        return count; // Return total number of islands
    }
}

*/}