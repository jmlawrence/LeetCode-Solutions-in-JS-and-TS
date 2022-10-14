// 213. House Robber II
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const helper = (nums) => {
        let one = 0;
        let two = 0;

        for (const num of nums) {
            const temp = Math.max(num + one, two);
            one = two;
            two = temp;
        }

        return two;
    }
    
    // Skip first
    let a = helper(nums.slice(1));
    
    // Skip last
    let b = helper(nums.slice(0, nums.length - 1));
    
    return Math.max(nums[0], a, b);
};