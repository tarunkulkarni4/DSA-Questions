{
  /*
    
    // Given a string s, return true if the s can be palindrome after deleting at most one character from it.
Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

soln:
class Solution {
    public boolean validPalindrome(String s) {
     int start=0;
     int last=s.length()-1;
     while(start<=last)
     {
        if(s.charAt(start)==s.charAt(last))
        {
              start++;
              last--;
        }
        else{
            return isPalindrome(s,start+1,last) || isPalindrome(s,start,last-1);
        }
     }
     return true;
    }
    private boolean isPalindrome(String s,int start,int last)
    {
        while(start<=last)
        {
            if(s.charAt(start)==s.charAt(last))
            {
                start++;
                last--;
            }
        
        else{
            return false;
        }
        }
        return true;
    }
    }
*/
}
