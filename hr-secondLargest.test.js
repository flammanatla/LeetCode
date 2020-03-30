const assert = require("assert");
const getSecondLargest = require("./hr-secondLargest");
const utils = require("./utils");

const tests = [
    { input: [10, 9, 9, 8, 8, 11, 8, 0, 9, 1], result: 10 },
    { input: [2, 3, 6, 6, 5], result: 5 },
    { input: [-999, -900, -901], result: -901 }

];

tests.map((test, index) => {
    utils.runTest(`test# ${index}`, tests.length, () => {
        assert(
            getSecondLargest(test.input) === test.result,
            "with input: [" + test.input + "]"
        );
    });
});