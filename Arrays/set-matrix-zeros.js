{
  /*
     Set Matrix Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?


Solution:
time is O(mXn)
,space is o(1)


class Solution {
    public void setZeroes(int[][] matrix) {
       // Flags to track if the first row or first column should be zeroed
       boolean firstrow = false;
       boolean firstcol = false;

       // Step 1: Traverse the matrix to mark zeroes
       // Iterate over the entire matrix to find elements that are zero
       for (int i = 0; i < matrix.length; i++) {
           for (int j = 0; j < matrix[0].length; j++) {
               // If we find a zero, mark the corresponding row and column
               if (matrix[i][j] == 0) {
                   // If the element is in the first row, set the first row flag
                   if (i == 0) {
                       firstrow = true;   
                   }
                   // If the element is in the first column, set the first column flag
                   if (j == 0) {
                       firstcol = true;
                   }
                   // Mark the first element of the row and column as zero (in-place markers)
                   matrix[i][0] = 0;
                   matrix[0][j] = 0;
               }
           }
       }

       // Step 2: Use the markers to set the corresponding rows and columns to zero
       // Start from 1 because we already processed the first row and first column
       for (int i = 1; i < matrix.length; i++) {
           for (int j = 1; j < matrix[0].length; j++) {
               // If the element in the first row or first column is zero, set the element to zero
               if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                   matrix[i][j] = 0; 
               }
           }
       }

       // Step 3: Handle the first row if it should be zeroed
       if (firstrow) {
           for (int j = 0; j < matrix[0].length; j++) {
               matrix[0][j] = 0; // Set all elements in the first row to zero
           }
       }

       // Step 4: Handle the first column if it should be zeroed
       if (firstcol) {
           for (int i = 0; i < matrix.length; i++) {
               matrix[i][0] = 0; // Set all elements in the first column to zero
           }
       }
    }
}

    
    
*/
}
