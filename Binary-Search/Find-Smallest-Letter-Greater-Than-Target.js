{/*
  
    Find Smallest Letter Greater Than Target

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.


Soltution:
time is O(log n)
space is O(1)


class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        // Initialize res with the first element of the array
        char res = letters[0];  
        // Set the start and end indices for binary search
        int start = 0;
        int end = letters.length - 1;
        
        // Start binary search
        while (start <= end) {
            // Find the middle index
            int mid = (start + end) / 2;
            
            // If the middle element equals the target, we move the start to mid + 1
            // because we are looking for a strictly greater letter.
            if (letters[mid] == target) {
                start = mid + 1;
            }
            // If the target is greater than the middle element, move start to mid + 1
            else if (target > letters[mid]) {
                start = mid + 1;
            }
            // If the middle element is greater than the target, it could be the next greatest letter.
            // So, update res to the current middle element and move the end to mid - 1.
            else if (letters[mid] > target) {
                res = letters[mid];
                end = mid - 1;
            }
        }
        
        // Return the result which holds the next greatest letter
        return res;
    }
}


*/}