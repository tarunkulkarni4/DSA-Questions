{/*
    Array Leaders

You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

Examples:

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
Input: arr = [10, 4, 2, 4, 1]
Output: [10, 4, 4, 1]
Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side
Input: arr = [5, 10, 20, 40]
Output: [40]
Explanation: When an array is sorted in increasing order, only the rightmost element is leader.
Input: arr = [30, 10, 10, 5]
Output: [30, 10, 10, 5]
Explanation: When an array is sorted in non-increasing order, all elements are leaders.

optimized:
class Solution {
    static ArrayList<Integer> leaders(int arr[]) {
        int n = arr.length;
        ArrayList<Integer> result = new ArrayList<>();
        int max = Integer.MIN_VALUE;

        // Traverse the array from right to left
        for (int i = n - 1; i >= 0; i--) {
            // If current element is greater than the maximum element seen so far
            if (arr[i] >= max) {
                result.add(arr[i]);
                max = arr[i];
            }
        }

        // The list 'result' now contains leaders in reverse order, so we reverse it
        Collections.reverse(result);

        return result;
    }
}



Brute-force:
import java.util.*;

class Solution {
    static ArrayList<Integer> leaders(int arr[]) {
        int n = arr.length;
        ArrayList<Integer> result = new ArrayList<>();
        
        // Iterate over each element
        for (int i = 0; i < n; i++) {
            boolean isLeader = true;
            
            // Compare with all elements to the right
            for (int j = i + 1; j < n; j++) {
                if (arr[i] < arr[j]) {
                    isLeader = false;
                    break;
                }
            }
            
            // If current element is greater than or equal to all elements on the right, it's a leader
            if (isLeader) {
                result.add(arr[i]);
            }
        }
        
        return result;
    }
}

*/}