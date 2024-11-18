{  // this program basically on arrays,sorting,hashtable
    /* 
    1.Boyer-Moore Voting Algorithm: time complxeity(O(n))

    class Solution {
    public int majorityElement(int[] nums) {
    int majority=nums[0];
    int votes=1;

    // iteration throughout the array
    for( int i=1;i<nums.length;i++)
    {
        if(votes==0)
        {
            votes++;
            majority=nums[i];
        }
        else if(majority==nums[i])
        {
            votes++;
        }
        else{
            votes--;
        }
    }
    return  majority;
    }
  

    2.sorting approach 

    class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return nums[n/2];
    }
    }

    3.using hashmap

    class Solution {
    public int majorityElement(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
        }
        
        n = n / 2;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > n) {
                return entry.getKey();
            }
        } 
        
        return 0;
    }
}


    */
}