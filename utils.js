const chalk = require('chalk');
const log = console.log;

let i = 0;
let allTestsPassed = true;
function runTest(title, numberOfTests, test) {
    if (i === 0) {
        log("======== tests started ========");
    }

    let testError;
    try {
        test();
    } catch (error) {
        testError = error;
    };

    if (testError) {
        log(chalk.bold.red("FAIL: ") + `${title} \n ${testError.stack}`);
        allTestsPassed = false;
    } else {
        log(chalk.green("PASS:"), title);
    }
    
    if (i === numberOfTests - 1) {
        const colouredResult = allTestsPassed ? chalk.bold.green("successfully") : chalk.bold.red("unsuccessfully");
        log("ALL tests finished " + colouredResult);
    }
    i++;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function arrayToLinkedList(array) {
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

module.exports = {
    arrayToLinkedList: arrayToLinkedList,
    ListNode: ListNode,
    runTest: runTest
};