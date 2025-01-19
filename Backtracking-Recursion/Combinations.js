{/*
    Combinations
Solved
Medium
Topics
Companies
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.


Time Complexity (TC): 
O(C(n,k)⋅k)
Space Complexity (SP): 
O(C(n,k)⋅k)


    class Solution {
    // Main function to generate combinations of size 'k' from numbers 1 to 'n'
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> results = new ArrayList<>();  // Initialize the result list to store all combinations
        backTrack(results, new ArrayList<>(), n, k, 1); // Start the backtracking process with the first number being 1
        return results;  // Return the final list of all combinations
    }

    // Backtracking function to explore all combinations
    private void backTrack(List<List<Integer>> results, List<Integer> tempSet, int n, int k, int start) {
        
        // Base case: If the current combination has reached the required size 'k', add it to the results list
        if (tempSet.size() == k) {
            results.add(new ArrayList<>(tempSet));  // Create a copy of tempSet and add it to results
            return;  // End the recursion as we have found a valid combination
        }

        // Loop to generate all possible combinations starting from the 'start' index
        for (int i = start; i <= n; i++) {  // Loop from 'start' to 'n' inclusive to explore each element
            tempSet.add(i);  // Add the current number to the combination
            
            // Recurse to explore further combinations by moving to the next number (i + 1)
            backTrack(results, tempSet, n, k, i + 1);  // Increment 'i' to ensure no number is reused in the same combination
            
            // Backtrack: Remove the last added element to try the next possible combination
            tempSet.remove(tempSet.size() - 1);  // Remove the last element and continue exploring other combinations
        }
    }
}


*/}