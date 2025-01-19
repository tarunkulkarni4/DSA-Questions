{/*


    Sort the array to group duplicates, enabling easy identification and skipping of redundant permutations.
Use a backtracking approach to explore all permutations, maintaining a temporary list (tempList) for the current permutation and a used array to track selected elements.
Skip duplicates during recursion using the condition nums[i] == nums[i - 1] && !used[i - 1], ensuring unique permutations.
Base case: When tempList matches the input size, add a copy to the result list and backtrack to explore other options.
Backtrack: Undo choices (remove last element and unmark used), returning to prior states to explore alternate paths.


    Solution:

   Time Complexity:O(n×n!)
Space Complexity:
O(n) (excluding output storage).

class Solution {
    // Main function to generate all unique permutations of the given array
    public List<List<Integer>> permuteUnique(int[] nums) {
        // Create a list to store the final result (list of unique permutations)
        List<List<Integer>> resultList = new ArrayList<>();
        
        // Sort the input array to ensure duplicates are adjacent
        Arrays.sort(nums); // This helps in skipping duplicate permutations later
        
        // Call the backtracking function with initial parameters
        backtrack(resultList, new ArrayList<>(), nums, new boolean[nums.length]);
        
        // Return the result containing all unique permutations
        return resultList;
    }

    // Backtracking helper function to generate permutations
    private void backtrack(List<List<Integer>> resultList, 
                           ArrayList<Integer> tempList, 
                           int[] nums, 
                           boolean[] used) {
        // Base case: If the current permutation (tempList) is complete
        if (tempList.size() == nums.length) {
            // Add a copy of tempList to the result list
            resultList.add(new ArrayList<>(tempList));
            return; // Stop further recursion
        }

        // Loop through the nums array to explore all possible permutations
        for (int i = 0; i < nums.length; i++) {
            // Skip numbers that are already used in the current permutation
            if (used[i]) continue;

            // Skip duplicates: ensure that the same number is not reused in the same level
            // The condition checks:
            // - If `nums[i]` is the same as the previous number (`nums[i - 1]`)
            // - If the previous number (`nums[i - 1]`) is not used, it means this is a duplicate situation
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

            // Include the current number in the temporary list
            tempList.add(nums[i]);
            
            // Mark the current number as used
            used[i] = true;

            // Recursively build the next part of the permutation
            backtrack(resultList, tempList, nums, used);

            // Backtrack: undo the choice by removing the current number
            tempList.remove(tempList.size() - 1);
            
            // Mark the current number as not used for future permutations
            used[i] = false;
        }
    }
}

*/}