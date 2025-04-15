{/*



Brute force:

arr[i] >= arr[j] && arr[i] <= dep[j]
→ A train arrives while another train is still at the station (i.e., arrives after the other train has arrived but before it has departed).

arr[j] >= arr[i] && arr[j] <= dep[i]
→ Another train arrives during the stay of the current train (i.e., it arrives after this train and before it departs).

arr[i] <= arr[j] && dep[i] >= dep[j]
→ Another train's entire schedule fits within the current train's time — it comes later and leaves earlier.

arr[j] <= arr[i] && dep[j] >= dep[i]
→ The current train's entire schedule is within another train’s time — it comes after and leaves before the other.

class Solution {
    public static int findPlatform(int[] arr, int[] dep, int n) {
        // Initialize maximum platforms needed at any time
        int maxPlatforms = 1;

        // Loop through each train
        for (int i = 0; i < n; i++) {
            // Count platforms needed for the current train
            int platformsNeeded = 1; // Start with 1 for this train

            // Compare the current train with every other train
            for (int j = 0; j < n; j++) {
                if (i == j) continue; // Skip comparing the train with itself

                // Check if train i and train j overlap
                // Overlap condition: one train's arrival is between the other's arrival and departure
                if ((arr[i] >= arr[j] && arr[i] <= dep[j]) || 
                    (arr[j] >= arr[i] && arr[j] <= dep[i])) {
                    platformsNeeded++; // Another platform is needed for overlapping train
                }
            }

            // Update the maxPlatforms if more platforms are needed at this time
            maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
        }

        // Return the maximum number of platforms needed
        return maxPlatforms;
    }
}


import java.util.Arrays;

class Solution {
    public static int findPlatform(int[] arr, int[] dep, int n) {
        // Sort both arrival and departure times
        Arrays.sort(arr);
        Arrays.sort(dep);

        // Initialize pointers for arrival and departure
        int plat_needed = 1, max_platforms = 1;
        int i = 1, j = 0;

        // Loop through all trains
        while (i < n && j < n) {
            // If next train arrives before the current one departs, we need a new platform
            if (arr[i] <= dep[j]) {
                plat_needed++;
                i++;
            } else {
                // One train has left, so we can reuse a platform
                plat_needed--;
                j++;
            }

            // Update max platforms needed
            max_platforms = Math.max(max_platforms, plat_needed);
        }

        return max_platforms;
    }
}

*/}