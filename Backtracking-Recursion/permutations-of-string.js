{/*
    Permutations of a String

Given a string s. The task is to return a vector of string of all unique permutations of the given string, s that may contain duplicates in lexicographically sorted order. 

Examples:

Input: "ABC"
Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
Explanation: Given string ABC has permutations in 6 forms as "ABC", "ACB", "BAC", "BCA", "CAB" and "CBA".
Input: "ABSG"
Output: ["ABGS", "ABSG", "AGBS", "AGSB", "ASBG", "ASGB", "BAGS", "BASG", "BGAS", "BGSA", "BSAG", "BSGA", "GABS", "GASB", "GBAS", "GBSA", "GSAB", "GSBA", "SABG", "SAGB", "SBAG", "SBGA", "SGAB", "SGBA"]
Explanation: Given string ABSG has 24 permutations.
Input: "AAA"
Output: ["AAA"]
Explanation: No other unique permutations can be formed as all the characters are same.

Solution:

import java.util.*;

class Solution {
    public List<String> findPermutation(String s) {
        List<String> results = new ArrayList<>();
        char[] chars = s.toCharArray();
        Arrays.sort(chars);  // Sort the characters to handle duplicates
        backtrack(results, new StringBuilder(), chars, new boolean[s.length()]);
        return results;
    }

    private void backtrack(List<String> results, StringBuilder tempSet, char[] chars, boolean[] used) {
        // Base case: if the current permutation's length is equal to the string length, add to results
        if (tempSet.length() == chars.length) {
            results.add(tempSet.toString());
            return;
        }

        for (int i = 0; i < chars.length; i++) {
            // Skip if the character is already used or if it's a duplicate character that was not used in the previous position
            if (used[i] || (i > 0 && chars[i] == chars[i - 1] && !used[i - 1])) {
                continue;
            }
            // Mark the character as used
            used[i] = true;
            // Add the character to the current permutation
            tempSet.append(chars[i]);
            // Recursively build the next level of the permutation
            backtrack(results, tempSet, chars, used);
            // Backtrack: remove the last added character and mark it as unused
            tempSet.deleteCharAt(tempSet.length() - 1);
            used[i] = false;
        }
    }
}

*/}