{/*
  Word Subsets
Solved
Medium
Topics
Companies
You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

 

Example 1:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]

Output: ["facebook","google","leetcode"]

Example 2:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lc","eo"]

Output: ["leetcode"]

Example 3:

Input: words1 = ["acaac","cccbb","aacbb","caacc","bcbbb"], words2 = ["c","cc","b"]

Output: ["cccbb"]

 

Constraints:

1 <= words1.length, words2.length <= 104
1 <= words1[i].length, words2[i].length <= 10
words1[i] and words2[i] consist only of lowercase English letters.
All the strings of words1 are unique.
    

class Solution {
    public List<String> wordSubsets(String[] words1, String[] words2) {
        // Array to store the maximum frequency of each character required by words2
        int[] maxFreq = new int[26];
        // Temporary array to calculate the frequency of characters for each word in words2
        int[] tempFreq = new int[26];

        // Step 1: Build the `maxFreq` array based on words2
        for (String word : words2) {
            Arrays.
            
            (tempFreq, 0); // Reset tempFreq for the current word in words2
            for (char ch : word.toCharArray()) {
                tempFreq[ch - 'a']++; // Count the frequency of each character in the word
            }
            for (int i = 0; i < 26; i++) {
                // Update maxFreq to ensure it contains the maximum required frequency
                // of each character across all words in words2
                maxFreq[i] = Math.max(maxFreq[i], tempFreq[i]);
            }
        }

        // List to store the resulting universal words from words1
        List<String> universalWords = new ArrayList<>();

        // Step 2: Check each word in words1 against the `maxFreq` array
        for (String word : words1) {
            Arrays.fill(tempFreq, 0); // Reset tempFreq for the current word in words1
            for (char ch : word.toCharArray()) {
                tempFreq[ch - 'a']++; // Count the frequency of each character in the word
            }

            // Assume the word is universal unless proven otherwise
            boolean isUniversal = true;
            for (int i = 0; i < 26; i++) {
                // If the current word does not satisfy the required frequency for any character,
                // mark it as not universal and break the loop
                if (maxFreq[i] > tempFreq[i]) {
                    isUniversal = false;
                    break;
                }
            }

            // If the word satisfies all conditions, add it to the result list
            if (isUniversal) {
                universalWords.add(word);
            }
        }

        // Return the list of universal words
        return universalWords;
    }
}


*/}