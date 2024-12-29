{/*
    
69. Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:


Solution:

Time and space is O(log(x)) and o(1)
class Solution {
    public int mySqrt(int x) {
        // Special case for x = 0, as the square root of 0 is 0
        if (x == 0) {
            return 0;
        }

        // Initialize low and high pointers for binary search
        int low = 1;
        int high = x;

        // Binary search loop
        while (low <= high) {
            // Calculate the mid value to avoid overflow
            int mid = low + (high - low) / 2;

            // Check if mid is the square root of x
            if (mid == x / mid) {
                return mid;  // If mid * mid == x, return mid
            } else if (mid < x / mid) {
                // If mid * mid < x, move the left boundary up (increase low)
                low = mid + 1;
            } else {
                // If mid * mid > x, move the right boundary down (decrease high)
                high = mid - 1;
            }
        }

        // Return the integer part of the square root
        return high;
    }
}

    
*/}