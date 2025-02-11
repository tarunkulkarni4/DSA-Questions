{/*
    Clear Digits
Solved
Easy
Topics
Companies
Hint
You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits.

 

Example 1:

Input: s = "abc"

Output: "abc"

Explanation:

There is no digit in the string.

Example 2:

Input: s = "cb34"

Output: ""

Explanation:

First, we apply the operation on s[2], and s becomes "c4".

Then we apply the operation on s[1], and s becomes "".

Solution:


import java.util.Stack;

class Solution {
    public String clearDigits(String s) {
        Stack<Character> stack = new Stack<>();  // Use Character instead of String for efficiency

        // Traverse the string character by character
        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);

            if (Character.isDigit(currentChar)) {
                // If it's a digit, remove the closest non-digit from the stack
                if (!stack.isEmpty() && !Character.isDigit(stack.peek())) {
                    stack.pop();  // Remove the closest non-digit character
                }
            } else {
                // If it's not a digit, add it to the stack
                stack.push(currentChar);
            }
        }

        // Convert the stack to a result string using StringBuilder
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < stack.size(); i++) {
            result.append(stack.get(i));  // Add each character from the stack to result
        }

        // Return the final string
        return result.toString();
    }
}

    */}