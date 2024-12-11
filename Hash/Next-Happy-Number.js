{
  /*
    Question:its same as happy number but here if have to find next happy number so we have to use happy number logic as recurisve funtion

    For a given non-negative integer N, find the next smallest Happy Number. A number is called Happy if it leads to 1 after a sequence of steps. Wherein at each step the number is replaced by the sum of squares of its digits that is, if we start with Happy Number and keep replacing it with sum of squares of its digits, we reach 1 at some point.
 
Example 1:

Input:
N = 8
Output:
10
Explanation:
Next happy number after 8 is 10 since
1*1 + 0*0 = 1
Example 2:

Input:
N = 10
Output
13
Explanation:
After 10, 13 is the smallest happy number because
1*1 + 3*3 = 10, so we replace 13 by 10 and 1*1 + 0*0 = 1.
Your Task:
You don't need to read input or print anything. Your task is to complete the function nextHappy() which takes an integer N as input parameters and returns an integer, next Happy number after N.

Expected Time Complexity: O(Nlog10N)
Expected Space Complexity: O(1)

solution:

//User function Template for Java
class Solution {
    public static int nextHappy(int N) {
        N++; // Start checking from the next number
        while (true) {
            if (isHappy(N)) { // Check if the current number is happy
                return N; // Return the first happy number found
            }
            N++; // Increment to check the next number
        }
    } 

    // Helper function to check if a number is happy
    private static boolean isHappy(int n) {
        Set<Integer> usedIntegers = new HashSet<>(); // To detect cycles
        
        while (true) {
            int sum = 0; // Sum of squares of digits

            // Calculate the sum of squares of digits
            while (n != 0) {
                int digit = n % 10;
                sum += digit * digit; // Add the square of the last digit
                n /= 10; // Remove the last digit
            }

            // If the sum becomes 1, the number is happy
            if (sum == 1) {
                return true;
            }

            // If a cycle is detected, the number is not happy
            if (usedIntegers.contains(sum)) {
                return false;
            }

            usedIntegers.add(sum); // Add the current sum to the set
            n = sum; // Update 'n' for the next iteration
        }
    }
}

*/
}
