{/*

    Find All Duplicates in an Array

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.





    Solution:

    Time Complexity: O(n)
Space Complexity: O(n)

    class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        // Create an ArrayList to store the duplicate elements
        List<Integer> result = new ArrayList<>();
        
        // Create a HashSet to store the elements we have seen so far
        HashSet<Integer> seen = new HashSet<>();

        // Traverse the array to check for duplicates
        for (int i = 0; i < nums.length; i++) {
            // If the current element is already in the 'seen' set, it's a duplicate
            if (seen.contains(nums[i])) {
                // Add the duplicate element to the result list
                result.add(nums[i]);
            } else {
                // If it's not a duplicate, add the element to the 'seen' set
                seen.add(nums[i]);
            }
        }
        
        // Return the result list containing all the duplicate elements
        return result;
    }
}



    
*/}