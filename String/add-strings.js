{
  /*
    
    Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
 
solution:
time,space is O(n)

class Solution {
    public String addStrings(String num1, String num2 ) {
        StringBuilder result = new StringBuilder();  // result = ""
        int carry = 0;  // carry = 0
        int i = num1.length() - 1;  // i = 2 (last index of num1)
        int j = num2.length() - 1;  // j = 2 (last index of num2)

        // Continue iterating while there are digits in either num1, num2 or there's a carry
        while (i >= 0 || j >= 0 || carry > 0) {
            // Get the digits from num1 and num2, or 0 if out of bounds
            int x = (i >= 0) ? num1.charAt(i) - '0' : 0;  // x = 3 (from num1.charAt(2) initially)
            int y = (j >= 0) ? num2.charAt(j) - '0' : 0;  // y = 6 (from num2.charAt(2) initially)

            // Calculate the sum of the digits and the carry
            int sum = x + y + carry;  // sum = 3 + 6 + 0 = 9 initially

            // Append the last digit of the sum to the result
            result.append(sum % 10);  // sum % 10 = 9, so append 9

            // Update the carry for the next iteration
            carry = sum / 10;  // carry = 9 / 10 = 0

            // Move to the next digits
            i--;  // i = 1
            j--;  // j = 1
        }

        // Reverse the result to get the correct order (since we added digits from right to left)
        return result.reverse().toString();
    }
}
  
                       OR


class Solution {
    String findSum(String s1, String s2) {
        // Create a StringBuilder to store the result
        StringBuilder result = new StringBuilder();
        int carry = 0;

        // Initialize indices to point to the last character of each string
        int i = s1.length() - 1;
        int j = s2.length() - 1;

        // Loop continues until both strings are fully processed or there is a carry
        while (i >= 0 || j >= 0 || carry > 0) {
            // Get the digits from s1 and s2, or use 0 if the string is exhausted
            int x = (i >= 0) ? s1.charAt(i) - '0' : 0;
            int y = (j >= 0) ? s2.charAt(j) - '0' : 0;

            // Calculate the sum of the digits and the carry
            int sum = x + y + carry;

            // Append the last digit of the sum to the result
            result.append(sum % 10);

            // Update the carry for the next iteration
            carry = sum / 10;

            // Move to the next digits
            i--;
            j--;
        }

        // Reverse the result to get the correct order (since we added digits from right to left)
        result.reverse();

        // Remove leading zeros (if any)
        while (result.length() > 1 && result.charAt(0) == '0') {
            result.deleteCharAt(0);
        }
             |
            \ /
        Consider the result 000023:

Initially, result = "000023".
The loop checks the first character ('0') and removes it, so result becomes "00023".
It continues removing leading zeros until the result is "23", which is the correct answer.

        // Return the result (if the result is empty, it means it's zero, so return "0")
        return result.length() == 0 ? "0" : result.toString();
    }
}

*/
}
