{  // A subsequence is a sequence that can be derived from another sequence by deleting some or none of the elements without changing the order of the remaining elements. 
  /*
    class Solution {
    public boolean isSubsequence(String s, String t) {
        if(s.length()>t.length())
        {
            return false;
        }
    
      int sIndex=0;
      int tIndex=0;
      while(sIndex<s.length() && tIndex<t.length())
      {
        if(s.charAt(sIndex)==t.charAt(tIndex))
        {
            sIndex++;
        }
        tIndex++;

      }
      return sIndex==s.length();
        
    }
}
*/
}
