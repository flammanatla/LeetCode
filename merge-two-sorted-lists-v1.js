/**
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * V1 - mergedList isn't sorted
 * 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var utils = require("./utils");

var mergeTwoLists = function(l1, l2) {

  var head = null;
  var curr1 = l1;
  var curr2 = l2;
  var tail = null;

  while (curr1 !== null || curr2 !== null) {
    var node1 = null;
    if (curr1 !== null) {
      var node1 = new utils.ListNode(curr1.val);
    }

    var node2 = null;
    if (curr2 !== null) { // create node2 only if remaining part of l2 exists 
      node2 = new utils.ListNode(curr2.val);
    }

    if (curr1 !== null && curr2 !== null) {
      node1.next = node2;
    }

    if (head === null) {
      if (curr1 !== null) {
        head = node1;
      }
      else {
        head = node2;
      }
    }

    if (tail !== null) {
      if (curr1 !== null) {
        tail.next = node1;
      }
      else {
        tail.next = node2;
      }
    }

    if (curr2 !== null) {
      tail = node2;
    } else {
      tail = node1;
    }

    // if one of lists is shorter, do not move curr.
    if (curr1 !== null) {
      // avoid endless while loop. curr from last iteration points 
      // to the curr prepared for next iteration. 
      curr1 = curr1.next;
    }
    if (curr2 !== null ) {
      curr2 = curr2.next;
    }
  }  
  return head;
};

module.exports = mergeTwoLists;
