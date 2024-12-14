{/*
    
    
    Solution:time and sapce is o(log n),O(1)

    class Solution {
    public int threeSumClosest(int[] nums, int target) {
        // Step 1: Sort the array to apply the two-pointer technique
        Arrays.sort(nums);
        
        // Step 2: Initialize the result with a sum of the first three elements
        int result = nums[0] + nums[1] + nums[2];
        
        // Step 3: Initialize minDifference to the maximum possible value to find the minimum difference later
        int minDifference = Integer.MAX_VALUE;
        
        // Step 4: Loop through each element in the array except the last two elements
        for (int i = 0; i < nums.length - 2; i++) {
            // Step 5: Initialize two pointers, one to the element just after the current element, and the other at the end of the array
            int left = i + 1;
            int right = nums.length - 1;

            // Step 6: Use the two-pointer technique to find the closest sum for the current element nums[i]
            while (left < right) {
                // Step 7: Calculate the sum of the current triplet
                int sum = nums[i] + nums[left] + nums[right];

                // Step 8: If the sum is equal to the target, return the target as the result
                if (sum == target) {
                    return target;
                }
                // Step 9: If the sum is less than the target, move the left pointer to the right to increase the sum
                else if (sum < target) {
                    left++;
                }
                // Step 10: If the sum is greater than the target, move the right pointer to the left to decrease the sum
                else {
                    right--;
                }

                // Step 11: Calculate the absolute difference between the sum and the target
                int difference = Math.abs(sum - target);

                // Step 12: If the current difference is smaller than the previous minimum difference, update the result
                if (difference < minDifference) {
                    result = sum;
                    minDifference = difference;
                }
            }
        }

        // Step 13: Return the result, which holds the sum closest to the target
        return result;
    }
}

*/}