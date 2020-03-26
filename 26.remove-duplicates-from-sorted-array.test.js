const assert = require("assert");
const removeDuplicatesFromSortedArray = require("./26.remove-duplicates-from-sorted-array");
const utils = require("./utils");

let tests = [
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

    let result = true;
    array1.forEach(function (value, index) {
        if (value !== array2[index]) {
            result = false;
        }
    });

    return result;    
}


tests.map((test, index) => {
    utils.runTest(`test# ${index}`, tests.length, () => {
        const actualArray = [...test.input];
        const actualLength = removeDuplicatesFromSortedArray(actualArray);

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
    });
});