const assert = require("assert");
const isValid = require("./valid-parentheses");
const utils = require("./utils");

const tests = [
    { input: "{}}", result: false },
    { input: "{}", result: true }
];

tests.map((test, index) => {
    utils.runTest(`test# ${index}`, tests.length, () => {
        assert(
            isValid(test.input) === test.result,
            "test failed with input: '" + test.input + "'"
        );
    });
});