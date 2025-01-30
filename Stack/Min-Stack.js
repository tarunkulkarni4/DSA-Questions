{/*
    
    Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 
Solution:

import java.util.Stack;

class MinStack {
    private int min = Integer.MAX_VALUE; // Stores the minimum value in the stack
    private Stack<Integer> stack; // Main stack to store elements

    public MinStack() {
        stack = new Stack<>(); // Initialize the stack
    }

    public void push(int val) {
        // If the new value is smaller or equal to the current minimum,
        // push the old minimum first (to preserve it) and update min
        if (val <= min) {
            stack.push(min); // Store old min before updating
            min = val;
        }
        stack.push(val); // Push the actual value
    }

    public void pop() {
        // If the popped element is the minimum, restore the previous min
        if (stack.pop() == min) {
            min = stack.pop(); // Restore previous min value
        }
    }

    public int top() {
        return stack.peek(); // Return the top element of the stack
    }

    public int getMin() {
        return min; // Return the current minimum element in the stack
    }
}


*/}