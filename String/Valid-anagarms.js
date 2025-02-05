{/*
   Valid Anagram

Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

So there are three approaches
1.sorting
2.Hashmap
3.freq Array

1.sorting

class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length())
        {
            return false;
        }
        char[] sArray=s.toCharArray();
        char[] tArray=t.toCharArray();
        Arrays.sort(sArray);
        Arrays.sort(tArray);
        return  Arrays.equals(sArray,tArray);
        }
}
    

2.using Mapping

class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> count = new HashMap<>();
        
        // Count the frequency of characters in string s
        for (char x : s.toCharArray()) {
            count.put(x, count.getOrDefault(x, 0) + 1);
        }
        
        // Decrement the frequency of characters in string t
        for (char x : t.toCharArray()) {
            count.put(x, count.getOrDefault(x, 0) - 1);
        }
        
        // Check if any character has non-zero frequency
        for (int val : count.values()) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}


3.using freqarray

public class AnagramChecker {

    static final int CHAR_RANGE = 256; // Considering extended ASCII

    static boolean areAnagrams(String s1, String s2) {
        // If lengths differ, they cannot be anagrams
        if (s1.length() != s2.length()) {
            return false;
        }

        // Initialize a single frequency array
        int[] freq = new int[CHAR_RANGE];

        // Increment for characters in s1 and decrement for characters in s2
        for (int i = 0; i < s1.length(); i++) {
            freq[s1.charAt(i)]++;
            freq[s2.charAt(i)]--;
        }

        // Check if all counts are zero
        for (int count : freq) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }
}

*/}