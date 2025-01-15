{/*

    Subsets

Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Time Complexity: O(2ⁿ × n).
Space Complexity: O(2ⁿ × n) (dominated by storing subsets). 



    class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> allSubsets = new ArrayList<>();
        // Holds all the subsets of the array.

        generateSubsets(allSubsets, new ArrayList<>(), nums, 0);
        // Start generating subsets with an empty temporary list and starting index 0.

        return allSubsets;
        // Return the list of all generated subsets.
    }

    private void generateSubsets(List<List<Integer>> allSubsets, List<Integer> currentSubset, int[] nums, int index) {
        allSubsets.add(new ArrayList<>(currentSubset));
        // Add the current subset to the list of all subsets.

        for (int i = index; i < nums.length; i++) {
            // Iterate over the remaining elements in the array.

            currentSubset.add(nums[i]);
            // Include the current element in the subset.

            generateSubsets(allSubsets, currentSubset, nums, i + 1);
            // Recursively generate subsets including the next element.

            currentSubset.remove(currentSubset.size() - 1);
            // Backtrack by removing the last added element to explore other subsets.
        }
    }
}

*/}