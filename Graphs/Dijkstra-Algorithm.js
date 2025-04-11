{
  /*
  
    Given an undirected, weighted graph with V vertices numbered from 0 to V-1 and E edges, represented by 2d array edges[][], where edges[i]=[u, v, w] represents the edge between the nodes u and v having w edge weight.
You have to find the shortest distance of all the vertices from the source vertex src, and return an array of integers where the ith element denotes the shortest distance between ith node and source vertex src.

Note: The Graph is connected and doesn't contain any negative weight edge.

Examples:

Input: V = 3, edges[][] = [[0, 1, 1], [1, 2, 3], [0, 2, 6]], src = 2
Output: [4, 3, 0]
Explanation:

Shortest Paths:
For 2 to 0 minimum distance will be 4. By following path 2 -> 1 -> 0
For 2 to 1 minimum distance will be 3. By following path 2 -> 1
For 2 to 2 minimum distance will be 0. By following path 2 -> 2


Here's the Dijkstra approach in simple steps — line by line:

Create adjacency list from edges.

Initialize dist[] array with ∞, set dist[src] = 0.

Use a min-heap (PriorityQueue) to always get the node with smallest distance.

Push (0, src) into the queue.

While queue is not empty:
→ Pop (dist, node) from queue.
→ For each neighbor:
→ If current path is shorter, update distance and push (newDist, neighbor) into queue.

After loop ends, return dist[] as final shortest distances.


import java.util.*;

class Solution {

    // Custom Pair class to hold distance and node
    class Pair {
        int dist, node;

        Pair(int dist, int node) {
            this.dist = dist;
            this.node = node;
        }
    }

    public int[] dijkstra(int V, int[][] edges, int src) {
        // Step 1: Create the adjacency list
        ArrayList<ArrayList<Pair>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Step 2: Populate the adjacency list (undirected graph)
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            adj.get(u).add(new Pair(w, v)); // from u to v with weight w
            adj.get(v).add(new Pair(w, u)); // from v to u with weight w (undirected)
        }

        // Step 3: Initialize distance array with infinity
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0; // Distance from source to itself is always 0

        // Step 4: Create a priority queue (min heap) and insert the source
        PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> a.dist - b.dist);
        pq.add(new Pair(0, src)); // (distance, node)

        // Step 5: Dijkstra's main logic
        while (!pq.isEmpty()) {
            // Step 1: Extract the node with the minimum distance from the priority queue
            Pair current = pq.poll();
            int d = current.dist;     // 'd' stores the current shortest distance from source to this node
            int node = current.node;  // 'node' is the current node we are processing

            // Step 2: Traverse through all neighbors of the current node
            for (Pair neighbor : adj.get(node)) {
                int weight = neighbor.dist;   // 'weight' is the weight of the edge from current node to the neighbor
                int adjNode = neighbor.node;  // 'adjNode' is the neighbor of the current node

                // Step 3: Check if the path through the current node offers a shorter distance to adjNode
                if (d + weight < dist[adjNode]) {
                    // If yes, update the distance to this neighbor
                    dist[adjNode] = d + weight;

                    // Push this neighbor into the priority queue with updated distance
                    // This ensures it will be processed with its newly found shorter distance
                    pq.add(new Pair(dist[adjNode], adjNode));
                }
            }
        }

        // Step 6: Return the shortest distance array
        return dist;
    }
}





Using TreeSEt:




I prefer using TreeSet for Dijkstra when I want to avoid duplicate entries or when decrease-key operations are necessary. Since Java's PriorityQueue doesn’t support decrease-key, TreeSet offers better flexibility and guarantees we only store the most up-to-date shortest path for each node.

Build the adjacency list from the edge list.

Initialize all distances to ∞ (except the source which is 0).

Use a TreeSet of (distance, node) to always fetch the smallest distance node.

While the set is not empty:

Remove the pair with the smallest distance.

For all its neighbors:

If you find a shorter path, remove the old pair of that neighbor (if exists), update the distance, and re-insert the new pair.

Return the dist[] array.


import java.util.*;

class Solution {
    static class Pair {
        int node, dist;
        Pair(int dist, int node) {
            this.node = node;
            this.dist = dist;
        }
    }

    public static int[] dijkstra(int V, ArrayList<ArrayList<Pair>> adj, int src) {
        TreeSet<Pair> set = new TreeSet<>((a, b) -> {
            if (a.dist == b.dist)
                return a.node - b.node;
            return a.dist - b.dist;
        });

        int[] dist = new int[V];
        Arrays.fill(dist, (int)1e9);
        dist[src] = 0;

        set.add(new Pair(0, src));

        while (!set.isEmpty()) {
            Pair curr = set.pollFirst();
            int u = curr.node;
            int d = curr.dist;

            for (Pair it : adj.get(u)) {
                int v = it.node;
                int weight = it.dist;
                
                if (d + weight < dist[v]) {
                    // Remove if already exists
                    set.remove(new Pair(dist[v], v));
                    dist[v] = d + weight;
                    set.add(new Pair(dist[v], v));
                }
            }
        }
        return dist;
    }
}



why queue not prefered??

Why Queue is NOT Preferred for Dijkstra
🚫 Queue is FIFO (First-In-First-Out)
→ Processes nodes in insertion order, not based on shortest distance.

🧭 Dijkstra is Greedy
→ Always needs to pick the node with the smallest known distance first.

🔁 Queue can revisit longer paths
→ It might process a longer path before a shorter one, leading to incorrect results.

❌ No Priority Handling
→ Queue doesn’t sort nodes by minimum distance like a PriorityQueue.

✅ Correct only for Unit-Weighted Graphs
→ BFS with Queue works only when all edge weights = 1.

⛔ No Decrease-Key Operation
→ Queue doesn’t support updating the priority (distance) of nodes.

📉 Fails for Weighted Graphs
→ For graphs with varying edge weights, queue-based traversal will miss optimal paths.


    
*/
}
