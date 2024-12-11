{  
  /* 1.BruteForce-Approach// time complexiety is o(n2)
    class Solution {
    public int[] twoSum(int[] nums, int target) {
      int n=nums.length;
      for(int i=0;i<n;i++)
      {
        for(int j=i+1;j<n;j++)
        {
            if(nums[i]+nums[j]==target)
            {
                return new int[]{i,j};
            }
        }
      }
      return new int[]{};
    }
}


         OR

         import java.util.HashMap;

public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // If the complement exists in the map, return the indices
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            
            // Otherwise, store the number and its index
            map.put(nums[i], i);
        }
        
        return new int[] {}; // Return an empty array if no solution found
    }
}


    */

              
}
 
