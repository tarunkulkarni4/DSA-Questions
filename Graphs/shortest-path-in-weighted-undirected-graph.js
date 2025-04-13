{/*

Print Shortest path:

You are given a weighted undirected graph having n vertices numbered from 1 to n and m edges along with their weights. Find the shortest weight path between the vertex 1 and the vertex n,  if there exists a path, and return a list of integers whose first element is the weight of the path, and the rest consist of the nodes on that path. If no path exists, then return a list containing a single element -1.

The input list of edges is as follows - {a, b, w}, denoting there is an edge between a and b, and w is the weight of that edge.

Note: The driver code here will first check if the weight of the path returned is equal to the sum of the weights along the nodes on that path, if equal it will output the weight of the path, else -2. In case the list contains only a single element (-1) it will simply output -1. 

Examples :

Input: n = 5, m= 6, edges = [[1, 2, 2], [2, 5, 5], [2, 3, 4], [1, 4, 1], [4, 3, 3], [3, 5, 1]]
Output: 5
Explanation: Shortest path from 1 to n is by the path 1 4 3 5 whose weight is 5. 

Approach (Step-by-Step):
Build Adjacency List:

Store all edges and weights for each node using a list of lists.

Since it's undirected, add both u → v and v → u.

Initialize Distance & Parent Arrays:

dist[i] = minimum weight to reach node i (initially set to infinity).

parent[i] = previous node in the shortest path (used to trace the final path).

Use Min Heap (Priority Queue):

Pick the node with the smallest current distance.

Begin from node 1 with distance 0.

Dijkstra’s Algorithm:

For each neighbor of current node:

If the new path is shorter → update the distance and parent.

Push it into the priority queue.

If destination n is unreachable:

Return -1.

Backtrack to Build Path:

From n, go back using the parent array till you reach 1.

This gives the actual shortest path.

Return Result:

First element = total path weight.

Remaining = nodes in the shortest path from 1 → n.


class Solution {

    // Helper class to represent a pair of (node, distance)
    static class Pair {
        int node, dist;
        Pair(int node, int dist) {
            this.node = node;
            this.dist = dist;
        }
    }

    public static List<Integer> shortestPath(int n, int m, int[][] edges) {

        // STEP 1: Create adjacency list for undirected weighted graph
        List<List<Pair>> adj = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            adj.get(u).add(new Pair(v, w));
            adj.get(v).add(new Pair(u, w)); // undirected edge
        }

        // STEP 2: Initialize distance and parent arrays
        int[] dist = new int[n + 1];
        int[] parent = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);

        // Distance to source node (1) is 0
        dist[1] = 0;

        // Each node initially points to itself
        for (int i = 1; i <= n; i++) {
            parent[i] = i;
        }

        // STEP 3: Min-heap (priority queue) to pick node with smallest distance
        PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> a.dist - b.dist);
        pq.offer(new Pair(1, 0)); // start from node 1

        // STEP 4: Dijkstra's algorithm
        while (!pq.isEmpty()) {
            Pair curr = pq.poll();
            int u = curr.node;

            for (Pair neighbor : adj.get(u)) {
                int v = neighbor.node;
                int w = neighbor.dist;

                // If a shorter path to v is found
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    parent[v] = u;
                    pq.offer(new Pair(v, dist[v]));
                }
            }
        }

        // STEP 5: If destination node is unreachable
        if (dist[n] == Integer.MAX_VALUE) {
            return Arrays.asList(-1);
        }

        // STEP 6: Backtrack from node n to 1 to build the path
        List<Integer> path = new ArrayList<>();
        int node = n;
        while (parent[node] != node) {
            path.add(node);
            node = parent[node];
        }
        path.add(1); // Add the source node
        Collections.reverse(path); // Reverse to get path from source to destination

        // STEP 7: Prepare final answer list
        List<Integer> result = new ArrayList<>();
        result.add(dist[n]); // Add total weight first
        result.addAll(path); // Then the nodes in path
        return result;
    }
}

*/}