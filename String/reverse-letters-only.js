{
  /*

Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.

    using stack;

    import java.util.Stack;

class Solution {
    public String reverseOnlyLetters(String s) {
        Stack<Character> stack = new Stack<>();

        // Push all letters into the stack
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                stack.push(c);
            }
        }

        // Build the result string
        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                result.append(stack.pop()); // Replace letter with reversed one
            } else {
                result.append(c); // Keep non-letters as they are
            }
        }

        return result.toString();
    }
}

/*
Time Complexity (TC): O(n)
- First traversal to push letters into the stack: O(n).
- Second traversal to construct the result string: O(n).

Space Complexity (SC): O(n)
- The stack stores all the letters, which can take up to O(n) space.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"
Explanation:
- Reverse the letters ('a', 'b', 'c', 'd') to ('d', 'c', 'b', 'a') while keeping '-' in place.

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Explanation:
- Reverse the letters while keeping the '-' and other symbols in their original positions.

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Edge Cases:
1. Input contains no letters: Return the original string.
2. Input contains only letters: Reverse the entire string.
3. Input is empty: Return an empty string.





                              or

class Solution {
    public String reverseOnlyLetters(String s) {
        char[] arr = s.toCharArray(); // Convert string to char array
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            // Move left pointer if not a letter
            if (!Character.isLetter(arr[left])) {
                left++;
            }
            // Move right pointer if not a letter
            else if (!Character.isLetter(arr[right])) {
                right--;
            }
            // Swap letters and move both pointers
            else {
                char temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }

        return new String(arr); // Convert char array back to string
    }
}

/*
Time Complexity (TC): O(n)
- Each pointer moves at most `n` times, where `n` is the length of the string.

Space Complexity (SC): O(n)
- The char array requires O(n) space.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"
Explanation:
- Swap 'a' and 'd', 'b' and 'c', while keeping '-' in place.

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Explanation:
- Reverse the letters ('a', 'b', 'C', 'd', 'E', 'f', 'g', 'h', 'I', 'j') while keeping non-letters in place.

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Edge Cases:
1. Empty string: Return an empty string.
2. String with no letters: Return the original string.
3. String with all letters: Reverse the entire string.

*/
}
