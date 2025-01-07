{
  /*

    Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 
    
solution:
class Solution {
    public int maxArea(int[] height) {
        // Initialize two pointers: left at the start, right at the end
        int left = 0;
        int right = height.length - 1;

        // Variable to store the maximum area found
        int maxArea = 0;

        // Loop until the two pointers meet
        while (left <= right) {
            // Calculate the area for the current left and right pointers
            // Area = width * min(height of the two lines)
            int area = Math.min(height[left], height[right]) * (right - left);

            // Update maxArea if the current area is larger
            maxArea = Math.max(maxArea, area);

            // Move the pointer pointing to the shorter line inward
            // This is because the height of the container is limited
            // by the shorter line, and moving it inward might increase the area
            if (height[left] < height[right]) {
                left++; // Move left pointer inward
            } else {
                right--; // Move right pointer inward
            }
        }

        // Return the maximum area found
        return maxArea;
    }
}


Time Complexity (TC): O(n)
- The algorithm processes each element of the array exactly once as the left and right pointers move inward.
- Total: O(n).

Space Complexity (SC): O(1)
- The algorithm uses a constant amount of space regardless of the input size.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Explanation:
- Start with left = 0, right = 8.
- Area = min(1, 7) * (8 - 0) = 7. Update maxArea = 7.
- Move left to 1 (since 1 < 7).
- Area = min(8, 7) * (8 - 1) = 49. Update maxArea = 49.
- Continue until left > right.

Output: 49
The container with maximum water is between index 1 and index 8, with height = 8 and 7, and width = 7.


*/
}
