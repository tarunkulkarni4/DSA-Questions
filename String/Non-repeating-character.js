{
  /*

    First Unique Character in a String
Solved
Easy
Topics
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 
    
    
    Solyutiob:time,space is o(n),o(1)

    class Solution {
    public int firstUniqChar(String s) {
        // Step 1: Create a frequency array to count occurrences of each character
        // The array has a size of 256 to accommodate all ASCII characters
        int[] freq = new int[256];

        // Step 2: Populate the frequency array by iterating through the string
        for (int i = 0; i < s.length(); i++) {
            // Increment the count of the character at the ASCII index
            freq[s.charAt(i)]++;
        }

        // Step 3: Iterate through the string again to find the first unique character
        for (int i = 0; i < s.length(); i++) {
            // Check if the character's frequency is 1
            if (freq[s.charAt(i)] == 1) {
                // Return the index of the first unique character
                return i;
            }
        }

        // Step 4: If no unique character is found, return -1
        return -1;
    }
}
    
              OR

 Solution:  using Hash map time,space is o(n),o(k)


class Solution {
    public int firstUniqChar(String s) {
        // Step 1: Create a HashMap to store character frequencies
        HashMap<Character, Integer> map = new HashMap<>();

        // Step 2: Populate the HashMap with frequencies of each character
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i); // Get the character at index i
            map.put(c, map.getOrDefault(c, 0) + 1); // Increment its frequency
        }

        // Step 3: Iterate through the string to find the first unique character
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i); // Get the character at index i
            if (map.get(c) == 1) { // Check if its frequency is 1
                return i; // Return the index of the first unique character
            }
        }

        // Step 4: If no unique character is found, return -1
        return -1;
    }
}



    */
}
