{/*

Permutations

Given an array nums of distinct integers, return all the possible 
permutations
. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.


Approach: Permutations Using Backtracking
Understand the Problem:
Generate all possible arrangements of the given nums array.
Ensure no duplicates and include all elements in each arrangement.
Key Steps:

Backtracking Framework:

Use a recursive function (backtrack) to explore all permutations.
Maintain a temporary list (tempList) to store the current permutation under construction.
Base Case:

When the size of the tempList equals the size of nums, it means a valid permutation is formed.
Add this permutation to the result list.
Recursive Case:

Iterate through the elements of the array.
Skip elements that are already in the tempList (avoid duplicates in a permutation).
Add the current element to tempList and make a recursive call to continue building the permutation.
Backtrack by removing the last added element after returning from the recursive call.
Algorithm:

Initialize a result list to store all permutations.
Use a helper function (backtrack) to recursively generate permutations.
Ensure the temporary list is reset when backtracking.
Key Points for Implementation:
Use a temporary list (tempList) to store the current permutation.
Use a for loop to try all elements that are not already part of the current permutation.
Backtrack by removing the last element before the next iteration to explore other possibilities.

O(n) for the recursion stack and temporary list.
Example Execution (for nums = [1, 2, 3]):
Start with tempList = [].
Add 1 → Recursive call → Add 2 → Recursive call → Add 3 → Base case → Add [1, 2, 3] to result.
Backtrack: Remove 3 → Try other possibilities → Continue recursion.



    Solution:


    class Solution {
    public List<List<Integer>> permute(int[] nums) {
        // Initialize the results list to store all permutations
        List<List<Integer>> results = new ArrayList<>();
        
        // Start the backtracking process with an empty temporary list
        backTrack(results, new ArrayList<>(), nums);
        
        // Return the final list of all permutations
        return results; // Time complexity: O(N!), Space complexity: O(N) for the call stack
    }
    
    private void backTrack(List<List<Integer>> results, List<Integer> tempSet, int[] nums) {
        // Base case: if the size of the temporary list equals the number of elements in nums
        if (tempSet.size() == nums.length) {
            // Add a new copy of the current permutation to the results list
            results.add(new ArrayList<>(tempSet)); // Space complexity: O(N) for the copy of tempSet
            return;
        }
        
        // Iterate through each number in the nums array
        for (int i = 0; i < nums.length; i++) {
            // Skip the number if it is already in the temporary list
            if (tempSet.contains(nums[i])) { 
                continue;
            }
            
            // Choose: Add the current number to the temporary list
            tempSet.add(nums[i]); // Time complexity for addition: O(1)
            
            // Explore: Recursively build the permutation
            backTrack(results, tempSet, nums); // Recursive call adds to the call stack
            
            // Un-choose: Remove the last added number to backtrack
            tempSet.remove(tempSet.size() - 1); // Time complexity for removal: O(1)
        }
    }
}


Using swapping


class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, result);
        return result;
    }

    private void backtrack(int[] nums, int start, List<List<Integer>> result) {
        // Base case: if start reaches the end, add the current permutation to the result
        if (start == nums.length) {
            List<Integer> permutation = new ArrayList<>();
            for (int num : nums) {
                permutation.add(num);
            }
            result.add(permutation);
            return;
        }

        // Recursive case: generate permutations by swapping elements
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i); // Swap current index with loop index
            backtrack(nums, start + 1, result); // Recursive call for the next index
            swap(nums, start, i); // Backtrack by swapping back
        }
    }

    // Helper function to swap elements in the array
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}


*/}