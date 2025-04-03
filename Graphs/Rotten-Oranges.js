{/*
    Rotten Oranges

Given a matrix mat[][] of dimension n * m where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:
0 : Empty cell
1 : Cell have fresh oranges
2 : Cell have rotten oranges

We have to determine what is the earliest time after which all the oranges are rotten. A rotten orange at index (i, j) can rot other fresh orange at indexes (i-1, j), (i+1, j), (i, j-1), (i, j+1) (up, down, left and right) in a unit time.

Note: Your task is to return the minimum time to rot all the fresh oranges. If not possible returns -1.

Examples:

Input: mat[][] = [[0, 1, 2], [0, 1, 2], [2, 1, 1]]
Output: 1
Explanation: Oranges at positions (0,2), (1,2), (2,0) will rot oranges at (0,1), (1,1), (2,2) and (2,1) in unit time.
Input: mat[][] = [[2, 2, 0, 1]]
Output: -1
Explanation: Oranges at (0,0) and (0,1) can't rot orange at (0,3).
Input: mat[][] = [[2, 2, 2], [0, 2, 0]]
Output: 0
Explanation: There is no fresh orange. 

class Solution {
    public class Pair{
        int first,second,time;
        public Pair(int first,int second,int time)
        {
            this.first=first;
            this.second=second;
            this.time=time;
        }
    }
    public int orangesRotting(int[][] mat) {
        // Code here
        int m=mat.length;
        int n=mat[0].length;
        
        Queue<Pair>queue=new LinkedList<>();
        int[][] vis=new int[m][n];
        int countFresh=0;
        
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(mat[i][j]==2)
                {
                    vis[i][j]=2;
                    queue.add(new Pair(i,j,0));
                }
                else 
                {
                    vis[i][j]=0;
                }
                if(mat[i][j]==1)
                {
                    countFresh++;
                }
            }
        }
        int[][] dir={{-1,0},{1,0},{0,1},{0,-1}};
         int count=0;
         int t=0;
        while(!queue.isEmpty())
        {
            Pair curr=queue.poll();
            int r=curr.first;
            int c=curr.second;
            int tm=curr.time;
            t=Math.max(tm,t);
            for(int k=0;k<4;k++)
            {
                int newR=r + dir[k][0];
                int newC=c + dir[k][1];
                if(newR>=0 && newR<m && newC>=0 && newC<n && mat[newR][newC]==1)
                {
                    count++;
                 mat[newR][newC]=2;
                 queue.add(new Pair(newR,newC,t+1));
                }
            }
        }
        if(count!=countFresh) return -1;
        return t;
    }
}
*/}