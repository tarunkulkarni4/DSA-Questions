{/*
    Valid Perfect Square

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 

Using mathematical ,,

class Solution {
    public boolean isPerfectSquare(int num) {
        int oddSum = 1;
        int sum = 1;

        while (sum <= num) { // Keep summing odd numbers until we reach or exceed num
            if (sum == num) {
                return true; // If sum equals num, it's a perfect square
            }
            oddSum += 2; // Get next odd number
            sum += oddSum; // Add it to sum
        }
        return false; // If we exceed num, it's not a perfect square
    }
}



Optimized:

class Solution {
    public boolean isPerfectSquare(int num) {
        if (num < 2) return true;  // 0 and 1 are perfect squares

        long left = 1, right = num;
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long square = mid * mid;

            if (square == num) return true;
            else if (square < num) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }
}


bruteForce:

class Solution {
    public boolean isPerfectSquare(int num) {
        for (long i = 1; i * i <= num; i++) {  // Use long to avoid overflow
            if (i * i == num) return true;
        }
        return false;
    }
}



class Solution {
    public boolean isPerfectSquare(int num) {
        int sqrt = (int) Math.sqrt(num);
        return sqrt * sqrt == num; // Check if it's a perfect square
    }
}


*/}