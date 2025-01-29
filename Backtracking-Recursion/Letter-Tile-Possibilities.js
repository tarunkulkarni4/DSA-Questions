{/*

Intuition in 6 Easy Points:
Goal: Find all unique non-empty sequences of tiles, including permutations and combinations.

Avoid Duplicates: Use a frequency array to track how many times each letter appears and ensure no duplicate sequences.

Recursive Backtracking: Pick one letter, reduce its frequency, and recursively explore further sequences starting with it.

Count Valid Sequences: Each picked letter forms a valid sequence, so increment the count.

Backtrack: Restore the frequency after recursion to explore other possible sequences.


    
    Solution:
    
class Solution {
    public int numTilePossibilities(String tiles) {
        // Create a frequency array to count occurrences of each character ('A' to 'Z') in the string
        int[] freq = new int[26];
        for (char ch : tiles.toCharArray()) {
            freq[ch - 'A']++; // Increment the count for the character
        }

        // Call the helper method to compute the total number of sequences
        return backTrack(freq);
    }

    private int backTrack(int[] freq) {
        int count = 0; // To keep track of the number of valid sequences

        // Iterate through all 26 possible letters ('A' to 'Z')
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) { // If the current letter is available
                count++; // Count the current letter as a valid sequence
                freq[i]--; // Decrease the frequency of the letter (choose it)

                // Recur to explore further sequences using the remaining tiles
                count += backTrack(freq);

                // Backtrack: Restore the frequency of the letter (unchoose it)
                freq[i]++;
            }
        }

        return count; // Return the total count of sequences
    }
}

    
*/}