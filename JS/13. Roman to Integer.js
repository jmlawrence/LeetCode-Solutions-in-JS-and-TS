// 13. Roman to Integer
// Problem: Given a roman numeral, convert it to an integer.
// Approach: Map roman to int; iterate, add or subtract based on next value.
// Time: O(n), Space: O(1)

var romanToInt = function (s) {
    const ROMAN_MAP = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    const lastVal = ROMAN_MAP[romanArr[romanArr.length - 1]];
    const romanArr = s.split('');

    return romanArr
        .slice(0, romanArr.length - 1)
        .map((char, idx) => {
            const [current, next] = [ROMAN_MAP[char], ROMAN_MAP[romanArr[idx + 1]]];

            return (+(current >= next) * 2 - 1) * current;
        })
        .reduce(
            (partialSum, num) => partialSum + num, 0) + lastVal;
}
