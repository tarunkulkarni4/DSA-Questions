{/*
    Problem:
Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 
    
Solution:


class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] freq = new int[26]; // Frequency array for letters 'a' to 'z'

        // Populate frequency array from magazine
        for (int i = 0; i < magazine.length(); i++) {
            freq[magazine.charAt(i) - 'a']++;
        }

        // Check if ransomNote can be constructed
        for (int i = 0; i < ransomNote.length(); i++) {
            char ch = ransomNote.charAt(i);

            // If the character is unavailable, return false
            if (freq[ch - 'a'] == 0) {
                return false;
            }

            // Otherwise, use one occurrence of the character
            freq[ch - 'a']--;
        }

        return true; // All characters were available in magazine
    }
}

*/}