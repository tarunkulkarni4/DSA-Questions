{
  /*

    Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

Solution:

class Solution {
    // Main function to find all combinations
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);  // Sort the candidates array to handle duplicates
        backTrack(candidates, target, 0, new ArrayList<>(), result);  // Start the backtracking
        return result;
    }

    // Backtracking helper function
    private void backTrack(int[] candidates, int target, int start, List<Integer> temp, List<List<Integer>> result) {
        if (target == 0) {  // Base case: if the target is 0, we've found a valid combination
            result.add(new ArrayList<>(temp));  // Add the current combination to the result
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            // Skip duplicates: Only proceed if this candidate is different from the previous one (at the same recursion level)
            // This prevents generating the same combination again, which happens when the same number is used multiple times
            if (i > start && candidates[i] == candidates[i - 1]) {
                continue;  // Skip this element to avoid duplicates
            }

            // If the current number is greater than the target, no need to explore further (since the array is sorted)
            if (candidates[i] > target) {
                break;  // No valid combination exists further down the array
            }

            // Choose the current number and recurse with reduced target
            temp.add(candidates[i]);
            backTrack(candidates, target - candidates[i], i + 1, temp, result);  // Recurse with i+1 to ensure we don't reuse the same number
            
            // Backtrack: remove the last added number to try the next possibility
            temp.remove(temp.size() - 1);
        }
    }
}

// Time Complexity: O(2^N)
// Space Complexity: O(N)

    
*/
}
