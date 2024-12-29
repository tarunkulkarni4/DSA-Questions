{/*
   1.Brute froce approach  
Time Complexity: 
O(m×n), as it checks every element in the matrix; 

Space Complexity: 
O(1), as no additional data structures are used. 
    class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;       // Number of rows
        int n = matrix[0].length;    // Number of columns

        // Iterate through each element of the matrix
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == target) {
                    return true; // Target found
                }
            }
        }

        // If target is not found, return false
        return false;
    }
}
            
    
                           OR


    2.using binary search   O(Log(M∗N))


    class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        int n = matrix[0].length;

        int left = 0;
        int right = m * n - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int midValue = matrix[mid / n][mid % n]; // Convert 1D index to 2D

            if (midValue == target) {
                return true;  // Target found
            } else if (midValue < target) {
                left = mid + 1;  // Search in the right half
            } else {
                right = mid - 1;  // Search in the left half
            }
        }

        return false;  // Target not found
    }
}



                OR

                public class Solution {
    public int searchMatrix(ArrayList<ArrayList<Integer>> A, int B) {
        int m=A.size();
        int n=A.get(0).size();
       int low=0;
       int high=m*n-1;
       
       while(low<=high)
       {
           int mid=(low+high)/2;
           int midValue = A.get(mid / n).get(mid % n);
           if(midValue==B)
           {
               return 1;
           }
           else if(midValue<B)
           {
               low=mid+1;
           }
           else{
              high=mid-1; 
           }
       }
       return 0;
    }
}

*/}