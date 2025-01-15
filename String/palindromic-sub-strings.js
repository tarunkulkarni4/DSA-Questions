{/*

    Palindrome SubStrings
Difficulty: MediumAccuracy: 45.8%Submissions: 28K+Points: 4
Given a string s, count all palindromic sub-strings present in the string. The length of the palindromic sub-string must be greater than or equal to 2. 

Examples

Input: s = "abaab"
Output: 3
Explanation: All palindromic substrings are : "aba" , "aa" , "baab"
Input: s = "abbaeae"
Output: 4
Explanation: All palindromic substrings are : "bb" , "abba" , "aea", "eae"
Input: s = "noonmadamracecar"
Output: 7
Explanation: All palindromic substrings are: "noon", "oo", "madam", "ada", "racecar", "cec", "aceca"
Constraints:
2 ≤ s.size() ≤ 500
string contains only lowercase english characters


tc,spcae is o(n2) ,o(1) bcz backward and forward travesing 
class Solution {
    public int CountPs(String s) {
        int n = s.length();
        int count = 0;

        // Loop through each character in the string
        for (int i = 0; i < n; i++) {
            // Count palindromes with odd length (centered at 'i')
            count += countPalindrome(s, i, i);
            // Count palindromes with even length (centered between 'i' and 'i+1')
            count += countPalindrome(s, i, i + 1);
        }

        // Return the total count of palindromic substrings of length >= 2
        return count;
    }

    // Helper function to count palindromic substrings from a given center
    private int countPalindrome(String s, int left, int right) {
        int count = 0;

        // Expand around the center while the substring is a palindrome
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            // Only consider substrings of length >= 2
            if (right - left + 1 >= 2) {
                count++; // Increment count for valid palindromic substring
            }
            left--; // Move left pointer outward
            right++; // Move right pointer outward
        }

        return count; // Return count of palindromes from this center
    }
}
*/}