# Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.

# An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

# Example 1:
# Input: nums = [23,2,4,6,7], k = 6
# Output: true
# Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        dict = {0: -1}
        sum = 0
        for i, num in enumerate(nums):
            if num != 0:
                sum = (sum - num) % k
            else:
                sum += num
            if sum not in dict:
                dict[sum] = i
            else:
                # we found it! we then must check that atleast 2 continous elements triggered this
                if i - dict[sum] >= 2:
                    return True
        return False