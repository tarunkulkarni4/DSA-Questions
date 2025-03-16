{/*
Largest subarray with 0 sum
Difficulty: MediumAccuracy: 41.84%Submissions: 392K+Points: 4Average Time: 20m
Given an array arr containing both positive and negative integers, the task is to compute the length of the largest subarray that has a sum of 0.

Examples:

Input: arr[] = [15, -2, 2, -8, 1, 7, 10, 23]
Output: 5
Explanation: The largest subarray with a sum of 0 is [-2, 2, -8, 1, 7].
Input: arr[] = [2, 10, 4]
Output: 0
Explanation: There is no subarray with a sum of 0.
Input: arr[] = [1, 0, -4, 3, 1, 0]
Output: 5
Explanation: The subarray is [0, -4, 3, 1, 0].


class Solution {
    public int maxLen(int arr[], int k) {
        int n = arr.length;
        int maxLen = 0;

        // Try every subarray arr[i...j]
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += arr[j]; // Compute sum of arr[i...j]

                if (sum == k) { // Check if it matches k
                    maxLen = Math.max(maxLen, j - i + 1);
                }
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int arr[] = {10, 5, 2, 7, 1, 9}; 
        int k = 15;
        System.out.println("Longest subarray length with sum " + k + ": " + sol.maxLen(arr, k));
    }
}



class Solution {
    int maxLen(int arr[]) {
        int n = arr.length;
        int sum = 0;
        int maxLen = 0;
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < n; i++) {
            sum += arr[i];

            // If sum is 0, update maxLen
            if (sum == 0) {
                maxLen = i + 1;
            }

            // If sum is seen before, update maxLen
            if (map.containsKey(sum)) {
                maxLen = Math.max(maxLen, i - map.get(sum));
            } else {
                map.put(sum, i); // Store first occurrence of sum
            }
        }
        return maxLen;
    }


}

*/}