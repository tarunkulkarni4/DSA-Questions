{/*
 
    Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

Solution:
import java.util.*;

public class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix == null || matrix.length == 0) return result;

        int rowStart = 0, rowEnd = matrix.length - 1;
        int colStart = 0, colEnd = matrix[0].length - 1;

        while (rowStart <= rowEnd && colStart <= colEnd) {
            // Traverse from left to right
            for (int col = colStart; col <= colEnd; col++) {
                result.add(matrix[rowStart][col]);
            }
            rowStart++;

            // Traverse from top to bottom
            for (int row = rowStart; row <= rowEnd; row++) {
                result.add(matrix[row][colEnd]);
            }
            colEnd--;

            // Traverse from right to left (if rows remain)
            if (rowStart <= rowEnd) {
                for (int col = colEnd; col >= colStart; col--) {
                    result.add(matrix[rowEnd][col]);
                }
                rowEnd--;
            }

            // Traverse from bottom to top (if columns remain)
            if (colStart <= colEnd) {
                for (int row = rowEnd; row >= rowStart; row--) {
                    result.add(matrix[row][colStart]);
                }
                colStart++;
            }
        }
        return result;
    }

}

    
    
*/}