{
  /*
    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
    

// optimized solution
    class Solution {
    public int[] sortedSquares(int[] nums) {
        int sIndex=0;
        int lIndex=nums.length-1;
        int [] result=new int[nums.length];
        int kIndex=nums.length-1;
        while(sIndex<=lIndex)
        {
           if(Math.abs(nums[sIndex])>Math.abs(nums[lIndex]))
           {
            result[kIndex]=nums[sIndex]*nums[sIndex];
            sIndex++;
           }
           else
           {
            result[kIndex]=nums[lIndex]*nums[lIndex];
            lIndex--;
           }
           kIndex--;
        }
        return result;  
    }
}*/
}
