// https://leetcode-cn.com/problems/reverse-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let headerNode = null;

[1, 2, 3, 4, 5].reduce((t, c) => {
    let currentNode = new ListNode(c);
    t ? t.next = currentNode : headerNode = currentNode
    return currentNode;
}, null);

// console.log(headerNode)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     let newNode = null;
//     let cNode = head;
//     while (cNode) {
//         let temp = cNode.next;

//         cNode.next = newNode;
//         newNode = cNode;

//         cNode = temp;
//     }
//     return newNode;
// };

var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let next = head.next;
    let resverNode = reverseList(next);

    head.next = null;
    next.next = head;

    return resverNode;
};

console.log(reverseList(headerNode))