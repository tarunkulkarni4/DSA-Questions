{/*


    Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

solutuion:

O(n + m) and O(n + k)

import java.util.*;

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        // Create a HashMap to store the frequency of elements in nums1
        HashMap<Integer, Integer> map = new HashMap<>();

        // Store the frequency of each element in nums1
        // Example:
        // nums1 = [4, 9, 5]
        // After this loop, the map will be:
        // map = {4 -> 1, 9 -> 1, 5 -> 1}
        for (int num : nums1) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // List to store the intersection
        List<Integer> result = new ArrayList<>();

        // Iterate through nums2 to find common elements
        // Example:
        // nums2 = [9, 4, 9, 8, 4]
        for (int num : nums2) {
            // Check if the current element exists in the map and has a positive frequency
            // For the first element (9):
            // map = {4 -> 1, 9 -> 1, 5 -> 1}
            // Since 9 exists and its count is 1, add 9 to the result and decrement the count
            // map becomes: {4 -> 1, 9 -> 0, 5 -> 1}
            if (map.containsKey(num) && map.get(num) > 0) {
                result.add(num); // Add the element to the result list
                map.put(num, map.get(num) - 1); // Decrease the frequency
            }
        }

        // Convert the result list to an array
        // Example:
        // result = [9, 4]
        int[] resultArray = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            resultArray[i] = result.get(i); // Copy elements to the array
        }

        // Final resultArray: [9, 4] or [4, 9] (order does not matter)
        return resultArray;
    }
}

    
*/}