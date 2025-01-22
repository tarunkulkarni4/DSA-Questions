
{/*

    Problem Statement:
    . Kth Missing Positive Number

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
 

Follow up:

Could you solve this problem in less than O(n) complexity?

Brute force: tc iso(n),o(1)

class Solution {
    public int findKthPositive(int[] arr, int k) {
        // Loop through each element in the array
        for (int i : arr) {
            // If the current number is less than or equal to k,
            // it means it is not missing, so we increment k.
            if (i <= k) {
                k++; // We move to the next number
            } else {
                // If i is greater than k, it means we have found all missing numbers before i
                // So, we stop the loop.
                break;
            }
        }
        // Once the loop is finished, return the value of k, which now represents
        // the kth missing number.
        return k;
    }
}





                              OR

using binary serach bcz asked tc should be less than o(n) so[

class Solution {
    public int findKthPositive(int[] arr, int k) {
        // Initialize the low and high pointers for binary search
        int low = 0;
        int high = arr.length - 1;

        // Perform binary search to find the position where the kth missing number lies
        while (low <= high) {
            // Calculate the mid index of the current search range
            int mid = (low + high) / 2;

            // Calculate the number of missing numbers up to the current element arr[mid]
            int missingCount = arr[mid] - (mid + 1);

            // If the number of missing numbers up to arr[mid] is less than k,
            // move the left pointer to mid + 1 (search in the right half)
            if (missingCount < k) {
                low = mid + 1;
            } else {
                // Otherwise, search in the left half by moving the high pointer to mid - 1
                high = mid - 1;
            }
        }

        // After binary search, `low` will be pointing to the position where the kth missing number should be
        // Return the kth missing number using the formula: low + k
        return low + k;
    }
}


*/}