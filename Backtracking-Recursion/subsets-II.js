{/*
 Subsets II

Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]   


Time Complexity: O(2ⁿ × n).
Space Complexity: O(2ⁿ × n) (dominated by storing subsets). 

class Solution {
    // Main method to generate all subsets of nums without duplicates
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> resultList = new ArrayList<>(); // Initialize the result list to store subsets.
        Arrays.sort(nums); // Sort the array to bring duplicates together, making it easier to skip them.
        backTrack(resultList, new ArrayList<>(), nums, 0); // Call the helper method to generate subsets.
        return resultList; // Return the final list of subsets.
    }

    // Helper method to generate subsets using backtracking
    private void backTrack(List<List<Integer>> resultList, List<Integer> tempSet, int[] nums, int start) {
        resultList.add(new ArrayList<>(tempSet)); // Add a copy of the current subset to the result list.

        // Iterate over the array starting from the current index
        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue; // Skip duplicate elements to avoid duplicate subsets.
            tempSet.add(nums[i]); // Include the current element in the temporary subset.
            backTrack(resultList, tempSet, nums, i + 1); // Recur for the next elements with updated starting index.
            tempSet.remove(tempSet.size() - 1); // Remove the last added element to backtrack and explore other options.
        }
    }
}

    OR


    import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public static ArrayList<ArrayList<Integer>> printUniqueSubsets(int[] nums) {
        ArrayList<ArrayList<Integer>> results = new ArrayList<>();
        Arrays.sort(nums); // Sort to handle duplicates.
        backTrack(results, new ArrayList<>(), nums, 0);
        return results;
    }

    private static void backTrack(ArrayList<ArrayList<Integer>> results, ArrayList<Integer> tempSet, int[] nums, int start) {
        results.add(new ArrayList<>(tempSet)); // Add a copy of the current subset to the results.

        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue; // Skip duplicate elements.
            tempSet.add(nums[i]); // Add the current element to the temporary subset.
            backTrack(results, tempSet, nums, i + 1); // Recur for the next elements.
            tempSet.remove(tempSet.size() - 1); // Backtrack to explore other subsets.
        }
    }
}

*/}