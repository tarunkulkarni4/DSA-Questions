{/*
    
   Fruit Into Baskets

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2]. 

BruteForce:

 Brute Force (O(N²))
Iterate over all subarrays.
Check if the subarray contains at most two distinct integers.
Update the maximum length.


class Solution {
    public int totalFruit(int[] fruits) {
        int n = fruits.length;
        int maxFruits = 0;

        for (int i = 0; i < n; i++) {
            Set<Integer> set = new HashSet<>();
            int count = 0;
            for (int j = i; j < n; j++) {
                set.add(fruits[j]);
                if (set.size() > 2) break;
                count++;
            }
            maxFruits = Math.max(maxFruits, count);
        }
        return maxFruits;
    }
}



SlidingWindow:

Maintain a window with at most two distinct fruits.
Use a HashMap to count occurrences.
Shrink the window when more than two distinct fruits appear.


class Solution {
    public int totalFruit(int[] fruits) {
        int left = 0;
        int n = fruits.length;
        int maxFruits = 0;
        Map<Integer, Integer> map = new HashMap<>();

        for (int right = 0; right < n; right++) {
            map.put(fruits[right], map.getOrDefault(fruits[right], 0) + 1);

            while (map.size() > 2) {
                int fruitCount = map.get(fruits[left]);
                if (fruitCount == 1) {
                    map.remove(fruits[left]);
                } else {
                    map.put(fruits[left], fruitCount - 1);
                }
                left++; // Move this outside the else block
            }
            
            // Update maxFruits correctly after adjusting the window
            maxFruits = Math.max(maxFruits, right - left + 1);
        }
        return maxFruits;
    }
}


*/}