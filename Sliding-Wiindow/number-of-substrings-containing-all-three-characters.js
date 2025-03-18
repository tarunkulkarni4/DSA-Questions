{/*
 
    Number of Substrings Containing All Three Characters - LeetCode

    Number of Substrings Containing All Three Characters

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

BruteForce:

class Solution {
    public int numberOfSubstrings(String s) {
        int count = 0;
        int n = s.length();

        // Outer loop: Start index of substring
        for (int i = 0; i < n; i++) {
            boolean hasA = false, hasB = false, hasC = false;
            
            // Inner loop: End index of substring
            for (int j = i; j < n; j++) {  
                if (s.charAt(j) == 'a') hasA = true;
                if (s.charAt(j) == 'b') hasB = true;
                if (s.charAt(j) == 'c') hasC = true;
                
                // If we have found at least one 'a', 'b', and 'c', count this substring
                if (hasA && hasB && hasC) {
                    count++;
                }
            }
        }
        return count;
    }
}


Using SlidingWinodow:

class Solution {
    public int numberOfSubstrings(String s) {
        int[] freq = new int[3]; // Frequency of 'a', 'b', 'c'
        int left = 0, count = 0;

        for (int right = 0; right < s.length(); right++) {
            freq[s.charAt(right) - 'a']++;

            while (freq[0] > 0 && freq[1] > 0 && freq[2] > 0) {
                count += s.length() - right;  // Count substrings
                freq[s.charAt(left) - 'a']--; // Shrink window
                left++;
            }
        }
        return count;
    }
}


*/}