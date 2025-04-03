{/*
 Surrounded Regions

You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:


In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]

Approach:

Mark boundary-connected 'O's as 'V' using DFS.

Convert all remaining 'O's to 'X' (they are surrounded).

Convert 'V' back to 'O' (restore non-surrounded regions).

Solution:

public class Solution {
    public static void replaceOWithX(char matrix[][]) {
        int m = matrix.length;
        int n = matrix[0].length;

        // Step 1: Mark boundary-connected 'O's as 'V'
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 'O') floodFill(matrix, i, 0, m, n);
            if (matrix[i][n - 1] == 'O') floodFill(matrix, i, n - 1, m, n);
        }

        for (int j = 0; j < n; j++) {  // Fixed here (was m instead of n)
            if (matrix[0][j] == 'O') floodFill(matrix, 0, j, m, n);
            if (matrix[m - 1][j] == 'O') floodFill(matrix, m - 1, j, m, n);  // Fixed here (was 0 instead of j)
        }

        // Step 2: Convert all 'O' to 'X'
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 'O') matrix[i][j] = 'X';
            }
        }

        // Step 3: Convert 'V' back to 'O'
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 'V') matrix[i][j] = 'O';
            }
        }
    }

    private static void floodFill(char[][] matrix, int i, int j, int m, int n) {
        matrix[i][j] = 'V';

        int[][] dir = { {-1, 0}, {1, 0}, {0, 1}, {0, -1} };
        for (int k = 0; k < 4; k++) {
            int r = i + dir[k][0];
            int c = j + dir[k][1];

            if (r >= 0 && r < m && c >= 0 && c < n && matrix[r][c] == 'O') {
                floodFill(matrix, r, c, m, n);
            }
        }
    }
}


Using bfs:

import javafx.util.Pair; 
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public static void replaceOWithX(char matrix[][]) {
        int m = matrix.length;
        int n = matrix[0].length;
        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();

        // Step 1: Mark boundary-connected 'O's using BFS
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 'O') {
                queue.add(new Pair<>(i, 0));
                matrix[i][0] = 'V';
            }
            if (matrix[i][n - 1] == 'O') {
                queue.add(new Pair<>(i, n - 1));
                matrix[i][n - 1] = 'V';
            }
        }

        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 'O') {
                queue.add(new Pair<>(0, j));
                matrix[0][j] = 'V';
            }
            if (matrix[m - 1][j] == 'O') {
                queue.add(new Pair<>(m - 1, j));
                matrix[m - 1][j] = 'V';
            }
        }

        int[][] dir = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        while (!queue.isEmpty()) {
            Pair<Integer, Integer> cell = queue.poll();
            int x = cell.getKey(), y = cell.getValue();

            for (int[] d : dir) {
                int newX = x + d[0];
                int newY = y + d[1];

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && matrix[newX][newY] == 'O') {
                    queue.add(new Pair<>(newX, newY));
                    matrix[newX][newY] = 'V';
                }
            }
        }

        // Step 2: Convert all remaining 'O's to 'X'
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 'O') matrix[i][j] = 'X';
            }
        }

        // Step 3: Convert all 'V' back to 'O'
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 'V') matrix[i][j] = 'O';
            }
        }
    }
}

*/}