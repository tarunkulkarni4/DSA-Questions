{/*

    Construct K Palindrome Strings

Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

 

Example 1:

Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
Example 2:

Input: s = "leetcode", k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.
Example 3:

Input: s = "true", k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.




 so the overall time complexity is O(n).
  so the overall space complexity is O(1).
    
class Solution {
    public boolean canConstruct(String s, int k) {
        // Check if k is greater than the length of the string
        // If k > length of s, it's impossible to create k palindromes
        if(k > s.length()) {
            return false;
        }

        // Initialize an array to count the frequency of each character ('a' to 'z')
        int[] charcount = new int[26];
        
        // Iterate through the string and increment the count of each character
        for(char ch : s.toCharArray()) {
            charcount[ch - 'a']++; // 'a' maps to index 0, 'b' to 1, ..., 'z' to 25
        }

        // Initialize a variable to keep track of how many characters have odd frequencies
        int oddcount = 0;

        // Loop through the character count array and check for odd frequencies
        for(int count : charcount) {
            // If the count is odd, increment the oddcount variable
            if(count % 2 != 0) {
                oddcount++;
            }
        }       

        // If the number of odd counts is less than or equal to k, it's possible to create k palindromes
        return oddcount <= k;
    }
}


*/}