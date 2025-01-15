{/*

     Palindrome Number

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

    using inplace so o(n) andd O(1)
    class Solution {
    public boolean isPalindrome(int x) {
        // If the number is negative, it's not a palindrome
        if (x < 0) {
            return false;
        }

        // Store the original number to compare it later
        int originalNumber = x;
        
        // Initialize the reversed number to 0
        int reversedNumber = 0;

        // Reverse the digits of the number
        while (x > 0) {
            // Extract the last digit of the number
            int lastDigit = x % 10;
            
            // Add the last digit to the reversed number (shift digits left)
            reversedNumber = reversedNumber * 10 + lastDigit;
            
            // Remove the last digit from the original number
            x = x / 10;
        }

        // If the reversed number is equal to the original, it is a palindrome
        return reversedNumber == originalNumber;
    }
}
 


            OR
 time,space leads to o(n),o(n)
    class Solution {
    public boolean isPalindrome(int x) {
        // Negative numbers cannot be palindromes
        if (x < 0) {
            return false;
        }

        // Convert the number to a string and then to a character array
        char[] arr = String.valueOf(x).toCharArray();

        // Two-pointer technique
        int left = 0, right = arr.length - 1;

        while (left < right) {
            // Compare elements at left and right pointers
            if (arr[left] != arr[right]) {
                return false; // If mismatch found, it's not a palindrome
            }

            // Move pointers inward
            left++;
            right--;
        }

        // If all pairs matched, it's a palindrome
        return true;
    }
}

    
*/}