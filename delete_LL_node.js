// 237. Delete Node in a Linked List
var deleteNode = function(node) {
    let temp = node.next
    node.next = node.next.next
    node.val = temp.val 
    temp.next = null  
};
