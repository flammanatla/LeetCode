/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
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