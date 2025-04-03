{/*
    01 Matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two cells sharing a common edge is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

import java.util.*;

class Solution {
    public class pair {
        int first, second, steps;
        public pair(int first, int second, int steps) {
            this.first = first;
            this.second = second;
            this.steps = steps;
        }
    }

    public int[][] updateMatrix(int[][] mat) {
        int m = mat.length;
        int n = mat[0].length;

        Queue<pair> queue = new LinkedList<>();
        int[][] vis = new int[m][n];
        int[][] dis = new int[m][n];

        // Step 1: Add all '0' cells to the queue
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 0) {
                    vis[i][j] = 1; // Mark visited
                    queue.add(new pair(i, j, 0));
                }
            }
        }

        // Step 2: BFS Traversal
        int[][] dir = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
        while (!queue.isEmpty()) {
            pair curr = queue.remove();
            int r = curr.first;
            int c = curr.second;
            int steps = curr.steps;

            dis[r][c] = steps; // Store the distance

            for (int i = 0; i < 4; i++) {
                int newR = r + dir[i][0];
                int newC = c + dir[i][1];

                if (newR >= 0 && newR < m && newC >= 0 && newC < n && vis[newR][newC] == 0) {
                    vis[newR][newC] = 1; // Mark as visited
                    queue.add(new pair(newR, newC, steps + 1));
                }
            }
        }
        return dis;
    }
}


*/}