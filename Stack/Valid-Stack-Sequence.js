{/*
   Validate Stack Sequences

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

 

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
  
    
Solution:

class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        
        Stack<Integer>stack=new Stack<>();
        int j=0;

        for(int i=0;i<pushed.length;i++)
        {
            stack.push(pushed[i]);
            while(!stack.isEmpty() && stack.peek()==popped[j])
            {
                stack.pop();
                j++;
            }
        }
        return stack.isEmpty();
    }
}

*/}