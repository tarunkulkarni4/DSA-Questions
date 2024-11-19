{
  /*
    
    Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true


Solution:
  
    1.using hashMap (time and space complexiety is o(n),o(1))

      class Solution {
    public boolean isIsomorphic(String s, String t) {
      if(s.length()!=t.length())
      {
        return false;
      }

      // build hashmap table
      Map<Character,Character>map=new HashMap<>();

      // traverse through both strings
      for(int i=0;i<s.length();i++)
      {
        char original=s.charAt(i);
        char replacement=t.charAt(i);
        if(!map.containsKey(original)) // This checks if the original value is not present as a key in the map.
        {
            if(!map.containsValue(replacement)) // If the original is not in the map, it checks if the replacement is already mapped to another key. If it is, it returns false because we don't want to map multiple original characters to the same replacement.
            {
                  map.put(original,replacement); //return false;
            }
            else{
              return false;
            }
        }
        else{ //This part executes when the original key already exists in the map.
            char mapped=map.get(original);
            if(mapped!=replacement)
            {
                return false;
            }
        }
      }
   return true;
 
   
}
}
    
*/
}
