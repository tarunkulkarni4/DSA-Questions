{
  /*

Valid Compressed String

A special compression mechanism can arbitrarily delete 0 or more characters and replace them with the deleted character count.
Given two strings, S and T where S is a normal string and T is a compressed string, determine if the compressed string  T is valid for the plaintext string S. 

Note: If T consists of multiple integers adjacently, consider all of them at a single number. For example T="12B32", consider T as "12" + "B" + "32".  


Example 1:

Input:
S = "GEEKSFORGEEKS"
T = "G7G3S"
Output:
1
Explanation:
We can clearly see that T is a valid 
compressed string for S.

Example 2:

Input:
S = "DFS"
T = "D1D"
Output :
0
Explanation:
T is not a valid compressed string.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function checkCompressed() which takes 2 strings S and T as input parameters and returns integer 1 if T is a valid compression of S and 0 otherwise.


Expected Time Complexity: O(|T|)
Expected Auxiliary Space: O(1)
    
Solution:

Time Complexity: O(|T|), where |T| is the length of the compressed string T.
Space Complexity: O(1)

class Solution {
    static int checkCompressed(String s, String t) {
        int i = 0;  // Pointer for string S, initialized to the start of S
        int j = 0;  // Pointer for string T, initialized to the start of T
        
        // Iterate through both strings while there are characters left to process in both S and T
        while (i < s.length() && j < t.length()) {
            
            // Case 1: If the current character in T is a letter, we need to match it with the character in S
            if (Character.isLetter(t.charAt(j))) {
                // Check if the current character in T matches the character in S
                if (s.charAt(i) == t.charAt(j)) {
                    i++;  // Move pointer in S to the next character
                    j++;  // Move pointer in T to the next character
                } else {
                    // If they don't match, the compressed string is invalid, so return 0
                    return 0;
                }
                // Example:
                // S = "GEEKSFORGEEKS", T = "G7G3S"
                // At the start, S[i] = 'G' and T[j] = 'G', so we move both pointers.
                // After this step: i = 1, j = 1
            } 
            // Case 2: If the current character in T is a digit, it indicates how many characters to skip in S
            else if (Character.isDigit(t.charAt(j))) {
                int num = 0;  // Initialize variable to store the number that tells how many characters to skip
                
                // Parse the full number in T (it could be a multi-digit number like "12", "123", etc.)
                while (j < t.length() && Character.isDigit(t.charAt(j))) {
                    num = num * 10 + (t.charAt(j) - '0');  // Convert the digit character to an integer and build the number
                    j++;  // Move pointer in T to the next character
                }
                // After parsing the number:
                // Example:
                // If T = "G7G3S", the number '7' is parsed, and `num` becomes 7.
                // Now, we skip 7 characters in S by advancing pointer i by 7.
                // After this step: i = 8 (because we skip 7 characters in S)

                // Skip `num` characters in S by advancing pointer i by the parsed number
                i += num;
            }
        }
        
        // Final check: If both S and T are completely processed (i.e., we've reached the end of both strings), return 1
        // If either string is not fully processed, return 0
        return i == s.length() && j == t.length() ? 1 : 0;
        
        // Example:
        // After processing S = "GEEKSFORGEEKS" and T = "G7G3S":
        // i = 13 (end of S), j = 5 (end of T)
        // So, both strings are fully processed and the result is 1.
    }
}

*/
}
