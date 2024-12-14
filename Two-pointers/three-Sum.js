{
  /* 
    time and space is O( n2) and O(n)

    class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Check if the input array is null or has less than 3 elements
        // If so, return an empty list because a triplet cannot be formed
        if (nums == null || nums.length < 3) {
            return new ArrayList<>();
        }

        // Sort the array to make it easier to use the two-pointer technique and handle duplicates
        Arrays.sort(nums);

        // Use a HashSet to store the unique triplets (to avoid duplicate triplets)
        Set<List<Integer>> result = new HashSet<>();

        // Iterate through the array up to the third-last element
        for (int i = 0; i < nums.length - 2; i++) {
            // Initialize the left and right pointers
            int left = i + 1;          // Left pointer starts just after the current element
            int right = nums.length - 1; // Right pointer starts at the end of the array

            // While the left pointer is less than the right pointer
            while (left < right) {
                // Calculate the sum of the current triplet
                int sum = nums[i] + nums[left] + nums[right];

                // If the sum equals zero, it's a valid triplet
                if (sum == 0) {
                    // Add the triplet to the result set (to ensure uniqueness)
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    
                    // Move both pointers inward to look for other combinations
                    left++;
                    right--;
                } 
                // If the sum is less than zero, move the left pointer to the right
                // This increases the sum because the array is sorted
                else if (sum < 0) {
                    left++;
                } 
                // If the sum is greater than zero, move the right pointer to the left
                // This decreases the sum because the array is sorted
                else {
                    right--;
                }
            }
        }

        // Convert the HashSet of triplets into a List and return the result
        return new ArrayList<>(result);
    }
}


                               OR
                               
    Three Sum

Given an integer array arr, return all the unique triplets [arr[i], arr[j], arr[k]] such that i != j, i != k, and j != k, and arr[i] + arr[j] + arr[k] == 0.

Note: The triplets must be returned in sorted order, the solution vector should also be sorted, and the answer must not contain any duplicate triplets.

Examples:

Input: arr = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: arr[0] + arr[1] + arr[2] = (-1) + 0 + 1 = 0.
arr[1] + arr[2] + arr[4] = 0 + 1 + (-1) = 0.
arr[0] + arr[3] + arr[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Input: arr = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
Expected Time Complexity: O(n2)
Expected Auxiliary Space: O(n2)   



SolutioN;

class Solution {
    public static ArrayList<ArrayList<Integer>> triplets(int[] arr) {
        // Handle edge cases
        if (arr == null || arr.length < 3) {
            return new ArrayList<>();
        }

        // Sort the array
        Arrays.sort(arr);

        // Result list
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();

        // Iterate through the array
        for (int i = 0; i < arr.length - 2; i++) {
            // Skip duplicates for the first element
            if (i > 0 && arr[i] == arr[i - 1]) {
                continue;
            }

            int left = i + 1;
            int right = arr.length - 1;

            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];

                if (sum == 0) {
                    // Add the triplet to the result list
                    result.add(new ArrayList<>(Arrays.asList(arr[i], arr[left], arr[right])));
                    
                    // Move pointers and skip duplicates
                    while (left < right && arr[left] == arr[left + 1]) left++;
                    while (left < right && arr[right] == arr[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}


          
    
    
*/
}
