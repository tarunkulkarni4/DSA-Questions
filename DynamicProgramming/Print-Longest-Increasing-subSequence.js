{/*

    Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

Have to print the el;ements

Use a dp[] array to track LIS length ending at each index.

Use a prev[] array to remember the previous index of each element in LIS.

After filling dp[] and prev[], find the index of the maximum LIS.

Backtrack using prev[] to construct the LIS.

Reverse the list to get the LIS in correct order.


*/}