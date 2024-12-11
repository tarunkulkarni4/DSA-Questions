{
  /*
    1.Find Missing and Repeated Values

  
  
Find Missing and Repeated Values

You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

 

Example 1:

Input: grid = [[1,3],[2,2]]
Output: [2,4]
Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].
Example 2:

Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
Output: [9,5]
Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].
 
  solution:

     import java.util.HashMap;

class Solution {
    public int[] findMissingAndRepeatedValues(int[][] grid) {
        // Create a HashMap to track the frequency of elements
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] result = new int[2]; // To store the repeated and missing values
        
        // Loop through the 2D array to populate the HashMap
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                int num = grid[i][j]; // Access each number in the 2D array
                if (map.containsKey(num)) {
                    // If the number is found again, it's the repeated one
                    result[0] = num;
                }
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
        }

        // Find the missing number (1 to n, inclusive)
        int n = grid.length * grid[0].length; // Assuming the grid is a square, or you can use the total number of elements
        for (int i = 1; i <= n; i++) {
            if (!map.containsKey(i)) {
                result[1] = i; // Missing number
                break;
            }
        }

        return result;    
    }
}
       
                   OR

   2.Repeat and Missing Number Array 

   solution:

   public class Solution {
    public ArrayList<Integer> repeatedNumber(final List<Integer> A) {
        // Create a HashMap to track the frequency of elements
        HashMap<Integer, Integer> map = new HashMap<>();
        ArrayList<Integer> result = new ArrayList<>();
        
        // Loop through the array to populate the HashMap
        for (int i=0;i<A.size();i++ ) {
            int num=A.get(i);
            if (map.containsKey(num)) {
                // If a number is found again, it's the repeated one
                result.add(num);
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        // Find the missing number (1 to n, inclusive)
        int n = A.size();
        for (int i = 1; i <= n; i++) {
            if (!map.containsKey(i)) {
                result.add(i);
                break;
            }
        }
        
        return result;
    }
}
*/
}
