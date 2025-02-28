{/*
    
   Custom Sort String
 
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

 

Example 1:

Input: order = "cba", s = "abcd"

Output: "cbad"

Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:

Input: order = "bcafg", s = "abcd"

Output: "bcad"

Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "dbca" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

 

Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.



BruteForc:

public class BruteForceCustomSort {
    public static String customSortString(String order, String s) {
        StringBuilder result = new StringBuilder();

        // Step 1: Arrange according to order
        for (char ch : order.toCharArray()) {
            for (int i = 0; i < s.length(); i++) {
                if (s.charAt(i) == ch) {
                    result.append(ch);
                }
            }
        }

        // Step 2: Add remaining characters not in order
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (order.indexOf(ch) == -1) {  // Character not in order
                result.append(ch);
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String order = "cba";
        String s = "abcd";
        System.out.println(customSortString(order, s)); // Possible Output: "cbad"
    }
}



Usinga HashMap:


public class CustomSortString {
    public static String customSortString(String order, String s) {
        // Step 1: Count occurrences of each character in s
        Map<Character, Integer> countMap = new HashMap<>();
        for (char ch : s.toCharArray()) {
            countMap.put(ch, countMap.getOrDefault(ch, 0) + 1);
        }

        // Step 2: Arrange characters according to order
        StringBuilder result = new StringBuilder();
        for (char ch : order.toCharArray()) {
            if (countMap.containsKey(ch)) {
                int count = countMap.get(ch);
                for (int i = 0; i < count; i++) {
                    result.append(ch);
                }
                countMap.remove(ch); // Remove character once added
            }
        }

        // Step 3: Add remaining characters not in order
        for (char ch : countMap.keySet()) {
            int count = countMap.get(ch);
            for (int i = 0; i < count; i++) {
                result.append(ch);
            }
        }

        // Step 4: Return the result string
        return result.toString();
    }
}
 

*/}