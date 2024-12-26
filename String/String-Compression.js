{/*
 
     String Compression

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

 

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

Constraints:

1 <= chars.length <= 2000
chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
    
    
Solution:

time complexiety is o(n),0(1)

class Solution {
    public int compress(char[] chars) {
        int index = 0;   // Pointer for writing in the array. Starts at the first position.
        int n = chars.length;  // Length of the array.
        int i = 0;  // Pointer to iterate through the input array.

        // Loop through the array to find sequences of repeated characters.
        while (i < n) {

            char currentChar = chars[i];  // Store the current character we are looking at.
            int count = 0;  // Initialize count to 0 for each new character.

            // Inner loop to count the consecutive occurrences of the current character.
            while (i < n && chars[i] == currentChar) {
                count++;  // Increment count for each consecutive occurrence of currentChar.
                i++;  // Move to the next character.
            }

            // After counting, place the current character at the 'index' position.
            chars[index++] = currentChar;  // Write the character itself at the current position.

            // Example execution: Suppose chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
            // 1st iteration: currentChar = 'a', count = 2
            // chars[index++] = 'a' -> chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
            // i = 2, index = 1

            // If the character was repeated more than once, write the count after the character.
            if (count > 1) {
                String countStr = Integer.toString(count);  // Convert the count to string.
                
                // Write each digit of the count to the array.
                for (int j = 0; j < countStr.length(); j++) {
                    chars[index++] = countStr.charAt(j);  // Write each character of the count string.
                }

                // Example execution: for count = 2, countStr = "2"
                // chars[index++] = '2' -> chars = ['a', '2', 'b', 'b', 'c', 'c', 'c']
                // i = 2, index = 2
            }

            // Example:
            // 1st iteration: 'a' appears 2 times -> chars = ['a', '2', ...]
            // 2nd iteration: 'b' appears 2 times -> chars = ['a', '2', 'b', '2', ...]
            // 3rd iteration: 'c' appears 3 times -> chars = ['a', '2', 'b', '2', 'c', '3', ...]
        }

        // Return the number of characters in the compressed array (valid length).
        return index;  // `index` will be the length of the new compressed string.
    }
}

    
    
*/}