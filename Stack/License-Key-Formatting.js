{/*
    License Key Formatting

You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

 

Example 1:

Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:

Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
 

Constraints:

1 <= s.length <= 105
s consists of English letters, digits, and dashes '-'.
1 <= k <= 104


Solution:

using stack

class Solution {
    public String licenseKeyFormatting(String s, int k) {
        Stack<Character> stack = new Stack<>();
        int count = 0;
        
        for (int i = s.length() - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            if (ch != '-') {  // Ignore dashes
                stack.push(Character.toUpperCase(ch));
                count++;

                // Insert dash only if the group of k is complete and it's not the last character
                if (count % k == 0 && i > 0) {
                    stack.push('-');
                }

                
            }
        }
        
        // Handle case where dash is at the front (due to extra push)
        if (!stack.isEmpty() && stack.peek() == '-') {
            stack.pop();
        }

        StringBuilder result = new StringBuilder();
        while (!stack.isEmpty()) {
            result.append(stack.pop());
        }
        
        return result.toString();
    }
}


                                   Or


using stringbuilder :

class Solution {
    public String licenseKeyFormatting(String s, int k) {
        StringBuilder result = new StringBuilder();
        int count = 0;
        
        // Process the string in reverse order
        for (int i = s.length() - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            
            if (ch != '-') {  // Skip dashes
                // Append character in uppercase
                result.append(Character.toUpperCase(ch));
                count++;
                
                // Insert dash after every k characters, except at the beginning
                if (count % k == 0 && i != 0) {
                    result.append('-');
                }
            }
        }
        
        // Reverse the result to get the correct order
        result.reverse();
        
        return result.toString();
    }
}

    
*/}