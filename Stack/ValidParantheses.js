{
  /*
  
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true


1.Brute force approach

  class Solution {
    public boolean isValid(String s) {
        int length;
        
        // Repeat until no more changes in the string length
        do {
            length = s.length();
            s = s.replace("()", "")
                 .replace("{}", "")
                 .replace("[]", "");
        } while (s.length() != length);
        
        // If the string is empty, it's valid; otherwise, it's invalid
        return s.isEmpty();
    }
}
   

2.using stacks
  
class Solution {
    public boolean isValid(String s) {
    Stack<Character> stack=new Stack<Character>(); // create an empty stack
    int len=s.length();
    for(int i=0;i<len;i++) // traverse through entire string now
    {
        if(s.charAt(i)=='(')
        {
            stack.push(')');
        }
        else if(s.charAt(i)=='{')
        {
            stack.push('}');
        }
        else if(s.charAt(i)=='[')
        {
            stack.push(']');
        }
        else if(stack.isEmpty() || stack.pop()!=s.charAt(i))
        {
            return false;
        }
    }
    return stack.isEmpty();
    }
}
                   OR   // return int values then


        
         else if(stack.isEmpty() || stack.pop()!=c)
            {
                return 0;
            }
        }
            
        return stack.isEmpty() ?1:0;




*/
}
