{/*
    
   How Many Numbers Are Smaller Than the Current Number

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
  

class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int n = nums.length;
        int[] result = new int[n]; // To store the count for each number

        // Outer loop: Iterate through each number in the array
        for (int i = 0; i < n; i++) {
            int count = 0; // Count of numbers smaller than nums[i]

            // Inner loop: Compare nums[i] with every other number
            for (int j = 0; j < n; j++) {
                if (nums[j] < nums[i]) {
                    count++;
                }
            }

            // Store the count in the result array
            result[i] = count;
        }

        return result; // Return the result array
    }
}

/*
Time Complexity (TC): O(n^2)
- Outer loop runs for each element (n times).
- Inner loop compares the current element with all other elements (n times).
- Total: O(n^2).

Space Complexity (SC): O(n)
- The result array requires additional space proportional to the input size.

Example 1:
Input: nums = [8, 1, 2, 2, 3]
Output: [4, 0, 1, 1, 3]
Explanation:
- For nums[0] = 8, 4 numbers are smaller (1, 2, 2, 3).
- For nums[1] = 1, 0 numbers are smaller.
- For nums[2] = 2, 1 number is smaller (1).
- For nums[3] = 2, 1 number is smaller (1).
- For nums[4] = 3, 3 numbers are smaller (1, 2, 2).

Example 2:
Input: nums = [6, 5, 4, 8]
Output: [2, 1, 0, 3]
Explanation:
- For nums[0] = 6, 2 numbers are smaller (5, 4).
- For nums[1] = 5, 1 number is smaller (4).
- For nums[2] = 4, 0 numbers are smaller.
- For nums[3] = 8, 3 numbers are smaller (6, 5, 4).

Example 3:
Input: nums = [7, 7, 7, 7]
Output: [0, 0, 0, 0]
Explanation:
- All numbers are equal, so no number is smaller than any other.



                          OR
                          \


optimized:




*/}