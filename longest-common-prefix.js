/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
//     var shortestWord = str.reduce(function (prev, curr) {
        
//     }, 100);
    if (strs.length === 0) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    }
    var prefix = "";
    var commonLetter = "";
    for (var letter = 0; letter < strs[0].length; letter ++) { // position of letter in the word
        for (var word = 0; word < strs.length-1; word++) { // position of word
            if (strs[word+1][letter] === undefined) {
                return prefix;
            }
            if (strs[word][letter] ===  strs[word+1][letter]) {
                commonLetter =  strs[word][letter];
            }
            else {
                return prefix;
            }
        }
    prefix += commonLetter;
    }
    return prefix;
};