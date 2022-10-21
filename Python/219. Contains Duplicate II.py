# 219. Contains Duplicate II

# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true
# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true
# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dict = {}

        # Go through all the idxs
        for i in range(len(nums)):
            # Check if this num is already in the dict and it meets the index difference requirement
            if nums[i] in dict and abs(i - dict[nums[i]]) <= k:
                # If it does; we're done!
                return True

            # No match yet, set the number as the key in the dict and the index as the value
            dict[nums[i]] = i

        return False
