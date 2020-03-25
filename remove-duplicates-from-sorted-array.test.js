var assert = require("assert");
var removeDuplicatesFromSortedArray = require("./remove-duplicates-from-sorted-array");

var tests = [
    { input: [1,1,2,4,4]},
    { input: []},
    { input: [0,0,1,1,1,2,2,3,3,4] },
    { input: [-999,-999,-998,-998,-997,-997,-996, -996] }
];

tests = tests.map(({input}) => ({
    input,
    expectedLength: [...new Set(input)].length,
    expectedArray: [...new Set(input)]
}));

function checkArraysEquality(array1, array2) {
    // return false if array doesn't exist (null, undefined)
    if (!array1 || !array2) {
       return false;
    } 

    if (array1.length !== array2.length) {
        return false;
    }

    var result = true;
    array1.forEach(function (value, index) {
        if (value !== array2[index]) {
            result = false;
        }
    });

    return result;    
}

console.log("starting tests");

tests.map(function (test) {
    var actualArray = [...test.input];
    var actualLength = removeDuplicatesFromSortedArray(actualArray);

    assert(
        checkArraysEquality(actualArray, test.expectedArray),
        "array equality check failed: actual result: [" + actualArray + 
        "], expected result: [" + test.expectedArray + "]"
    );
    assert(
        actualLength === test.expectedLength,
        "length check failed with actual result:" + actualLength + 
        ", expected result: " + test.expectedLength
    );
    console.log("test PASSED with input: [" + test.input + "]")
});

console.log("tests finished successfully");