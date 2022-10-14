// 190. Reverse Bits
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // To binary -> split -> reversed
    let reversed = n.toString(2).split('').reverse();

    // Start running sum at 0
    let output = 0;
    
    for (let i = 0; i < reversed.length; i++) {
        // Use i to count down exp
        let exp = 31 - i;
        
        // Value  power
        let product = 2 ** exp;
        
        // Add product - if binary is not zero at that place
        if (+reversed[i]) {
            output += product;
        }
    }
    
    return output;
};