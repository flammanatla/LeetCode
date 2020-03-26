var assert = require("assert");
var isValid = require("./valid-parentheses");

var tests = [
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