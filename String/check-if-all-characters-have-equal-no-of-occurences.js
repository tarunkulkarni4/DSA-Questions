{
    /*
    Check if All Characters Have Equal Number of Occurrences
Solved
Easy
Topics
Companies
Hint
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 


class Solution {
    public boolean areOccurrencesEqual(String s) {
        int[] freq = new int[26];  // To store frequency of each letter from 'a' to 'z'
        
        // Count frequency of each character in the string
        for (int i = 0; i < s.length(); i++) {
            freq[s.charAt(i) - 'a']++;
        }

        // Get the frequency of the first character to compare with others
        int val = freq[s.charAt(0) - 'a'];

        // Check if every non-zero frequency is equal to the frequency of the first character
        for (int i = 0; i < 26; i++) {
            if (freq[i] != 0 && freq[i] != val) {
                return false; // Return false if a character has a different frequency
            }
        }

        return true; // If all frequencies are equal, return true
    }
}

    */
}