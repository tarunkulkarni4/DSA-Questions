{/*
 

    Kahn's Algorithm – Easy Steps
    
Make graph using adjacency list.

Count incoming edges (in-degree) for every node.

Put all nodes with in-degree 0 in a queue.

While queue is not empty:

Remove node from queue and add to result.

Reduce in-degree of its neighbors by 1.

If any neighbor becomes 0 in-degree, add it to the queue.

When done:

If result size = number of nodes → valid topological sort.

Else → graph has a cycle.



    class Solution {
    public static ArrayList<Integer> topoSort(int V, int[][] edges) {
        // Step 1: Build adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);  // edge from u to v
        }

        // Step 2: Create inDegree array
        int[] inDegree = new int[V];
        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) {
                inDegree[v]++;  // increase indegree of neighbor
            }
        }

        // Step 3: Add nodes with 0 inDegree to queue
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }

        // Step 4: BFS Topological Sort
        ArrayList<Integer> result = new ArrayList<>();
        while (!queue.isEmpty()) {
            int node = queue.poll();
            result.add(node);

            // Decrease indegree of neighbors
            for (int neighbor : adj.get(node)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        // Optional: If result size != V, there's a cycle
        if (result.size() != V) return new ArrayList<>(); // cycle

        return result;
    }
}

    
*/}