/**
 * Roman numerals are usually written largest to smallest from left to right. 
 * There are six instances where subtraction is used:

 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var acc = 0;
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] === 'I') {
            acc++;
        }
        else if (s[i] === 'V') {
            if (i > 0 && s[i-1] === 'I') {
                acc--;
                i--;
            }
            acc += 5;
        }
        else if (s[i] === 'X') {
            if (i > 0 && s[i-1] === 'I') {
                acc--;
                i--;
            }
            acc += 10;
        }
        else if (s[i] === 'L') {
            if (i > 0 && s[i-1] === 'X') {
                acc -= 10;
                i--;
            }
            acc += 50;
        }
        else if (s[i] === 'C') {
            if (i > 0 && s[i-1] === 'X') {
                acc -= 10;
                i--;
            }
            acc += 100;
        }
        else if (s[i] === 'D') {
            if (i > 0 && s[i-1] === 'C') {
                acc -= 100;
                i--;
            }
            acc += 500;
        }
        else if (s[i] === 'M') {
            if (i > 0 && s[i-1] === 'C') {
                acc -= 100;
                i--;
            }
            acc += 1000;
        }
    }
    return acc;
};