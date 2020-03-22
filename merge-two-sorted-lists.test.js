var assert = require("assert");
var mergeLists = require("./merge-two-sorted-lists");

var tests = [
    { input1: [1,2,4], input2: [1,3,4], result: [1,1,2,3,4,4] },
    { input1: [], input2:[2], result: [2] },
    { input1: [3], input2:[], result: [3] },
    { input1: [], input2:[], result: [] },
    { input1: [50], input2:[52,53,54], result: [50,52,53,54] },
    { input1: [60,61,62], input2:[63], result: [60,63,61,62] },
    { input1: [2], input2:[1], result: [2,1] }
];

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function arrayToLinkedList(array) {
    // return array.reduce( function(prev, curr) {
    //     var node = new ListNode(curr);
    //     if ( prev !== null ) {
    //         prev.next = node;  
    //     }
    //     return node;
    // }, null); 
    var head = null;
    var prev = null;
    array.forEach( function(element) {
        var node = new ListNode(element);   // create node for each element of array
        if ( head === null ) {              // if there is no head yet, initialise it with node and immediately make it prev
            head = node;
            prev = head;
        }
        else {
            prev.next = node;               // prev links with created node 
            prev = node;                    
        }
    });
    return head;
}

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

console.log("starting tests");

tests.map(function (test) {
    var mergedList = mergeLists(arrayToLinkedList(test.input1), arrayToLinkedList(test.input2));
    //console.log(mergedList.val); // mergedList.next.val, mergedList.next.next.val);
    var resultList = arrayToLinkedList(test.result);
    //console.log(resultList.val, resultList.next.val);


    assert(
        checkListsEquality(mergedList, resultList),
        "test failed with input: " + test.input1 + " and " + test.input2
    );
    console.log("test PASSED with input: " + test.input1 + " and " + test.input2)
});

console.log("tests finished successfully");