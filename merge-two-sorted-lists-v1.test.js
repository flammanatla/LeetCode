var assert = require("assert");
var mergeLists = require("./merge-two-sorted-lists-v1");
var utils = require("./utils");

var tests = [
    { input1: [1,2,4], input2: [1,3,4], result: [1,1,2,3,4,4] },
    { input1: [], input2:[2], result: [2] },
    { input1: [3], input2:[], result: [3] },
    { input1: [], input2:[], result: [] },
    { input1: [50], input2:[52,53,54], result: [50,52,53,54] },
    { input1: [60,61,62], input2:[63], result: [60,63,61,62] }
];

function checkListsEquality(l1, l2) { 
    if (l1 === null && l2 === null) {
        return true;
    }
    else if (l1 === null || l2 === null ) {
        return false;
    }

    // fail the case when one of lists has only head and another is longer 
    if (l1.next === null || l2.next === null) {
        if (l1.next !== null || l2.next !== null) {
            return false;
        }
        if (l1.val !== l2.val) {
            return false;
        }
    }

    var curr1 = l1;
    var curr2 = l2; 
    while (curr1 != null) {
        if ((curr1.next !== null && curr2.next === null) ||
            (curr1.next === null && curr2.next !== null)) { // if one of lists is shorter 
            return false;
        }
        if (curr1.val !== curr2.val) {
            return false;
        }

        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return true; 
}

tests.map((test, index) => {
    utils.runTest(`test# ${index}`, tests.length, () => {
        const mergedList = mergeLists(utils.arrayToLinkedList(test.input1), utils.arrayToLinkedList(test.input2));
        const resultList = utils.arrayToLinkedList(test.result);

        assert(
            checkListsEquality(mergedList, resultList),
            "with input: " + test.input1 + " and " + test.input2
        );
    });
});