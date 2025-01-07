{/*
    Reverse Prefix of Word
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

 

Example 1:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
Example 2:

Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
Example 3:

Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".

Solution:

class Solution {
    public String reversePrefix(String word, char ch) {
        int firstOccurrence = word.indexOf(ch);
        if (firstOccurrence == -1) {
            // If the character is not found, return the word as is
            return word;
        }
        
        // Use a stack to reverse the prefix
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i <= firstOccurrence; i++) {
            stack.push(word.charAt(i));
        }
        
        // Build the result string
        StringBuilder result = new StringBuilder();
        while (!stack.isEmpty()) {
            result.append(stack.pop()); // Append reversed characters
        }
        
        // Append the rest of the string
        for (int i = firstOccurrence + 1; i < word.length(); i++) {
            result.append(word.charAt(i));
        }
        
        return result.toString();
    }
}

*/}