{/*
  Check if the Sentence Is Pangram

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false

class Solution {
    public boolean checkIfPangram(String sentence) {
        Set<Character>seen=new HashSet<>();
        for(int i='a';i<='z';i++)
        {
        seen.add((char)i);
        }

        for(int i=0;i<sentence.length();i++)
        {
            seen.remove(sentence.charAt(i));
            {
                if(seen.isEmpty())
                {
                    return true;
                }
            }
        }
        return false;
    }
}


*/}