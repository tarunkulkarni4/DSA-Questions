{/*
 
    Check if One String Swap Can Make Strings Equal

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
 

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.
    

Solution:
 
optimized:

class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
     
      int[] s1Array = new int[26];
      int[] s2Array = new int[26];
      int counter = 0;
      for(int i = 0;i<s1.length();i++){
         char s = s1.charAt(i);
         char ss = s2.charAt(i);
         if(s != ss)
            counter++;
         if(counter > 2)
            return false;
          s1Array[s -'a']++;
         s2Array[ss -'a']++;
      }
      return Arrays.equals(s1Array, s2Array);
    }
}
    

using sorting

class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
        if(s1==s2)
        {
            return true;
        }
        char [] s=s1.toCharArray();
        char [] t=s2.toCharArray();

        Arrays.sort(s);
        Arrays.sort(t);

        if(Arrays.equals(s,t))
        {
            return true;
        }
        return false;

    }
}


class Solution {
    public boolean areAlmostEqual(String s1, String s2) {
        if (s1.equals(s2)) return true; // Already equal

        int n = s1.length();
        char[] arr = s1.toCharArray();

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Swap characters
                swap(arr, i, j);
                
                // Check if s1 becomes s2
                if (new String(arr).equals(s2)) {
                    return true;
                }
                
                // Undo swap
                swap(arr, i, j);
            }
        }
        return false;
    }

    private void swap(char[] arr, int i, int j) {
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}



*/}