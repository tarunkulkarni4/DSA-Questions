{
  /*

    Longest Substring Without Repeating Characters
Medium
Topics
Companies
Hint
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


Approaches:


Initialize Variables:

maxLength = 0, left = 0, and an empty HashSet.
Iterate Over the String:

Use a for loop with right pointer iterating from 0 to n - 1.
Check for Duplicates:

If s.charAt(right) is not in HashSet, move forward (no duplicates in the current substring).
Add Character to HashSet:

Add s.charAt(right) to HashSet to track the unique characters in the current window.
Update maxLength:

Calculate right - left + 1 and update maxLength if it’s the largest so far.
Handle Duplicates:

If s.charAt(right) is already in HashSet, use a while loop to shrink the window from the left until the duplicate is removed.
Remove Characters When Shrinking:

Remove s.charAt(left) from HashSet, then increment left to move the window forward.
Continue Adding Characters:

Once duplicates are resolved, add s.charAt(right) back into the HashSet.
Return the Result:

After the loop completes, return maxLength, which holds the length of the longest substring without repeating characters.


Solution:

public int lengthOfLongestSubstring(String s) {
    int n = s.length();  // 1. Get the length of the string
    int maxLength = 0;   // 2. Store the length of the longest substring
    Set<Character> charSet = new HashSet<>(); // 3. To store unique characters in the current window
    int left = 0;        // 4. Left pointer of the sliding window

    for (int right = 0; right < n; right++) { // 5. Iterate through the string with 'right' pointer
        if (!charSet.contains(s.charAt(right))) { // 6. If current character is not in the set
            charSet.add(s.charAt(right)); // 7. Add it to the set
            maxLength = Math.max(maxLength, right - left + 1); // 8. Update maxLength
        } else { // 9. If current character is already in the set, shrink the window from the left
            while (charSet.contains(s.charAt(right))) {
                charSet.remove(s.charAt(left)); // 10. Remove the character at the 'left' pointer
                left++; // 11. Move the 'left' pointer forward
            }
            charSet.add(s.charAt(right)); // 12. Add the current character to the set
        }
    }

    return maxLength; // 13. Return the length of the longest substring
}
*/
}
