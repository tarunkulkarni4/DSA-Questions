{/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

 

Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
Example 2:

Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.

class Solution {
    public boolean lemonadeChange(int[] bills) {
        int five = 0; // Step 1: Initialize $5 bill count
        int ten = 0;  // Step 2: Initialize $10 bill count

        // Step 3: Loop through each customer's bill
        for (int i = 0; i < bills.length; i++) {
            int bill = bills[i];

            // Step 4: If customer pays with $5
            if (bill == 5) {
                // Step 4.1: No change needed, increase $5 count
                five++;
            } 
            // Step 5: If customer pays with $10
            else if (bill == 10) {
                // Step 5.1: Needs $5 change
                if (five > 0) {
                    // Step 5.2: Give one $5, keep $10
                    five--;
                    ten++;
                } else {
                    // Step 5.3: Cannot give change, return false
                    return false;
                }
            } 
            // Step 6: If customer pays with $20
            else {
                // Step 6.1: Needs $15 change
                if (ten > 0 && five > 0) {
                    // Step 6.2: Give one $10 and one $5
                    ten--;
                    five--;
                } else if (five >= 3) {
                    // Step 6.3: Else give three $5 bills
                    five -= 3;
                } else {
                    // Step 6.4: Not enough change, return false
                    return false;
                }
            }
        }

        // Step 7: All customers processed successfully
        return true;
    }
}

*/}