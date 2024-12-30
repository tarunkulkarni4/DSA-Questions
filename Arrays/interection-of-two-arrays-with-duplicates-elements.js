{/*
  
    Intersection of Two arrays with Duplicate Elements

Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not have duplicate elements and the result should contain items in any order.

Note: The driver code will sort the resulting array in increasing order before printing.

Examples:

Input: a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
Output: [1, 3]
Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements.

Input: a[] = [1, 1, 1], b[] = [1, 1, 1, 1, 1]
Output: [1]
Explanation: 1 is the only common element present in both the arrays.

Input: a[] = [1, 2, 3], b[] = [4, 5, 6]
Output: []
Explanation: No common element in both the arrays.

Solution::

time complexity of O(n + m) and space final space complexity of the solution is O(n + min(n, m)),

import java.util.*;

class Solution {
    public ArrayList<Integer> intersectionWithDuplicates(int[] a, int[] b) {
        // Step 1: Create a HashSet to store unique elements of array 'a'
        // Example: a = [1, 2, 1, 3, 1]
        HashSet<Integer> setA = new HashSet<>();

        // Step 2: Add all elements of array 'a' to the HashSet using a normal for loop
        // After this loop, setA will contain {1, 2, 3} (no duplicates)
        for (int i = 0; i < a.length; i++) {
            setA.add(a[i]);
        }

        // Step 3: Create an ArrayList to store the result (intersection)
        ArrayList<Integer> result = new ArrayList<>();
        
        // Example: b = [3, 1, 3, 4, 1]
        // We want to find common elements in both arrays a[] and b[]

        // Step 4: Iterate through array 'b' using a normal for loop and check for common elements
        for (int j = 0; j < b.length; j++) {
            // If the current element of b is found in setA, add it to the result and remove it from setA to avoid duplicates
            // First iteration: b[j] = 3, setA = {1, 2, 3}, so 3 is added to result and removed from setA
            // Second iteration: b[j] = 1, setA = {1, 2}, so 1 is added to result and removed from setA
            // setA will be empty after this loop because 3 and 1 are removed from it.
            if (setA.remove(b[j])) {
                result.add(b[j]);
            }
        }

        // Step 5: Return the result (intersection of arrays a[] and b[])
        // result = [3, 1]
        return result;
    }
}


                 OR
time complexity of O(n + m) and space final space complexity of the solution is O(n + min(n, m)) is the final space complexity.

    class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        // Step 1: Create a HashSet to store elements of the first array (nums1)
        HashSet<Integer> seen = new HashSet<>();
        
        // Step 2: Create an ArrayList to store the result (intersection)
        ArrayList<Integer> result = new ArrayList<>();

        // Step 3: Store all elements of the first array (nums1) in the HashSet (seen)
        int n = nums1.length;  // Length of nums1
        int m = nums2.length;  // Length of nums2

        // Example: nums1 = [1, 2, 1, 3, 1]
        // After this loop, seen will contain: {1, 2, 3}
        for (int i = 0; i < n; i++) {
            seen.add(nums1[i]);  // Add elements of nums1 to the HashSet
        }

        // Step 4: Iterate through the second array (nums2) to find common elements
        for (int j = 0; j < m; j++) {
            // If an element from nums2 exists in the HashSet (seen), add it to result and remove it to avoid duplicates
            if (seen.remove(nums2[j])) {
                result.add(nums2[j]);  // Add the common element to the result ArrayList
            }
        }

        // Example: nums2 = [3, 1, 3, 4, 1]
        // After processing, result will contain: [3, 1]

        // Step 5: Convert the result ArrayList to an int array
        int[] resultArray = new int[result.size()];  // Create an array to store the final result
        
        // Copy the elements from the ArrayList (result) into the resultArray
        for (int i = 0; i < result.size(); i++) {
            resultArray[i] = result.get(i);  // Copy each element from the ArrayList to the array
        }

        // Final resultArray will contain: [3, 1] in no specific order
        return resultArray;  // Return the result array containing the intersection of nums1 and nums2
    }
}


    
*/}