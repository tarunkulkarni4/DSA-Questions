{/*

    Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

    1.Brute force approach :time complexity of O(n²) ,o(1)

    class Solution {
    public int findDuplicate(int[] nums) {
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
                if(nums[i]==nums[j])
                {
                    return nums[i];
                }
            }
        }
        return -1;
    }
}



                      OR


2.using sorting: O(n log n),o(1)

class Solution {
    public int findDuplicate(int[] nums) {
        // Step 1: Sort the array
        Arrays.sort(nums);
        
        // Step 2: Check for consecutive duplicates
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                return nums[i];  // Duplicate found, return it
            }
        }
        
        return -1;  // No duplicate found (this case will not happen as per problem constraints)
    }
}


    OR

3.using HashSEt:  The time complexity is O(n), and the space complexity is O(n)

import java.util.HashSet;

class Solution {
    public int findDuplicate(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        
        // Step 2: Iterate through the array using a normal for loop
        for (int i = 0; i < nums.length; i++) {
            // Step 3: Check if the number is already in the set
            if (seen.contains(nums[i])) {
                return nums[i];  // Duplicate found, return it
            } else {
                seen.add(nums[i]);  // Add the number to the set
            }
        }
        
        return -1;  // No duplicate found (this case will not happen as per problem constraints)
    }
}


           OR

4.optimized time ,space is o(n),O(1)

class Solution {
    public int findDuplicate(int[] nums) {

    // Step 1: Start fast and slow pointers
    int slow = 0, fast = 0;

    // Step 2: Move slow pointer 1 step and fast pointer 2 steps until they meet
    do {
        slow = nums[slow];         // Slow moves one step
        fast = nums[nums[fast]];   // Fast moves two steps
    } while (slow != fast);        // Continue until they meet

    // Step 3: Move both pointers at the same speed to find the entrance to the cycle
    slow = 0; // Reset slow pointer to the start
    while (slow != fast) {
        slow = nums[slow];   // Move slow pointer one step
        fast = nums[fast];   // Move fast pointer one step
    }
    return slow;  // The point where slow and fast meet is the duplicate number
}

}


5.gfg solutution
   time  O(n + k log k),space is O(n)

class Solution {
    public List<Integer> findDuplicates(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new LinkedHashSet<>();

        for (int num : arr) {
            if (seen.contains(num)) {
                duplicates.add(num); // Add to duplicates if already seen
            } else {
                seen.add(num); // Mark as seen
            }
        }

        // Convert to list and sort the result
        List<Integer> result = new ArrayList<>(duplicates);
        Collections.sort(result);
        return result;
    }
}


                        OR

6.GFG

time complexity of O(n²) ,o(1)

class Solution {
    public List<Integer> findDuplicates(int[] arr) {
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            // Check if the current element has already been seen in the result
            if (result.contains(arr[i])) {
                continue;
            }
            // Compare arr[i] with all subsequent elements
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    result.add(arr[i]); // Add to result if duplicate found
                    break; // No need to compare further
                }
            }
        }

        return result;
    }
}







*/}