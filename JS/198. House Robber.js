// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let one = 0;
  let two = 0;

  for (const num of nums) {
    const temp = Math.max(num + one, two);
    one = two;
    two = temp;
  }

  return two;
};
b;
