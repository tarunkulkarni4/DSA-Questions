{
  /*

     Rearrange Array Elements by Sign
Solved
Medium
Topics
Companies
Hint
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

 

Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].


Time Complexity: 
O(n), where 
𝑛
n is the length of the array.
Space Complexity: 
O(n), because of the additional space for lists (positives, negatives) and the result array.

    class Solution {
    public int[] rearrangeArray(int[] nums) {
        // Separate positive and negative numbers
        List<Integer> positives = new ArrayList<>();
        List<Integer> negatives = new ArrayList<>();

        // Populate the lists with positive and negative numbers
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] >= 0) {
                positives.add(nums[i]);
            } else {
                negatives.add(nums[i]);
            }
        }

        // Create a result array to store the rearranged elements
        int[] result = new int[nums.length];
        int posIdx = 0; // Index for positives
        int negIdx = 0; // Index for negatives
        int i = 0; // Index for result array

        // Alternate between positive and negative numbers
        while (posIdx < positives.size() && negIdx < negatives.size()) {
            result[i++] = positives.get(posIdx++); // Add a positive number
            result[i++] = negatives.get(negIdx++); // Add a negative number
        }

        return result;
    }
}



                          OR

    // Java program to rearrange positive and negative numbers alternately
// using rotation in array

import java.util.Arrays;

class GfG {
    
    // Function to right rotate the subarray between out-of-place
    // element and next opposite sign element
    static void rightRotate(int[] arr, int start, int end) {
        int temp = arr[end];
        for (int i = end; i > start; i--) {
            arr[i] = arr[i - 1];
        }
        arr[start] = temp;
    }

    // Function to rearrange the array
    static void rearrange(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            
            // Check if the current positive element is out of place
            if (arr[i] >= 0 && i % 2 == 1) {
                
                // Find the next negative element and rotate the subarray
                // between these two elements
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] < 0) {
                        rightRotate(arr, i, j);
                        break;
                    }
                }
            }
            
            // Check if the current negative element is out of place
            else if (arr[i] < 0 && i % 2 == 0) {
                
                // Find the next positive element and rotate the subarray
                // between these two elements
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] >= 0) {
                        rightRotate(arr, i, j);
                        break;
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, -4, -1, 4};

        rearrange(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}

*/
}
