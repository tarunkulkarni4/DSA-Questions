{
  /*
    Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

solution

class Solution {
    public void rotate(int[] nums, int k) {
        // this is when value of k is greatr than given array
        k=k%nums.length;

        // rotate the entire array
        reverse(nums,0,nums.length-1);

        // rotate the k elements 
        reverse(nums,0,k-1);
        
        //rotate the remaining array
        reverse(nums,k,nums.length-1);
    }
    private static void reverse(int[] nums,int sIndex,int lIndex)
    {
        while(sIndex<lIndex)
        {
            int temp=nums[sIndex];
            nums[sIndex]=nums[lIndex];
            nums[lIndex]=temp;
            sIndex++;
            lIndex--;
        }
    }

}
*/
}
