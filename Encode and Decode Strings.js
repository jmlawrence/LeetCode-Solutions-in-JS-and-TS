// 271. Encode and Decode Strings
// -------------------------------------------

// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// -------------------------------------------
// Input: dummy_input = ["Hello","World"]
// Output: ["Hello","World"]
// Explanation:
// Machine 1:
// Codec encoder = new Codec();
// String msg = encoder.encode(strs);
// Machine 1 ---msg---> Machine 2

// Machine 2:
// Codec decoder = new Codec();
// String[] strs = decoder.decode(msg);

// -------------------------------------------
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let result = "";
    
    // For each word, convert to <# of chars><"#"><word>
    for (const word of strs) {
        result += `${word.length}#${word}`;
    }
    
    return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let result = [];
    let i = 0;
    
    while (i < s.length) {
        let j = i;
        
        // Find "#"
        while (s[j] !== "#") {   
            j++;
        }
    
        // Get # of chars in word (not the funky format)
        // Why +?                       -> Converts to int
        // Why substring and not index? -> We don't know how many chars the number is
        let length = +s.substring(i, j);
        
        // Get start IDX of word
        let startIdx = j + 1;
        
        // Get end IDX of word using length
        let endIdx = startIdx + length;
        
        result.push(s.substring(startIdx, endIdx));
        
        i = endIdx;
    }
    
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */