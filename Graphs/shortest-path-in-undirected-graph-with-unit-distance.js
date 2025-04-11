{/*
    Question:
You are given an undirected graph with V vertices and E edges. Each edge has a unit weight (i.e., weight = 1). Your task is to find the shortest distance from a source vertex S to all other vertices.

Return an array dist[] where dist[i] is the shortest distance from S to i. If i is not reachable from S, return -1 for that index.

Example:
Input:

V = 5, E = 6  
Edges = [(0,1), (0,2), (1,3), (2,3), (3,4), (2,4)]
S = 0
Output:

[0, 1, 1, 2, 2]


Since all edge weights are equal (unit weight), BFS gives the shortest path.

Use a queue to process nodes level-by-level.

Maintain a dist[] array initialized with Integer.MAX_VALUE (or a large value).

Set dist[S] = 0.

For each connected node it of node, if dist[node] + 1 < dist[it], update it and add to queue.


class Solution {
    // Function to find the shortest path from a source node to all other nodes in an unweighted graph
    public int[] shortestPath(ArrayList<ArrayList<Integer>> adj, int src) {
        int n = adj.size(); // Number of vertices in the graph

        int[] dis = new int[n]; // Array to store shortest distances from source to each node

        // Initialize all distances as a large value (treated as infinity)
        for (int i = 0; i < n; i++) {
            dis[i] = (int)1e9; // or use Integer.MAX_VALUE
        }

        dis[src] = 0; // Distance from source to itself is always 0

        Queue<Integer> queue = new LinkedList<>(); // Queue for BFS traversal
        queue.add(src); // Start BFS from source node

        // Standard BFS loop
        while (!queue.isEmpty()) {
            int node = queue.poll(); // Get the front node in the queue

            // Traverse all adjacent nodes
            for (int it : adj.get(node)) {
                // If a shorter path to 'it' is found
                if (dis[node] + 1 < dis[it]) {
                    dis[it] = dis[node] + 1; // Update shortest distance
                    queue.add(it); // Add the neighbor to queue for further exploration
                }
            }
        }

        // Post-processing: Mark unreachable nodes with -1
        for (int i = 0; i < n; i++) {
            if (dis[i] == 1e9) {
                dis[i] = -1;
            }
        }

        return dis; // Return the distance array
    }
}


               or


import java.util.*;

class Solution {
    public int[] shortestPath(int V, List<List<Integer>> adj, int S) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[S] = 0;

        Queue<Integer> queue = new LinkedList<>();
        queue.add(S);

        while (!queue.isEmpty()) {
            int node = queue.poll();

            for (int it : adj.get(node)) {
                if (dist[node] + 1 < dist[it]) {
                    dist[it] = dist[node] + 1;
                    queue.add(it);
                }
            }
        }

        // Replace unreachable nodes with -1
        for (int i = 0; i < V; i++) {
            if (dist[i] == Integer.MAX_VALUE) dist[i] = -1;
        }

        return dist;
    }
}

    
    */}