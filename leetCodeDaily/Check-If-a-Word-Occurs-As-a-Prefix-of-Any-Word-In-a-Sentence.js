{/*


class Solution {
    public int isPrefixOfWord(String sentence, String searchWord) {
        // Split the sentence into words
        String[] words = sentence.split(" ");
        
        // Iterate through each word
        for (int i = 0; i < words.length; i++) {
            // Check if the current word starts with the searchWord
            if (words[i].startsWith(searchWord)) {
                // Return the index (1-based)
                return i + 1;
            }
        }
        
        // Return -1 if no word starts with the prefix
        return -1;
    }
}



*/}