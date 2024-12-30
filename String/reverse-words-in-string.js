{/*

    Reverse Words in a String
Solved
Medium
Topics
Companies
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 
Solution:

time ,space is 0(n)

class Solution {
    public String reverseWords(String s) {
        // Trim leading/trailing spaces and split the string into words
        // Example: "  The quick brown fox  " -> ["The", "quick", "brown", "fox"]
        String[] words = s.trim().split("\\s+");
        
        // StringBuilder to build the reversed string
        StringBuilder string = new StringBuilder();

        // Iterate through the words array in reverse order
        // Example: The original array is ["The", "quick", "brown", "fox"]
        for (int i = words.length - 1; i >= 0; i--) {
            // Append the current word to the result
            string.append(words[i]);
            
            // If it's not the first word, append a space between words
            // This ensures that there is only one space between the words
            // Example: On iteration i=2, we add "brown " (note the space)
            if (i > 0) {
                string.append(" ");
            }
        }
        
        // Return the resulting reversed string
        // Example: "fox brown quick The"
        return string.toString();
    }
}

*/}