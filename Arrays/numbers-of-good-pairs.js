{/*

    . Number of Good Pairs

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

solutiion:

time,space is o(n),o(1)
class Solution {
    public int numIdenticalPairs(int[] nums) {
        // Create a frequency array
        int[] freqarray = new int[101]; // Assuming nums[i] is between 1 and 100

        // Populate the frequency array
        for (int i = 0; i < nums.length; i++) {
            freqarray[nums[i]]++;
        }

        int totalcount = 0;

        // Calculate the number of good pairs using a normal for loop
        for (int i = 0; i < freqarray.length; i++) {
            int freq = freqarray[i]; // Frequency of the number
            if (freq > 1) {
                totalcount += (freq * (freq - 1)) / 2; // nC2 formula
            }
        }

        return totalcount;
    }
}

    
    */}