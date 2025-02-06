{/*

    Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

class Solution {
    public String reverseVowels(String s) {
        if (s == null || s.length() == 0) {
            return s;
        }

        String vowels = "aeiouAEIOU";  // Vowel characters (both lower and upper case)
        char[] ch = s.toCharArray();  // Convert string to character array
        int start = 0;  // Pointer to the start of the string
        int end = s.length() - 1;  // Pointer to the end of the string

        while (start < end) {
            // Move start pointer forward until it points to a vowel
            while (start < end && !vowels.contains(ch[start] + "")) {
                start++;
            }

            // Move end pointer backward until it points to a vowel
            while (start < end && !vowels.contains(ch[end] + "")) {
                end--;
            }

            // Swap the vowels at the start and end pointers
            char temp = ch[start];
            ch[start] = ch[end];
            ch[end] = temp;

            start++;  // Move the start pointer forward
            end--;  // Move the end pointer backward
        }

        return new String(ch);  // Convert the character array back to a string and return it
    }
}


*/}