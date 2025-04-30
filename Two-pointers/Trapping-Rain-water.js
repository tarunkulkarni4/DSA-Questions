{/*
    Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

    Brute force → for each block, check left max and right max.

Extra arrays → precompute leftMax[] and rightMax[], then calculate water.

Two pointers → move pointers based on smaller height, keep updating leftMax and rightMax.

    Brute Force:
    // Brute Force Approach
// Time: O(n^2), Space: O(1)
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int water = 0;

        for (int i = 0; i < n; i++) {
            // Find maximum to the left
            int leftMax = 0;
            for (int j = 0; j <= i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }

            // Find maximum to the right
            int rightMax = 0;
            for (int j = i; j < n; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            // Water at current index = min(leftMax, rightMax) - height[i]
            water += Math.min(leftMax, rightMax) - height[i];
        }

        return water;
    }
}


Using Extra Arrays (Prefix and Suffix Max Arrays) (🚀 Better)

// Using Extra Arrays
// Time: O(n), Space: O(n)
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        if (n == 0) return 0;
        
        int[] leftMax = new int[n];
        int[] rightMax = new int[n];
        int water = 0;

        // Step 1: Fill leftMax array
        leftMax[0] = height[0];
        for (int i = 1; i < n; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        }

        // Step 2: Fill rightMax array
        rightMax[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(height[i], rightMax[i + 1]);
        }

        // Step 3: Calculate trapped water
        for (int i = 0; i < n; i++) {
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return water;
    }
}


Optimized Two-Pointer Approach (⚡ Most efficient)

// Two Pointer Approach
// Time: O(n), Space: O(1)
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int left = 0, right = n - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;

        while (left <= right) {
            if (height[left] <= height[right]) {
                // If left height is smaller
                if (height[left] >= leftMax) {
                    leftMax = height[left]; // Update leftMax
                } else {
                    water += leftMax - height[left]; // Water is trapped
                }
                left++;
            } else {
                // If right height is smaller
                if (height[right] >= rightMax) {
                    rightMax = height[right]; // Update rightMax
                } else {
                    water += rightMax - height[right]; // Water is trapped
                }
                right--;
            }
        }
        return water;
    }
}

*/}