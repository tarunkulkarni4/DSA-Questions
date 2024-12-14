{
  /*
    
    Sorted and Rotated Minimum
Difficulty: EasyAccuracy: 40.57%Submissions: 134K+Points: 2
A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it. 

Examples:

Input: arr[] = [5, 6, 1, 2, 3, 4]
Output: 1
Explanation: 1 is the minimum element in the array.
Input: arr[] = [3, 1, 2]
Output: 1
Explanation: Here 1 is the minimum element.
Input: arr[] = [4, 2, 3]
Output: 2
Explanation: Here 2 is the minimum element.


solution: brute force time,space is O(n),O(1)
    
public class Solution {
    public int findMin(int[] nums) {
        int min = nums[0]; // Start by assuming the first element is the minimum
        
        // Iterate through the array and find the smallest element
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i]; // Update min if a smaller element is found
            }
        }
        
        return min; // Return the minimum element found
    }

    }

             OR
             
             
SOlution :using Binary search time ,space is O(log n) and space is O(1)

public class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            // If the middle element is greater than the rightmost element,
            // the minimum is in the right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } 
            // Otherwise, the minimum is in the left half
            else {
                right = mid;
            }
        }
        
        // After the loop, left == right, and we return the minimum element
        return nums[left];
    }
}




    */
}
