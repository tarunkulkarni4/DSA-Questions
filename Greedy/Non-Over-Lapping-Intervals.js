{/*
  
    iven an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.


Why brute force wont work:

Brute-Force Approach (in steps):
Generate all possible subsets of intervals.

This can be done by iterating through all numbers from 0 to 2^n - 1 and using bitwise operations to select which intervals are part of the subset.

Check if each subset is non-overlapping.

For each subset of intervals, check if any two intervals overlap. This can be done by comparing the start and end times of each pair of intervals in the subset.

Count the number of non-overlapping intervals in each subset.

For each valid subset (that doesn't overlap), count how many intervals it contains.

Track the maximum number of non-overlapping intervals.

Keep a record of the subset with the maximum count of non-overlapping intervals.

The result is the total number of intervals minus the maximum number of non-overlapping intervals.

The minimum number of intervals to remove will be n - maximum non-overlapping intervals.

Time Complexity:
Generating all subsets: There are 2^n subsets.

Checking non-overlapping intervals: For each subset, we need to check every pair of intervals for overlap, which takes O(n^2) time for each subset.

Thus, the overall time complexity is:
O(2^n * n^2)

This is very inefficient for large n.



Optimized:


class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
    int n = intervals.length;

    // Step 1: Sort intervals by their end time
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

    // Step 2: Initialize count of non-overlapping intervals and previous end time
    int count = 1;  // The first interval is always included
    int prevEndTime = intervals[0][1];  // The end time of the first interval

    // Step 3: Iterate through the sorted intervals
    for (int i = 1; i < n; i++) {
        // Step 4: If current interval doesn't overlap with the previous one
        if (intervals[i][0] >= prevEndTime) {
            count++;  // We can include this interval
            prevEndTime = intervals[i][1];  // Update the 'prevEndTime' to current interval's end time
        }
    }

    // Step 5: The result is the total number of intervals minus the count of non-overlapping intervals
    return n - count;
}
}

*/}