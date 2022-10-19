# 692: Top K Frequent Words
# Given an array of strings words and an integer k, return the k most frequent strings.

# Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

# Example 1:

# Input: words = ["i","love","leetcode","i","love","coding"], k = 2
# Output: ["i","love"]
# Explanation: "i" and "love" are the two most frequent words.
# Note that "i" comes before "love" due to a lower alphabetical order.
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        # create a dict to carry our words and their counts
        dict = {}
        for word in words:
            # if the word already exists in the dict increase the count by one
            if word in dict:
                dict[word] += 1
            # otherwise we set the count to one for that word since it doesn't exist yet
            else: 
                dict[word] = 1
        # Sort by 1) most frequent 2) (lower priority) alphabetical
        result = sorted(dict, key=lambda word: (-dict[word], word))
        # return the first k elements of our "result" list
        return result[:k]