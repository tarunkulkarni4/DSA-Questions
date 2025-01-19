{/*
   
    Remove Outermost Parentheses
Solved
Easy
Topics
Companies
Hint
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
 

Constraints:
    
    class Solution {
    public String removeOuterParentheses(String s) {
        // Stack to track open parentheses
        Stack<Character> stack = new Stack<>();
        
        // StringBuilder to store the final result
        StringBuilder result = new StringBuilder();

        // Loop through each character in the string
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i); // Get the current character

            // Check if the character is an opening parenthesis '('
            if (ch == '(') {
                if (stack.isEmpty()) {
                    // If the stack is empty, this is the outermost '('
                    // Do nothing, as we don't include the outermost '('
                } else {
                    // If the stack is not empty, add this '(' to the result
                    result.append(ch);
                }
                // Push the '(' onto the stack
                stack.push(ch);
            } else { // Else, the character is a closing parenthesis ')'
                if (ch == ')') {
                    // Pop the matching '(' from the stack
                    stack.pop();
                }
                // If the stack is not empty, this ')' is not outermost
                if (!stack.isEmpty()) {
                    // Add this ')' to the result
                    result.append(ch);
                }
            }
        }

        // Convert the StringBuilder to a string and return the result
        return result.toString();
    }
}

*/}