{/*
  The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.



   BruteForce:
   For each element in nums1, find its index in nums2.

From that index, iterate through nums2 and find the first element greater than the current element. If found, return that element; otherwise, return -1.

// Java implementation to find the next
// greater element using two loops
import java.util.ArrayList;

class GfG {

    static ArrayList<Integer> nextLargerElement(int[] arr) {
        int n = arr.length;
        ArrayList<Integer> res = new ArrayList<>();

        // Initialize res with -1 for all elements
        for (int i = 0; i < n; i++) {
            res.add(-1);
        }

        // Iterate through each element in the array
        for (int i = 0; i < n; i++) {

            // Check for the next greater element
            // in the rest of the array
            for (int j = i + 1; j < n; j++) {
                if (arr[j] > arr[i]) {
                    res.set(i, arr[j]);
                    break;
                }
            }
        }

        return res;
    }

}




Using stack:

    import java.util.HashMap;
import java.util.Stack;

public class NextGreaterElement {

    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        // Stack to store elements while finding the next greater element
        Stack<Integer> stack = new Stack<>();
        // HashMap to store the next greater element for each element in nums2
        HashMap<Integer, Integer> map = new HashMap<>();

        // Step 1: Find the next greater element for each element in nums2
        for (int i = nums2.length - 1; i >= 0; i--) {
            // Get the current element from nums2
            int element = nums2[i];

            // Pop elements from the stack until we find a greater element
            while (!stack.isEmpty() && stack.peek() <= element) {
                stack.pop();
            }

            // If stack is empty, it means there is no greater element for this element
            if (stack.isEmpty()) {
                map.put(element, -1);  // -1 indicates no greater element
            } else {
                // If the stack is not empty, the top element is the next greater element
                map.put(element, stack.peek());
            }

            // Push the current element onto the stack
            stack.push(element);
        }

        // Step 2: Build the result array for nums1 using the map
        int[] result = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            // Get the next greater element for each element in nums1 from the map
            result[i] = map.get(nums1[i]);
        }

        // Return the result array
        return result;
    }
}


*/}