{/*
  Valid Parenthesis String

Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "(*)"
Output: true
Example 3:

Input: s = "(*))"
Output: true


class Solution {
    public boolean checkValidString(String s) {
        // First pass: Check for the number of possible opening parentheses
        int openCount = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(' || c == '*') {
                openCount++;  // treat '*' as '('
            } else if (c == ')') {
                openCount--;  // decrement for ')'
            }
            // If openCount becomes negative, there are too many closing parentheses
            if (openCount < 0) {
                return false;
            }
        }

        // Second pass: Check for the number of possible closing parentheses
        int closeCount = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            if (c == ')' || c == '*') {
                closeCount++;  // treat '*' as ')'
            } else if (c == '(') {
                closeCount--;  // decrement for '('
            }
            // If closeCount becomes negative, there are too many opening parentheses
            if (closeCount < 0) {
                return false;
            }
        }

        // If both passes are successful, the string is valid
        return true;
    }
}

   
*/}