{/*

    Buddy Strings

Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
    

class Solution {
    public boolean buddyStrings(String s, String goal) {
        if (s.length() != goal.length()) return false;

        // Case 1: If strings are equal, check for duplicate characters
        if (s.equals(goal)) {
            int[] freq = new int[26];
            for (int i = 0; i < s.length(); i++) {
                freq[s.charAt(i) - 'a']++;
                if (freq[s.charAt(i) - 'a'] > 1) return true;
            }
            return false;
        }

        // Case 2: If strings are different, find exactly two mismatches
        int first = -1, second = -1, misMatch = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != goal.charAt(i)) { // Found a mismatch
                misMatch++;

                if (misMatch == 1) {
                    first = i;
                } else if (misMatch == 2) {
                    second = i;
                } else {
                    return false; // More than 2 mismatches → return false
                }
            }
        }

        // Ensure exactly two differences and swapping makes them equal
        return (misMatch == 2 && 
                s.charAt(first) == goal.charAt(second) &&
                s.charAt(second) == goal.charAt(first));
    }
}

*/}