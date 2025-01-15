{/*
   Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8 

Approach:

Start with an empty string: Begin the recursive process with no parentheses added (open = 0, close = 0).

Add opening parentheses '(': If the count of opening parentheses is less than n (open < max), add '(' to the string and recurse with open + 1.

Add closing parentheses ')': If the count of closing parentheses is less than the count of opening parentheses (close < open), add ')' to the string and recurse with close + 1.

Base case: When the string length equals 2 * n, it represents a valid combination of parentheses. Add this string to the result list.

Backtracking: After adding a valid string or exhausting a path, backtrack by returning to the previous state and exploring other possibilities.

Final result: Once all recursive branches are explored, return the list containing all valid combinations of parentheses.



Time Complexity:O(4 n /√n)
Space Complexity: O(n) (for the recursion stack, excluding the result storage).


class Solution {
    public List<String> generateParenthesis(int n) {
        // Create a list to store all valid combinations of parentheses
        List<String> result = new LinkedList<>();

        // Start the recursive process with initial parameters
        generate(result, n, 0, 0, "");

        // Return the final list of valid combinations
        return result;
    }

    private void generate(List<String> result, int max, int open, int close, String str) {
        // If the number of opening parentheses is less than the maximum allowed
        if (open < max) {
            // Add an opening parenthesis and make a recursive call
            generate(result, max, open + 1, close, str + "(");
        }

        // If the number of closing parentheses is less than the number of opening parentheses
        if (close < open) {
            // Add a closing parenthesis and make a recursive call
            generate(result, max, open, close + 1, str + ")");
        }

        // Base case: If the current string's length is equal to 2 * max
        if (str.length() == 2 * max) {
            // Add the valid combination to the result list
            result.add(str);
            return; // End the current recursive call
        }
    }
}


*/}