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
    arrayToLinkedList: arrayToLinkedList
};