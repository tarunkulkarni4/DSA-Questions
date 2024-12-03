{
  /*
    1346. Check If N and Its Double Exist
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.




solution:

import java.util.HashSet;

public class Solution {
    public boolean checkIfExist(int[] arr) {
        // Create a HashSet to store the elements
        HashSet<Integer> set = new HashSet<>();
      for (int i = 0; i < arr.length; i++) {
    int num = arr[i]; // Get the current number
    // Check if the double of num exists in the set
    if (set.contains(num * 2)) {
        return true;
    }
    // Check if half of num exists in the set (only if it's even)
    if (num % 2 == 0 && set.contains(num / 2)) {
        return true;
    }
    // Add the current number to the set
    set.add(num);
}

        
        return false;
    }
}

*/
}
