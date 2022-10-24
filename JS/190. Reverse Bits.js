// 190. Reverse Bits
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    return parseInt(n.toString(2).padStart(32, '0')
                     .split('').reverse()
                     .join(''), 2);
}
