{/*
  Word Ladder

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.  

import java.util.*;

class Solution {
    class Pair {
        String first;
        int second;

        Pair(String first, int second) {
            this.first = first;
            this.second = second;
        }
    }

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList); // ✅ Convert wordList to HashSet for quick lookup
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(beginWord, 1)); // ✅ Start with (beginWord, step=1)

        if (!wordSet.contains(endWord)) return 0; // ❌ If endWord is not in wordList, return 0

        wordSet.remove(beginWord); // ❌ Remove beginWord from set to prevent revisits

        // 🔄 BFS Traversal
        while (!queue.isEmpty()) {
            Pair curr = queue.poll(); // ✅ Dequeue the front element
            String word = curr.first;
            int steps = curr.second;

            // 🎯 If we reach the target word, return the number of steps
            if (word.equals(endWord)) return steps;

            // 🔄 Iterate over each character in the word
            for (int i = 0; i < word.length(); i++) { // ✅ Fixed missing parentheses
                char[] charArray = word.toCharArray(); // ✅ Convert word to char array

                // 🔄 Try replacing it with every letter from 'a' to 'z'
                for (char ch = 'a'; ch <= 'z'; ch++) {
                    charArray[i] = ch;
                    String newWord = new String(charArray); // ✅ Create the transformed word

                    // ✅ If transformed word exists in wordSet and is unvisited
                    if (wordSet.contains(newWord)) {
                        wordSet.remove(newWord); // ❌ Remove from set to prevent duplicate visits
                        queue.add(new Pair(newWord, steps + 1)); // ✅ Correctly add new pair
                    }
                }
            }
        }
        return 0; // ❌ No transformation sequence found
    }
}

*/}