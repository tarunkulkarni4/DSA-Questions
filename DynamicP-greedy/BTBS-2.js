{
  /*
    
    1.using dp 

     class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0; // Initialize the variable to store total profit
        
        // Iterate over the prices array starting from the second day
        for (int i = 1; i < prices.length; i++) {
            // If today's price is greater than yesterday's price
            if (prices[i] > prices[i - 1]) {
                // Calculate the profit for this transaction and add to maxProfit
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        
        return maxProfit; // Return the total profit
    }
}
   
           OR

        2.if use list the we have to use get method


   public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public int maxProfit(final List<Integer> A) {
        int maxProfit=0;
        for(int i=1;i<A.size();i++)
        {
            if(A.get(i)>A.get(i-1))
            {
                maxProfit+=A.get(i)-A.get(i-1);
            }
        }
        return maxProfit;
    }
}
*/
}
