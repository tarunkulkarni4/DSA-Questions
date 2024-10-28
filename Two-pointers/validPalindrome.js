// 1.this one little optimized code(Time complex is 0(n))
{
  /*
    class Solution {
    public boolean isPalindrome(String s) {
        int start=0;
        int end=s.length()-1;// this is actually a last index
        while(start<=end){
            if(!Character.isLetterOrDigit(s.charAt(start))){
                start++;
            }
            else if(!Character.isLetterOrDigit(s.charAt(end)))
            {
                end--;
            }
            else
            {
                if(Character.toLowerCase(s.charAt(start))!=Character.toLowerCase(s.charAt(end)))
                {
                    return false;
                }
                start++;
                end--;
            }
        }
        return true;

    }
}
    
*/
}

// 2.this easy undesrtandble code(Time complex is 0(n))

{
  /*
    class Solution {
    public boolean isPalindrome(String s) {
        if(s.isEmpty())
        {
            return true;

        }
        int start=0;
        int end=s.length()-1;// this is actually a last index
        while(start<=end){
            char currFirst=s.charAt(start);
            char currEnd=s.charAt(end);
            if(!Character.isLetterOrDigit(currFirst))
            {
                start++;
            }
            else if(!Character.isLetterOrDigit(currEnd))
            {
                end--;
            }
            else
            {
                if(Character.toLowerCase(currFirst)!=Character.toLowerCase(currEnd))
                {
                    return false;

                }
                start++;
                end--;
            }
         


    }
       return true;
}
}
*/
}
