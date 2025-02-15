{/*
  Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
 

Constraints:

1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.  
    
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        // Step 1: Find the maximum value in arr1 to determine the size of count array
        int length = 0;
        for (int i = 0; i < arr1.length; i++) {
            length = Math.max(length, arr1[i]);  // Find the maximum element
        }

        // Step 2: Create a frequency array to store occurrences of elements in arr1
        int[] count = new int[length + 1];  // Using length+1 to accommodate all values
        for (int i = 0; i < arr1.length; i++) {
            count[arr1[i]]++;  // Store the frequency of each number in arr1
        }

        // Step 3: Place elements from arr2 into ans[] in their given order
        int index = 0;  
        int[] ans = new int[arr1.length];  
        for (int i = 0; i < arr2.length; i++) {
            while (count[arr2[i]] > 0) {  // If arr2[i] is present in arr1
                ans[index] = arr2[i];  // Place it in ans[]
                index++;  // Move to the next position
                count[arr2[i]]--;  // Decrease its count in the frequency array
            }
        }

        // Step 4: Place remaining elements (not in arr2) in ascending order
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) {  // If element i is still present in count[]
                ans[index] = i;  // Place it in ans[]
                index++;  // Move to the next position
                count[i]--;  // Decrease its count
            }
        }

        return ans;  // Return the sorted array
    }
}

*/}