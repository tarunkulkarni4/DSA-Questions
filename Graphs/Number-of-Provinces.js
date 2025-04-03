{/*
   
    Number of Provinces

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

 

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 


Treat the adjacency matrix as a graph.

Use DFS to explore all cities connected to a given city.

Each DFS call marks all directly and indirectly connected cities as visited.

Increment the province count for every unvisited city

class Solution {
    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int provinces = 0;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {  // If the city is not visited, it's a new province
                dfs(isConnected, visited, i);
                provinces++;  // Increment province count
            }
        }
        return provinces;
    }

    private void dfs(int[][] isConnected, boolean[] visited, int city) {
        visited[city] = true;
        for (int neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
                dfs(isConnected, visited, neighbor);  // Recursively visit neighbors
            }
        }
    }
}

Using bfs:

Similar to DFS but uses a queue for traversal.

Each BFS call finds all cities connected to the starting city.

Each BFS traversal marks all connected cities as visited.

Increment province count for every unvisited city.


   import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int provinces = 0;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {  // If the city is not visited, start BFS
                bfs(isConnected, visited, i);
                provinces++;  // Increment province count
            }
        }
        return provinces;
    }

    private void bfs(int[][] isConnected, boolean[] visited, int city) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(city);
        visited[city] = true;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            for (int neighbor = 0; neighbor < isConnected.length; neighbor++) {
                if (isConnected[current][neighbor] == 1 && !visited[neighbor]) {
                    queue.offer(neighbor);  // Add to queue
                    visited[neighbor] = true;  // Mark as visited
                }
            }
        }
    }
}


*/}