/**
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * V2 - input lists are converted to the arrays, concatenated, sorted and converted back to the linked list
 * 
 * 
  var merged = [
    ...convertToArray(l1),
    ...convertToArray(l2)
  ];

  merged.sort();

  return convertToList(merged);

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var utils = require("./utils");

var linkedListToArray = function (list) {
    if (list === null) {
        return [];
    }
    var curr = list;
    var convertedArray = [];
    
    while (curr !== null) {
        convertedArray.push(curr.val);
        curr = curr.next;
    }
    return convertedArray;
}; 

var mergeTwoLists = function(l1, l2) {

    var sortedMergedArray = linkedListToArray(l1).concat(linkedListToArray(l2)).sort((a, b) => a - b);

    return utils.arrayToLinkedList(sortedMergedArray);
}

module.exports = mergeTwoLists;
