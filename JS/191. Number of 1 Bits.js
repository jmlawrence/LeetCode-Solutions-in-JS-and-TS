// 191. Number of 1 Bits

// -------------------------------------------

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// -------------------------------------------

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0;
    
    // From Wikipedia:
    // As Wegner described in 1960,[13] the bitwise AND of x ...
    // ... with x − 1 differs from x only in zeroing out the least ...
    // ... significant nonzero bit: subtracting 1 changes the rightmost ...
    // ... string of 0s to 1s, and changes the rightmost 1 to a 0. 
    // If x originally had n bits that were 1, then after only n iterations ... 
    // ... of this operation, x will be reduced to zero.
    while (n) {
        n &= (n - 1);
        result++;
    }

    return result;
};