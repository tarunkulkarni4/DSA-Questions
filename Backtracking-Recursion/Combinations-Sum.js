{
  /*
    
Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40


Solution:

import java.util.*;

class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backTrack(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }

    // backTrack method to explore all combinations
    private void backTrack(int[] candidates, int target, int start, List<Integer> templist, List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(templist));  // If the sum matches, add current combination to result
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            if (candidates[i] > target) {
                continue;  // Skip candidates that exceed the target
            }
            templist.add(candidates[i]);  // Add the current candidate to the list
            backTrack(candidates, target - candidates[i], i, templist, result);  // Recurse with updated target and the same start index to allow reuse of elements
            templist.remove(templist.size() - 1);  // Backtrack: remove last element
        }
    }
}


Time Complexity: O(2^n) 
- This is due to the fact that we are generating all possible combinations of the elements in the candidates array. In the worst case, this can result in 2^n combinations where n is the number of candidates.

Space Complexity: O(n) 
- The space complexity is O(n) due to the space used by the recursion stack and the temporary list (templist) used to hold combinations.
*/
}
