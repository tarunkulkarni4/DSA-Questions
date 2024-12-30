{/*
   
    
    Intersection Of Two Sorted Arrays

Problem statement
You are given two arrays 'A' and 'B' of size 'N' and 'M' respectively. Both these arrays are sorted in non-decreasing order. You have to find the intersection of these two arrays.

Intersection of two arrays is an array that consists of all the common elements occurring in both arrays.

Note :
1. The length of each array is greater than zero.
2. Both the arrays are sorted in non-decreasing order.
3. The output should be in the order of elements that occur in the original arrays.
4. If there is no intersection present then return an empty array.
    

Solution:

import java.util.*;

public class Solution {
    public static ArrayList<Integer> findArrayIntersection(ArrayList<Integer> arr, int N, ArrayList<Integer> brr, int M) {
        ArrayList<Integer> result = new ArrayList<>();
        int i = 0, j = 0;

        // Traverse both arrays with two pointers
        while (i < N && j < M) {
            // If elements are equal, add to the result
            if (arr.get(i) == brr.get(j)) {
                result.add(arr.get(i));
                i++;
                j++;
            }
            // If element in the first array is smaller, move the first pointer
            else if (arr.get(i) < brr.get(j)) {
                i++;
            }
            // If element in the second array is smaller, move the second pointer
            else {
                j++;
            }
        }

        // If no intersection found, return [-1]
        if (result.isEmpty()) {
            result.add(-1);
        }

        return result;
    }
}

. The time complexity remains O(max(N, M)), and the space complexity is O(1) aside from the space needed for the result.
    
*/}