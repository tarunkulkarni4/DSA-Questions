{
  /*
   
    Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1


1.solution 

using Recurriosn takes o(2 raise to n) and space is o(n)





2.solution using memoization:

tc is o(n2) and space is o(n)
 
class Solution {
    static int lis(int arr[]) {
        // code here
        int n=arr.length;
        int[] dp=new int[n];
        for(int i=0;i<n;i++)
        {
            dp[i]=1;
        }
        
        for(int i=1;i<n;i++)
        {
            for(int j=0;j<i;j++)
            {
                if(arr[i]>arr[j])
                {
                  dp[i]=Math.max(dp[i],dp[j]+1);  
                }
            }
        }
        int maxLen=0;
        for(int len:dp)
        {
            maxLen=Math.max(len,maxLen);
        }
        return maxLen;
    }
}



3.solution using binaru search:

 Approach (3 lines explanation):
Use a list sub to keep track of the smallest tail of all increasing subsequences.

For each element num in the array, use binary search to find its position in sub.

Replace or append num to maintain the increasing order in sub; the length of sub is the answer.

✅ Java Code:


public class LIS {
    public int lengthOfLIS(int[] nums) {
        List<Integer> sub = new ArrayList<>();
        for (int num : nums) {
            int i = Collections.binarySearch(sub, num);
            if (i < 0) i = -(i + 1);
            if (i == sub.size()) sub.add(num);
            else sub.set(i, num);
        }
        return sub.size();
    }
}




    
    
*/
}
