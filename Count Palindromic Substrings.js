// 647. Palindromic Substrings
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;

    const countPali = (s, l, r) => {    
        let res = 0;
        
        // While left and right are in bounds ...
        // ... and if the left and right values are equal
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res++;
            l--;
            r++;
        }
        
        return res;
    }
    
    // For every element
    for (let i = 0; i < s.length; i++) {
        // Odds
        res += countPali(s, i, i);

        // Evens
        res += countPali(s, i, i + 1);
    }
    
    return res;
};