{/*

    Given a Directed Acyclic Graph (DAG) of V (0 to V-1) vertices and E edges represented as a 2D list of edges[][], where each entry edges[i] = [u, v] denotes a directed edge u -> v. Return the topological sort for the given graph.

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering.
Note: As there are multiple Topological orders possible, you may return any of them. If your returned Topological sort is correct then the output will be true else false.

Examples:

Input: V = 4, E = 3, edges[][] = [[3, 0], [1, 0], [2, 0]]

Output: true
Explanation: The output true denotes that the order is valid. Few valid Topological orders for the given graph are:
[3, 2, 1, 0]
[1, 2, 3, 0]
[2, 3, 1, 0]
Input: V = 6, E = 6, edges[][] = [[1, 3], [2, 3], [4, 1], [4, 0], [5, 0], [5,2]]

Output: true
Explanation: The output true denotes that the order is valid. Few valid Topological orders for the graph are:
[4, 5, 0, 1, 2, 3]
[5, 2, 4, 0, 1, 3]
    
Using DFS:

Create an adjacency list from the given edges.

Create a visited[] array to mark visited nodes.

Use a stack to store the result in reverse (postorder).

Do DFS from every unvisited node:

Visit all neighbors first (recursive call)

After all neighbors are done, push the current node into the stack

Finally, pop from the stack to get the topological order.



import java.util.*;

class Solution {
    public static ArrayList<Integer> topoSort(int V, int[][] edges) {
        // Step 1: Create adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Step 2: Fill the adjacency list from edges (u -> v)
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
        }

        // Step 3: Visited array to keep track of visited nodes
        boolean[] vis = new boolean[V];

        // Step 4: Stack to store the topological order in reverse
        Stack<Integer> stack = new Stack<>();

        // Step 5: Run DFS from each unvisited node
        for (int i = 0; i < V; i++) {
            if (!vis[i]) {
                dfs(i, adj, stack, vis);
            }
        }

        // Step 6: Pop from stack to get the correct order
        ArrayList<Integer> result = new ArrayList<>();
        while (!stack.isEmpty()) {
            result.add(stack.pop());
        }

        return result;
    }

    // DFS function: visit all neighbors, then push current node
    private static void dfs(int node, List<List<Integer>> adj, Stack<Integer> stack, boolean[] vis) {
        vis[node] = true;

        // Visit all unvisited neighbors
        for (int neighbor : adj.get(node)) {
            if (!vis[neighbor]) {
                dfs(neighbor, adj, stack, vis);
            }
        }

        // Push current node after visiting all neighbors
        stack.push(node);
    }
}

*/}