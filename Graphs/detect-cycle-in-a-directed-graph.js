{/*
    Directed Graph Cycle

Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from verticex u to v.

Examples:

Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]]

Output: true
Explanation: The diagram clearly shows a cycle 0 → 2 → 0
Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]

Output: false
Explanation: no cycle in the graph


🔄 Approach – Kahn's Algorithm (BFS)
Build the Graph
Convert the edges[][] into an adjacency list.

Find In-Degrees
Count how many edges are coming into each node. Store in an inDegree[] array.

Queue the Zero In-Degree Nodes
Add all nodes with inDegree = 0 into a queue. These have no dependencies.

Process Nodes (BFS)
While the queue is not empty:

Remove a node from the queue.

Reduce the in-degree of its neighbors.

If a neighbor’s in-degree becomes 0, add it to the queue.

Count how many nodes you processed.

Cycle Check

If you processed all V nodes → No cycle.

If some nodes were not processed → Cycle exists (they were stuck due to circular dependencies).



class Solution {
    public boolean isCyclic(int V, int[][] edges) {
        // Step 1: Create adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
        }

        // Step 2: Calculate in-degrees
        int[] inDegree = new int[V];
        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) {
                inDegree[v]++;
            }
        }

        // Step 3: Add nodes with 0 in-degree to the queue
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }

        // Step 4: Process nodes
        int count = 0;
        while (!queue.isEmpty()) {
            int node = queue.poll();
            count++;

            for (int neighbor : adj.get(node)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        // Step 5: If not all nodes processed → cycle exists
        return count != V;
    }
}


    */}