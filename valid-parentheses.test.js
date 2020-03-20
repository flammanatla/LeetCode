var assert = require("assert");
var isValid = require("./valid-parentheses");

var tests = [
    { input: "{}}", result: false },
    { input: "{}", result: true }
];

console.log("starting tests");

tests.map(function (test) {
    assert(
        isValid(test.input) === test.result,
        "test failed with input: " + test.input
    );
});

console.log("tests finished successfully");