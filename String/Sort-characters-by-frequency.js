{/*

    Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answe

Approach:

Count the frequency of each character using a HashMap.

Store characters with frequencies in a custom class (FreqChar).

Insert all into a Max-Heap (PriorityQueue) sorted by frequency.

Build the result string by repeatedly polling from the heap and appending characters.

tc->o(n)+o(k logk)
sc->o(k)+o(k)

class Solution {
    class FreqChar {
        char ch;
        int freq;

        public FreqChar(char ch, int freq) {
            this.ch = ch;
            this.freq = freq;
        }
    }

    public String frequencySort(String s) {
        // Step 1: Count character frequencies
        HashMap<Character, Integer> map = new HashMap<>();
        for (char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        // Step 2: Max-Heap based on frequency
        PriorityQueue<FreqChar> maxHeap = new PriorityQueue<>(
            (a, b) -> b.freq - a.freq
        );

        // Step 3: Add all characters and their frequencies into the heap
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            maxHeap.add(new FreqChar(entry.getKey(), entry.getValue()));
        }

        // Step 4: Build result string using a for loop
        StringBuilder result = new StringBuilder();
        while (!maxHeap.isEmpty()) {
            FreqChar current = maxHeap.poll();
            for (int i = 0; i < current.freq; i++) {
                result.append(current.ch);
            }
        }

        return result.toString();
    }
}

    
*/}