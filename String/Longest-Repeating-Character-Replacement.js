{/*
  
    424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 
Solution:


class Solution {
    public int characterReplacement(String s, int k) {
        int[] freq = new int[26]; // Frequency array for characters
        int start = 0;            // Left pointer of the window
        int maxWindow = 0;        // Maximum length of a valid window
        int maxFreq = 0;          // Maximum frequency of any single character in the window

        // Traverse the string with the right pointer
        for (int end = 0; end < s.length(); end++) {
            char ch = s.charAt(end);
            freq[ch - 'A']++; // Increment the frequency of the current character

            // Update the maximum frequency of any character in the current window
            maxFreq = Math.max(maxFreq, freq[ch - 'A']);

            // Calculate the current window length
            int windowLength = end - start + 1;

            // Check if the window is invalid
            if (windowLength - maxFreq > k) {
                // Shrink the window by moving the left pointer
                freq[s.charAt(start) - 'A']--;
                start++;
            }

            // Update the maximum window size
            maxWindow = Math.max(maxWindow, end - start + 1);
        }

        return maxWindow; // Return the length of the longest valid window
    }
}

*/}