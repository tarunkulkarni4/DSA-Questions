{/*
    
    Question: Find the Maximum Product of Two Numbers in an Array
Problem Statement:

Given an array of integers, your task is to find the maximum product that can be obtained by multiplying any two numbers from the array.

Function Signature:

java
Copy code
public static int findMaxProduct(int n, int[] arr);
Input:

An integer n (1 ≤ n ≤ 10^5), which is the size of the array.
An array of n integers, arr[], where each element arr[i] (−10^5 ≤ arr[i] ≤ 10^5) represents a number in the array.
Output:

Return an integer which is the maximum product of any two numbers in the array.
Example 1:

java
Copy code
Input:
n = 5
arr = {10, 5, 8, 20, 12}

Output:
240
Explanation: The two largest numbers in the array are 20 and 12. Their product is 20 * 12 = 240, which is the maximum product that can be obtained.

Example 2:

java
Copy code
Input:
n = 4
arr = {-10, -5, 2, 1}

Output:
50
Explanation: The two smallest numbers in the array are -10 and -5. Their product is -10 * -5 = 50. Since multiplying two negative numbers results in a positive product, the maximum product in this case is 50.

Example 3:

java
Copy code
Input:
n = 3
arr = {-1, -2, -3}

Output:
6
Explanation: In this case, the largest product is obtained by multiplying the two smallest (most negative) numbers -2 and -3, resulting in -2 * -3 = 6.

Constraints:
The input array will always have at least 2 elements (n ≥ 2).
The array can contain both positive and negative numbers.

Solution:

public static int findMaxProduct(int n, int[] arr) {
    // Initialize variables for the largest and smallest values
    int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
    int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;

    // Loop through the array using a normal for loop
    for (int i = 0; i < n; i++) {
        int num = arr[i];  // Get the current number at index i

        // Check if we found a new largest number
        if (num > max1) {
            max2 = max1;  // Move the old max1 to max2
            max1 = num;   // Update max1 with the new largest number
        } else if (num > max2) {
            max2 = num;   // Update max2 if num is between max1 and max2
        }

        // Check if we found a new smallest number
        if (num < min1) {
            min2 = min1;  // Move the old min1 to min2
            min1 = num;   // Update min1 with the new smallest number
        } else if (num < min2) {
            min2 = num;   // Update min2 if num is between min1 and min2
        }
    }

    // Calculate the two possible products and return the maximum
    int product1 = max1 * max2;
    int product2 = min1 * min2;
    return Math.max(product1, product2);  // Return the maximum product
}

    
*/}