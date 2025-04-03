{/*
    There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

 

Example 1:


Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
Example 2:


Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.

import java.util.*;

class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        // Step 1: Create an adjacency list representation of the graph
        Map<Integer, List<Integer>> graph = new HashMap<>();
        
        // Initialize the adjacency list with empty lists for each node
        for (int i = 0; i < n; i++) {
            graph.put(i, new ArrayList<>());
        }
        
        // Add edges to the adjacency list (since the graph is **undirected**)
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]); // Connect edge[0] to edge[1]
            graph.get(edge[1]).add(edge[0]); // Connect edge[1] to edge[0]
        }

        // Step 2: Use BFS to check if a path exists from `source` to `destination`
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[n]; // Track visited nodes
        
        queue.add(source);      // Start BFS from the `source` node
        visited[source] = true; // Mark `source` as visited

        while (!queue.isEmpty()) { 
            int curr = queue.poll(); // Remove the front node from the queue
            
            // If we reach the `destination`, return true
            if (curr == destination) {
                return true;
            }

            // Visit all unvisited neighbors of the current node
            for (int neighbour : graph.get(curr)) {
                if (!visited[neighbour]) { 
                    queue.add(neighbour);       // Add to queue for further exploration
                    visited[neighbour] = true;  // Mark as visited to prevent re-visiting
                }
            }
        }
        // If we exhaust all possibilities without finding `destination`, return false
        return false;
    }
}

*/}