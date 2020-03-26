const assert = require("assert");
const strStr = require("./28.implement-str-str");
const utils = require("./utils");

const tests = [
    { haystack: 'hello', needle: 'll', output: 2},
    { haystack: [], needle: 'q', output: -1},
    { haystack: 'qwerty', needle: '', output: 0},
    { haystack: 'haystack', needle: 'k', output: 7 },
    { haystack: 'word', needle: 'word', output: 0 },
    { haystack: 'wwwwwwwwww', needle: 'word', output: -1 },
    { haystack: 'w', needle: 'word', output: -1 },
    { haystack: 'Mr Robot', needle: ' ', output: 2 }
];

tests.map((test, index) => {
    utils.runTest(`test# ${index}`, tests.length, () => {
        const actualOutput = strStr(test.haystack, test.needle);

        assert(
            strStr(test.haystack, test.needle) === test.output,
            "Test FAILED for needle '" + test.needle + "' and haystack '" + test.haystack + 
            "' with actual output: " + actualOutput + " and expected output: " + test.output
        );
    });
});