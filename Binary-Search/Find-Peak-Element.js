{
  /*
    Find Peak Element
Solved
Medium
Topics
Companies
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 
solution
   1.

   class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) { // Continue until left meets right
            int mid = left + (right - left) / 2; // Avoid potential overflow
            
            // Compare mid with its right neighbor
            if (nums[mid] < nums[mid + 1]) {
                left = mid + 1; // Move to the right half
            } else {
                right = mid; // Move to the left half
            }
        }

        // At the end, left and right converge to the peak index
        return left; 
    }
}
    

                OR

    Given an array of integers A, find and return the peak element in it.

An array element is peak if it is NOT smaller than its neighbors. 

For corner elements, we need to consider only one neighbor. 

For example, for input array {5, 10, 20, 15}, 20 is the only peak element.

Following corner cases give better idea about the problem.

1) If input array is sorted in strictly increasing order, the last element is always a peak element. 
For example, 5 is peak element in {1, 2, 3, 4, 5}.
2) If input array is sorted in strictly decreasing order, the first element is always a peak element. 
10 is the peak element in {10, 9, 8, 7, 6}.
Note: It is guranteed that the answer is unique.




Input Format

The only argument given is the integer array A.
Output Format

Return the peak element.
Constraints

1 <= length of the array <= 100000
1 <= A[i] <= 10^9 
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    5

Input 2:
    A = [5, 17, 100, 11]
Output 2:
    100


    solution:

    import java.util.ArrayList;

public class Solution {
    public int solve(ArrayList<Integer> A) {
        int left = 0;
        int right = A.size() - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            // Check if the mid element is greater than or equal to its neighbors
            if ((mid == 0 || A.get(mid) >= A.get(mid - 1)) && (mid == A.size() - 1 || A.get(mid) >= A.get(mid + 1))) {
                return A.get(mid);  // Mid is the peak element
            }
            // If the next element is greater than the current, peak must be on the right
            else if (mid < A.size() - 1 && A.get(mid) < A.get(mid + 1)) {
                left = mid + 1;
            }
            // If the previous element is greater than the current, peak must be on the left
            else {
                right = mid - 1;
            }
        }

        return -1;  // This will never be reached due to the guarantee of a peak element
    }
}

*/
}
