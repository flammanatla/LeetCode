/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

 * @param {string} s
 * @return {boolean}
 */
 
module.exports = function(s) {
    if (s.length%2 === 1) {
      return false;
    }  
    else if (s.length === 0) {
        return true;
    }
    
    var openBracket = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(' ) {
            openBracket.push(s[i]);
            // open bracket in the end of the string means fail 
            if (i === s.length - 1) {
                return false;
            }
        }
        else {
            var last = openBracket[openBracket.length-1];
            if ((s[i] === ']' && last === '[') ||
                (s[i] === '}' && last === '{') ||
                (s[i] === ')' && last === '(') ) {
                openBracket.pop();
                if (openBracket.length === 0) {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    }
    
    return false;
};
