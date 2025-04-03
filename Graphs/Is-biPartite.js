{/*

    a graph that can be colored with 2 colors such that two adjacent nodes are not same color

class Solution {
    public boolean isBipartite(int[][] graph) {
        int n = graph.length; 
        int[] color = new int[n]; // Color array: -1 means uncolored, 0 and 1 for two colors
        Arrays.fill(color, -1);  // Initialize all nodes as uncolored (-1)

        // Loop through each node (to handle disconnected graphs)
        for (int i = 0; i < n; i++) {
            if (color[i] == -1) { // If unvisited, start DFS coloring
                if (!dfs(graph, i, 0, color)) { // Start DFS with color 0
                    return false; // If a conflict is found, the graph is not bipartite
                }
            }
        }
        return true; // If DFS completes without conflicts, the graph is bipartite
    }

    private boolean dfs(int[][] graph, int node, int col, int[] color) {
        color[node] = col; // Assign color to the current node

        // Traverse all adjacent nodes
        for (int neighbor : graph[node]) {
            if (color[neighbor] == -1) { // If neighbor is uncolored, color it with opposite color
                if (!dfs(graph, neighbor, 1 - col, color)) {
                    return false; // If conflict found in recursion, return false
                }
            } else if (color[neighbor] == color[node]) { // If adjacent has the same color, return false
                return false;
            }
        }
        return true; // If all adjacent nodes are colored correctly, return true
    }
}

    
*/}