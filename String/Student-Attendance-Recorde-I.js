{
  /*
    You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.

 

Example 1:

Input: s = "PPALLP"
Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
Example 2:

Input: s = "PPALLL"
Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

    Solution:

    class Solution {
    public boolean checkRecord(String s) {
        int absentOccurences = 0;
        int lateCount = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // If the character is 'A', count it and check if it's more than 1
            if (s.charAt(i) == 'A') {
                absentOccurences++;
                if (absentOccurences >= 2) {
                    return false; // More than 1 'A' means not eligible
                }
                lateCount = 0; // Reset lateCount when an 'A' is found
            } 
            // If the character is 'L', increment lateCount
            else if (s.charAt(i) == 'L') {
                lateCount++;
                if (lateCount >= 3) {
                    return false; // 3 consecutive 'L's means not eligible
                }
            } else {
                // Reset lateCount if 'P' is found (indicating break in late streak)
                lateCount = 0;
            }
        }
        
        return true; // Eligible if both conditions are satisfied
    }
}

*/
}
