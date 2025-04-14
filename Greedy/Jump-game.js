{/*
  You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

BruteForce :

 Recursion (Brute Force)
What it does: Tries every possible jump path from index 0 to end.

Time Complexity: O(2^n) → exponential

Why it fails:
🔸 Too many repeated calls
🔸 Slow for large inputs → leads to Time Limit Exceeded (TLE)

⚠️ Dynamic Programming (Bottom-Up)
What it does: Checks for every index if it can be reached from previous ones.

Time Complexity: O(n^2)

Why it's not optimal:
🔸 Still loops inside loops
🔸 Works, but slower than greedy
🔸 Extra space used for the DP array


Optimized :

Start from the end (lastReachableIndex = nums.length - 1)

Move backwards through the array.

For each index, check:

Can I jump from here to the last reachable index or beyond?

If yes → update lastReachableIndex to current index.

After the loop, if lastReachableIndex == 0, it means you can jump from start to end.



class Solution {
    public boolean canJump(int[] nums) {
        int lastReachableIndex = nums.length - 1; // Initially, the last index is our goal

        // Traverse the array from second last index backwards
        for (int currentIndex = nums.length - 2; currentIndex >= 0; currentIndex--) {
            // If current index can reach or go beyond the last reachable
            if (currentIndex + nums[currentIndex] >= lastReachableIndex) {
                lastReachableIndex = currentIndex; // Update goal to this index
            }
        }

        // If we can reach the start from the last reachable index
        return lastReachableIndex == 0;
    }
}

Why Greedy Works Perfectly Here?
You're always asking:

“From where can I reach the goal?”

You don’t need to check all paths, just the best possible jump backward.

You're shrinking the problem step-by-step (from end to start).

*/}