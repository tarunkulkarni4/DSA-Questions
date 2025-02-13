{/*
    Max Sum of a Pair With Equal Sum of Digits

You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

 

Example 1:

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.
Example 2:

Input: nums = [10,12,19,14]
Output: -1
Explanation: There are no two numbers that satisfy the conditions, so we return -1.
 
Brute Force:

class Solution {
    public int maximumSum(int[] nums) {
        int sum=-1;
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
                if(digiSum(nums[i])==digiSum(nums[j]))
                {
                 sum=Math.max(sum,nums[i]+nums[j]);
                }
            }
           
        }
         return sum;
    }
    private int digiSum(int nums)
    {
        int sum=0;
        while(nums>0)
        {
            sum+=nums%10;
            nums/=10;
        }
        return sum;
    }
}


Optimized:

class Solution {
    public int maximumSum(int[] nums) {
        int[] max = new int[82];
        int ans = -1;
        
        for (int x : nums) {
            int sum = 0;
            int temp = x;

            while (temp != 0) {
                sum += temp % 10;
                temp /= 10;
            }

            if (max[sum] != 0) {
                ans = Math.max(ans, x + max[sum]);
            }

            max[sum] = Math.max(max[sum], x);
        }

        return ans;
    }
}

*/}