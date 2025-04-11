{/*
   
    Given a Directed Acyclic Graph of V vertices from 0 to n-1 and a 2D Integer array(or vector) edges[ ][ ] of length E, where there is a directed edge from edge[i][0] to edge[i][1] with a distance of edge[i][2] for all i.

Find the shortest path from src(0) vertex to all the vertices and if it is impossible to reach any vertex, then return -1 for that vertex.

Examples :

Input: V = 4, E = 2, edges = [[0,1,2], [0,2,1]]
Output: [0, 2, 1, -1]
Explanation: Shortest path from 0 to 1 is 0->1 with edge weight 2. Shortest path from 0 to 2 is 0->2 with edge weight 1. There is no way we can reach 3, so it's -1 for 3.
Input: V = 6, E = 7, edges = [[0,1,2], [0,4,1], [4,5,4], [4,2,2], [1,2,3], [2,3,6], [5,3,1]]
Output: [0, 2, 3, 6, 1, 5]
Explanation: Shortest path from 0 to 1 is 0->1 with edge weight 2. Shortest path from 0 to 2 is 0->4->2 with edge weight 1+2=3. Shortest path from 0 to 3 is 0->4->5->3 with edge weight 1+4+1=6. Shortest path from 0 to 4 is 0->4 with edge weight 1.Shortest path from 0 to 5 is 0->4->5 with edge weight 1+4=5.



Shortest Path in DAG – Approach (Topological Sort + Relaxation)
Build the adjacency list from the given edges with u -> (v, weight) format.

Perform Topological Sort using DFS and store nodes in a stack.

Initialize a distance array with Integer.MAX_VALUE (∞), and set dist[src] = 0.

Process nodes in topological order (by popping from the stack).

Relax the edges of each node — if a shorter path is found, update the dist[] array.

After processing all nodes, replace unreachable distances (still ∞) with -1.

Return the final distance array.



import java.util.*;

class Pair {
    int node, weight;
    Pair(int node, int weight) {
        this.node = node;
        this.weight = weight;
    }
}

class Solution {

    public int[] shortestPath(int V, int E, int[][] edges) {
        // Step 1: Build adjacency list
        ArrayList<ArrayList<Pair>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int wt = edge[2];
            adj.get(u).add(new Pair(v, wt));
        }

        // Step 2: Topological Sort using DFS
        boolean[] visited = new boolean[V];
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                topoSort(i, visited, stack, adj);
            }
        }

        // Step 3: Initialize distances
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[0] = 0; // assuming source is 0

        // Step 4: Relax edges in topological order
        while (!stack.isEmpty()) {
            int node = stack.pop();

            if (dist[node] == Integer.MAX_VALUE) continue;

            for (Pair neighbor : adj.get(node)) {
                int next = neighbor.node;
                int edgeWeight = neighbor.weight;

                if (dist[node] + edgeWeight < dist[next]) {
                    dist[next] = dist[node] + edgeWeight;
                }
            }
        }

        // Step 5: Replace unreachable distances with -1
        for (int i = 0; i < V; i++) {
            if (dist[i] == Integer.MAX_VALUE) dist[i] = -1;
        }

        return dist;
    }

    private void topoSort(int node, boolean[] visited, Stack<Integer> stack, ArrayList<ArrayList<Pair>> adj) {
        visited[node] = true;
        for (Pair p : adj.get(node)) {
            if (!visited[p.node]) {
                topoSort(p.node, visited, stack, adj);
            }
        }
        stack.push(node);
    }
}

    
    
*/}