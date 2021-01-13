// https://leetcode-cn.com/problems/linked-list-cycle/

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

// headerNode.next.next.next.next.next = headerNode.next;

// console.log(headerNode.next.next.next)

/**
 * @description 哈希表
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     let hash = new Map();
//     let cNode = head;
//     while (cNode) {
//         if (hash.has(cNode)) {
//             return true;
//         }
//         hash.set(cNode, true);
//         cNode = cNode.next;
//     }

//     return false;

// };

/**
 * 
 * @description 快慢指针
 */
var hasCycle = function (head) {
    let hash = new Map();
    if (!head || !head.next) {
        return false;
    }
    let cNode1 = head;
    let cNode2 = head.next;
    while (cNode1 && cNode2 && cNode2.next) {
        if (cNode1 == cNode2) {
            return true;
        }
        cNode1 = cNode1.next;
        cNode2 = cNode2.next.next;
    }
    return false;
};

console.log(hasCycle(headerNode))