{/*
    https://leetcode.com/problems/count-servers-that-communicate/solutions/6318426/hint-and-code-in-java-with-dry-run-by-pa-nmwo  ->this is the problem iteration by someone

Problem Statement:

Count Servers that Communicate
Solved
Medium
Topics
Companies
Hint
You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

 

Example 1:



Input: grid = [[1,0],[0,1]]
Output: 0
Explanation: No servers can communicate with others.
Example 2:



Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.
Example 3:



Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can't communicate with any other server.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 250
1 <= n <= 250
grid[i][j] == 0 or 1


Solution:

class Solution {
    public int countServers(int[][] grid) {
        int [] rows=new int[grid.length];
        int[] cols=new int[grid[0].length];

        for(int i=0;i<grid.length;i++)
        {
            for(int j=0;j<grid[0].length;j++)
            {
                rows[i]+=grid[i][j];
                cols[j]+=grid[i][j];
            }
        }
     int count=0;`
        for(int i=0;i<grid.length;i++)
        {
            for(int j=0;j<grid[0].length;j++)
            {
                if(grid[i][j]==1 && (rows[i]>1 || cols[j]>1))
                {
                    count++;
                }
            }
        }
        return count;
    }
}

*/}