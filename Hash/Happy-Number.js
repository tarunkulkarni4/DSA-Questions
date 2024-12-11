{
  /*

    Question:

Happy Number
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.


Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

Solution: time  and space complxiety is O(1)

    class Solution {
    public boolean isHappy(int n) {
        // Create a HashSet to store numbers we've already seen (to detect cycles)
        Set<Integer> usedIntegers = new HashSet<>();
        
        // Infinite loop to repeatedly process the number
        while (true) {
            int sum = 0; // Variable to store the sum of squares of digits
            
            // Inner loop to calculate the sum of squares of digits of the current number
            while (n != 0) {
                sum += Math.pow(n % 10, 2.0); // Add the square of the last digit of 'n' to 'sum'
                n = n / 10; // Remove the last digit from 'n'
            }

            oR

             while (n != 0) {
                int digit = n % 10; // Extract the last digit
                sum += digit * digit; // Add the square of the digit
                n = n / 10; // Remove the last digit
            }
            
            // If the sum becomes 1, the number is happy
            if (sum == 1) {
                return true;
            }
            
            // Update 'n' with the sum to continue the process
            n = sum;
            
            // Check if the number has already been seen (cycle detection)
            if (usedIntegers.contains(n)) {
                return false; // If a cycle is detected, the number is not happy
            } else {
                // Add the current sum to the set of seen numbers
                usedIntegers.add(n);
            }
        }
    }
}

    
    */
}
