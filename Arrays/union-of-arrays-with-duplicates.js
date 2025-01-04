{/*
   
    Union of Arrays with Duplicates
Difficulty: EasyAccuracy: 42.22%Submissions: 410K+Points: 2
Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays.

The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.

Note: Elements of a[] and b[] are not necessarily distinct.

Examples

Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3]
Output: 5
Explanation: Union set of both the arrays will be 1, 2, 3, 4 and 5. So count is 5.
Input: a[] = [85, 25, 1, 32, 54, 6], b[] = [85, 2] 
Output: 7
Explanation: Union set of both the arrays will be 85, 25, 1, 32, 54, 6, and 2. So count is 7.
Input: a[] = [1, 2, 1, 1, 2], b[] = [2, 2, 1, 2, 1] 
Output: 2
Explanation: We need to consider only distinct. So count of elements in union set will be 2.


the total time complexity is 
O(n+m).

the total space complexity is 

O(n+m).

class Solution {
    public static int findUnion(int a[], int b[]) {
        // code here
        HashSet<Integer>seen=new HashSet<>();
        for(int i=0;i<a.length;i++)
        {
            seen.add(a[i]);
        }
         for(int j=0;j<b.length;j++)
        {
            seen.add(b[j]);
        }
        return seen.size();
    }
}
*/}