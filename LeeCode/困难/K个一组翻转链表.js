// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let headerNode = null;

[1, 2, 3, 4, 5, 6, 7, 8].reduce((t, c) => {
    let currentNode = new ListNode(c);
    t ? t.next = currentNode : headerNode = currentNode
    return currentNode;
}, null);

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    function reverse(h) {

    }
};

console.log(reverseKGroup(headerNode, k))