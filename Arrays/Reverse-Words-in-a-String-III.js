{
  /*


    Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single spac

solution:

Time Complexity: 
𝑂
(
𝑛
)
O(n)
Space Complexity: 
𝑂
(
𝑛
)
O(n)








class Solution {
    public String reverseWords(String s) {
        // Convert the string to a character array for in-place modifications
        char[] arr = s.toCharArray(); 
        int left = 0;  // Start index of a word
        int right = 0; // End index of a word

        // Iterate through the character array
        while (right < arr.length) {
            if (arr[right] == ' ') { 
                // When a space is found, reverse the current word
                reverse(arr, left, right - 1); // Reverse the word between left and right-1
                left = right + 1; // Move left pointer to the start of the next word
            }
            right++; // Increment right pointer
        }

        // Reverse the last word in the array
        reverse(arr, left, right - 1); // Reverse the last word since no space follows it

        // Convert the modified character array back to a string and return it
        return new String(arr); // Return the modified string
    }

    private void reverse(char[] arr, int left, int right) {
        // Reverse characters between left and right pointers
        while (left < right) {
            char temp = arr[left]; // Swap the characters at left and right indices
            arr[left] = arr[right];
            arr[right] = temp;
            left++; // Move left pointer forward
            right--; // Move right pointer backward
        }
    }
}


Example:

Input: "Let's take LeetCode contest"
Step 1: Convert to character array: 
arr = ['L', 'e', 't', '\'', 's', ' ', 't', 'a', 'k', 'e', ' ', 'L', 'e', 'e', 't', 'C', 'o', 'd', 'e', ' ', 'c', 'o', 'n', 't', 'e', 's', 't']

Step 2: Iterate through the array:
    - First Word: "Let's"
        - left = 0, right = 4, reverse(arr, 0, 4) -> ['s', 't', 'e', '\'', 'L', ' ', ...]
        - Update left to 6 (start of next word)
    - Second Word: "take"
        - left = 6, right = 9, reverse(arr, 6, 9) -> ['s', 't', 'e', '\'', 'L', ' ', 'e', 'k', 'a', 't', ' ', ...]
        - Update left to 11
    - Third Word: "LeetCode"
        - left = 11, right = 18, reverse(arr, 11, 18) -> ['s', 't', 'e', '\'', 'L', ' ', 'e', 'k', 'a', 't', ' ', 'e', 'd', 'o', 'C', 't', 'e', 'e', 'L', ' ', ...]
        - Update left to 20
    - Fourth Word: "contest"
        - left = 20, right = 26, reverse(arr, 20, 26) -> ['s', 't', 'e', '\'', 'L', ' ', 'e', 'k', 'a', 't', ' ', 'e', 'd', 'o', 'C', 't', 'e', 'e', 'L', ' ', 't', 's', 'e', 't', 'n', 'o', 'c']

Step 3: Return the modified array as a string:
Output: "s'teL ekat edoCteeL tsetnoc"


    
    */
}
