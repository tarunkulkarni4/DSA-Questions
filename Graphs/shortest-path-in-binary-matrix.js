{/*
 
    Shortest Path in Binary Matrix

Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

 

Example 1:


Input: grid = [[0,1],[1,0]]
Output: 2
Example 2:


Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4
Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
 
 Key Differences:
Grid Cell Values:

LeetCode: 0 = free cell, 1 = blocked.

GFG: 1 = free cell, 0 = blocked.

Allowed Directions:

LeetCode: 8 directions (horizontal, vertical, and diagonal).

GFG: 4 directions (up, down, left, right).

Start and Destination:

LeetCode: Always starts at (0, 0) and ends at (n-1, n-1).

GFG: Start and end are given as parameters.

Initial Distance:

LeetCode: Starts with distance 1 (including starting cell).

GFG: Starts with distance 0.

Grid Shape:

LeetCode: Always a square matrix (n x n).

GFG: Can be a rectangular matrix (n x m).

Validation Condition:

LeetCode: Returns -1 if either start or end cell is 1.

GFG: Returns -1 if either start or end cell is 0.






class Pair {
    int dist, row, col;
    Pair(int dist, int row, int col) {
        this.dist = dist;
        this.row = row;
        this.col = col;
    }
}

class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        // Step 1: If the start or end cell is blocked, return -1.
        if (grid[0][0] == 1 || grid[m - 1][n - 1] == 1) {
            return -1;
        }

        // Step 2: Initialize distance matrix with large values (1e9).
        int[][] dis = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dis[i][j] = (int)1e9;
            }
        }

        // Step 3: Set the starting cell's distance to 1 (first move).
        dis[0][0] = 1;

        // Step 4: Use a queue for BFS traversal.
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(1, 0, 0)); // distance, row, col

        // Step 5: Define 8 directions (including diagonals).
        int[][] dir = {
            {-1, 0}, {1, 0}, {0, -1}, {0, 1},
            {-1, -1}, {-1, 1}, {1, -1}, {1, 1}
        };

        // Step 6: Start BFS
        while (!queue.isEmpty()) {
            Pair curr = queue.poll();
            int d = curr.dist;
            int r = curr.row;
            int c = curr.col;

            // Step 7: Try all 8 possible directions.
            for (int k = 0; k < 8; k++) {
                int newR = r + dir[k][0];
                int newC = c + dir[k][1];

                // Step 8: Check bounds, unblocked cell, and shorter distance.
                if (newR >= 0 && newR < m && newC >= 0 && newC < n &&
                    grid[newR][newC] == 0 && d + 1 < dis[newR][newC]) {
                    
                    dis[newR][newC] = d + 1;
                    queue.add(new Pair(d + 1, newR, newC));
                }
            }
        }

        // Step 9: If destination not reachable, return -1.
        return (dis[m - 1][n - 1] == (int)1e9) ? -1 : dis[m - 1][n - 1];
    }
}

    
*/}