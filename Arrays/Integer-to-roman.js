{/*
    
    Integer to Roman
Solved
Medium
Topics
Companies
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000


Example 1:

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
Example 2:

Input: num = 58

Output: "LVIII"

Explanation:

50 = L
 8 = VIII
Example 3:

Input: num = 1994

Output: "MCMXCIV"

Explanation:

1000 = M
 900 = CM
  90 = XC
   4 = IV


   solution:


Time Complexity: O(log(num)) since we are reducing num by subtracting values that are powers of 10 or their subtractive forms.
Space Complexity: O(log(num)) as the length of the Roman numeral string is proportional to the magnitude of num.



Time Complexity: O(1)
Space Complexity: O(k), where k is the number of Roman numeral symbols (typically small, at most 15)

   public class IntegerToRoman {
    // Method to convert integer to Roman numeral
    public String intToRoman(int num) {
        // Arrays for Roman numeral values and their corresponding symbols
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        
        // StringBuilder to store the resulting Roman numeral
        StringBuilder roman = new StringBuilder();
        
        // Iterate through the values array
        for (int i = 0; i < values.length; i++) {
            // While the number is greater than or equal to the current value
            while (num >= values[i]) {
                num -= values[i];  // Subtract the value
                roman.append(symbols[i]);  // Append the corresponding symbol
            }
        }
        
        // Return the resulting Roman numeral string
        return roman.toString();
    }

    //
     * Example explanation:
     * For num = 1994:
     * 1. Start with 1994. Check if 1994 >= 1000 (true). Subtract 1000, num becomes 994.
     * 2. Check if 994 >= 900 (true). Subtract 900, num becomes 94.
     * 3. Check if 94 >= 90 (true). Subtract 90, num becomes 4.
     * 4. Check if 4 >= 4 (true). Subtract 4, num becomes 0.
     * Roman numeral formed: "MCMXCIV"
     //
}

*/}