{/*
    Longest Substring with K Uniques(Fruits and baskets)

Given a string s, you need to print the size of the longest possible substring with exactly k unique characters. If no possible substring exists, print -1.

Examples:

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: "cbebebe" is the longest substring with 3 distinct characters.
Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.
Input: s = "aabaaab", k = 2
Output: 7
Explanation: "aabaaab" is the longest substring with 2 distinct characters.


BruteForce:

Generate all substrings: Use two nested loops to generate all substrings.
Check distinct characters: Use a HashSet to count unique characters in each substring.
Update the maximum length: If a substring contains exactly k distinct characters, update the maximum length.

class Solution {
    public int longestkSubstr(String s, int k) {
        int maxCount = -1;
        int n = s.length();

        for (int i = 0; i < n; i++) {
            Set<Character> set = new HashSet<>();
            for (int j = i; j < n; j++) {
                set.add(s.charAt(j));
                if (set.size() == k) {
                    maxCount = Math.max(maxCount, j - i + 1);
                } else if (set.size() > k) {
                    break;
                }
            }
        }
        return maxCount;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestkSubstr("aabacbebebe", 3)); // Output: 7
    }
}



Optimized:

its the same problem like fruits and baskets but here h distinct values

import java.util.*;

class Solution {
    public int longestkSubstr(String s, int k) {
        int maxCount = -1;
        int left = 0;
        int n = s.length();
        Map<Character, Integer> map = new HashMap<>();

        for (int right = 0; right < n; right++) {
            map.put(s.charAt(right), map.getOrDefault(s.charAt(right), 0) + 1);

            if (map.size() > k) {
                int count = map.get(s.charAt(left));
                if (count == 1) {
                    map.remove(s.charAt(left));  // Fixed: Used s.charAt(left)
                } else {
                    map.put(s.charAt(left), count - 1);  // Fixed: Used s.charAt(left)
                }
                left++;
            }
            if (map.size() == k) {
                maxCount = Math.max(maxCount, right - left + 1);
            }
        }
        return maxCount;
    }
}

    
*/}