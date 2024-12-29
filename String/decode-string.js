{/*
    
   Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
    



SOlution: time,space is O(n)  


 class Solution {

  public String decodeString(String s) {

    // Stack to store numbers (repeat counts)
    Stack<Integer> numStack = new Stack<>();
    // Stack to store strings and characters
    Stack<String> stringStack = new Stack<>();
    int k = 0; // Variable to store the current number (repeat count)

    // Iterate over each character in the input string
    for (char c : s.toCharArray()) {

      // If the character is a digit, calculate the repeat count
      if (Character.isDigit(c)) {
        k = (k * 10) + (c - '0'); 
        // Example: If input is "3", `k` becomes 3. If input is "12", `k` becomes 12.
        continue;
      }

      // If the character is '[', push the repeat count and reset `k`
      if (c == '[') {
        numStack.push(k); // Push repeat count to `numStack`
        k = 0;            // Reset `k` for the next number
        stringStack.push(String.valueOf(c)); // Push '[' to `stringStack` as a marker
        continue;
      }

      // If the character is not ']' (i.e., normal character), push it to `stringStack`
      if (c != ']') {
        stringStack.push(String.valueOf(c)); 
        // Example: If input is "a", push "a" to `stringStack`.
        continue;
      }

      // If the character is ']', start decoding
      StringBuilder temp = new StringBuilder();

      // Pop characters from the `stringStack` until '[' is found
      while (!stringStack.peek().equals("[")) {
        temp.insert(0, stringStack.pop());
        // Example: For "2[bc]", this builds "bc".
      }

      // Remove the '[' from the stack
      stringStack.pop();

      // Get the repeat count from `numStack`
      int count = numStack.pop();

      // Repeat the string `count` times
      StringBuilder replacement = new StringBuilder();
      for (int i = 0; i < count; i++) {
        replacement.append(temp);
        // Example: If count is 2, "bc" becomes "bcbc".
      }

      //      // Push the repeated string back to the `stringStack`
      stringStack.push(replacement.toString());
      // Example: "bcbc" is pushed back to the stack.
    }

    // Combine everything in the `stringStack` to get the final result
    StringBuilder result = new StringBuilder();
    while (!stringStack.empty()) {
      result.insert(0, stringStack.pop());
    }
    // Example: Combine "aaa" and "bcbc" to get "aaabcbc".

    return result.toString();
  }
}


*/}