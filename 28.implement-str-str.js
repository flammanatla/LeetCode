/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (33.88%)
 * Likes:    1336
 * Dislikes: 1726
 * Total Accepted:    596.4K
 * Total Submissions: 1.8M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    for (var strawIndex = 0; strawIndex < haystack.length; strawIndex++) {   // hellow 
        
        if (strawIndex > haystack.length - needle.length) {
            return -1;
        }
        
        for (var letterIndex = 0; letterIndex < needle.length; letterIndex++) {   // ow
            var indexOfCorrespondingLetterInNeedle = strawIndex + letterIndex;

            if (haystack[indexOfCorrespondingLetterInNeedle] !== needle[letterIndex]) {
                break;
            }

            if (letterIndex === needle.length - 1) {
                return strawIndex;
            }
        }
    }

    return -1;
};

module.exports = strStr;
// @lc code=end

