{
  /*

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

solution:
   1.Brute force approach(time ,space complexiety is 0(n),)(1))
       
   class Solution {
    public int findLength(String s) {
        int length = 0;
        int i = s.length() - 1;

        // Skip trailing spaces
        while (i >= 0 && s.charAt(i) == ' ') {
            i--;
        }

        // Count the characters of the last word
        while (i >= 0 && s.charAt(i) != ' ') {
            length++;
            i--;
        }

        return length;
    }
}       

  2.Optimized ((time ,space complexiety is 0(n),)(1)))

      class Solution {
    public int lengthOfLastWord(String s) {
        int length=0;
        for(int i=s.length()-1;i>=0;i--)
        {
            if(s.charAt(i)!=' ')
            {
              length++;
            }
            // if length found of last word return lenght
            else if(length>0)
            {
                return length;
            }
        }
        return length;
    }
}

*/
}
