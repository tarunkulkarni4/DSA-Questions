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
tc,sc is O(n),O(1)

class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        // Step 1: Create a frequency array to store the count of each number in the range [0, 100]
        // Using size 102 to handle cumulative sum calculation without index out-of-bounds issues.
        int[] freq = new int[102];

        // Step 2: Populate the frequency array
        // freq[i] will store the count of how many times number 'i' appears in the input array.
        for (int i = 0; i < nums.length; i++) {
            freq[nums[i]]++; // Increment the count for the number nums[i]
        }

        // Step 3: Compute cumulative frequency
        // freq[i] will now represent the count of numbers <= i
        for (int i = 1; i < freq.length; i++) { // Start from 1 to avoid accessing freq[-1]
            freq[i] += freq[i - 1]; // Add the count of numbers <= i-1 to freq[i]
        }

        // Step 4: Prepare the result array
        // For each number in the input array, find how many numbers are smaller than it.
        int[] result = new int[nums.length];

        for (int i = 0; i < result.length; i++) {
            // If the number is 0, there are no smaller numbers
            if (nums[i] == 0) {
                result[i] = 0;
            } else {
                // Use the cumulative frequency to determine how many numbers are smaller than nums[i]
                result[i] = freq[nums[i] - 1];
            }
        }

        // Step 5: Return the result array
        return result;
    }
}



*/}