{/*
     Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
 
    Soltution:


    class Solution {
    public boolean validMountainArray(int[] arr) {
        int n = arr.length;  // Get the length of the array

        // If the length of the array is less than 3, it cannot form a valid mountain
        if (n < 3) {
            return false;
        }

        int i = 0;  // Initialize a pointer i to traverse the array

        // First, traverse while the elements are strictly increasing
        while (i < n - 1 && arr[i] < arr[i + 1]) {
            i++;  // Move to the next element
        }

        // If we haven't moved (i == 0) or we've reached the end (i == n - 1), it's not a valid mountain
        if (i == 0 || i == n - 1) {
            return false;
        }

        // Now, traverse while the elements are strictly decreasing
        while (i < n - 1 && arr[i] > arr[i + 1]) {
            i++;  // Move to the next element
        }

        // If we've reached the end of the array, it's a valid mountain
        return i == n - 1;
    }

    // Time Complexity: O(N) - We traverse the array twice, once for the increasing phase and once for the decreasing phase.
    // Space Complexity: O(1) - We use only a constant amount of extra space (variable 'i').
}

*/}