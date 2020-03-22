/**
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
//   var head = new ListNode(1); //l1.val
//   var node2 = new ListNode(1);//l2.val
//   head.next = node2;
//   var node3 = new ListNode(2);//l1.val
//   node2.next = node3;
//   var node4 = new ListNode(3);//l2.val
//   node3.next = node4;
//   var node5 = new ListNode(4);//l1.val
//   node4.next = node5;
//   var tail = new ListNode(4);//l2.val
//   node5.next = tail; 

  var head = null;
  var curr1 = l1;
  var curr2 = l2;
  var tail = null;

  while (curr1 !== null || curr2 !== null) {
    // var smaller = null;
    // var bigger = null;

    // if (curr1 !== null && curr2 != null) {
    //   if (curr1.val < curr2.val) {
    //     smaller = curr1.val;
    //     bigger = curr2.val;
    //   }
    //   else {
    //     smaller = curr2.val;
    //     bigger = curr1.val;
    //   }
    // }
    // else if (curr2 === null) {
    //   smaller = curr1;
    // }
    // else if (curr1 === null) {
    //   smaller = curr2.val;
    // }


    var node1 = null;
    if (curr1 !== null) {
      var node1 = new ListNode(curr1.val);
    }

    var node2 = null;
    if (curr2 !== null) { // create node2 only if remaining part of l2 exists 
      node2 = new ListNode(curr2.val);
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
