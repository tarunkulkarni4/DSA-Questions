{/*
    
    Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
    

Solution:
time,space is o(n),o(n)

class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 1;  // Initialize carry to 1 because we are adding 1 to the number.
        
        // Traverse the array from the last digit to the first digit
        for(int i = digits.length - 1; i >= 0; i--) {
            digits[i] += carry;  // Add carry to the current digit
            if(digits[i] < 10) {  // If the digit is less than 10, there is no carry
                return digits;  // Return the updated array, as no further carry is needed
            }
            digits[i] = 0;  // If the digit becomes 10, reset it to 0 and propagate the carry to the next digit
        }
        
        // If we reach this point, it means the carry is still present (e.g., if the number was all 9's)
        int[] result = new int[digits.length + 1];  // Create a new array with one extra space
        result[0] = 1;  // Set the first digit to 1 (this is the carry from the most significant digit)
        
        // Return the result array, which is the new number
        return result;
    }
}

            oR


using arraylist 
time,space is o(n),o(1)

class Solution {
    static ArrayList<Integer> increment(ArrayList<Integer> arr, int N) {
        int carry = 1;
        
        // Traverse the ArrayList from the end to the beginning
        for (int i = N - 1; i >= 0; i--) {
            arr.set(i, arr.get(i) + carry);  // Add carry to the current digit
            if (arr.get(i) < 10) {
                return arr;  // If no carry, return the updated ArrayList
            }
            arr.set(i, 0);  // If sum is 10, reset the current digit to 0
        }
        
        // If carry still exists after the loop, add a new digit at the beginning
        arr.add(0, 1);  // Prepend 1 to the ArrayList
        return arr;  // Return the modified ArrayList
    }
}

*/}