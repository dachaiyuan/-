// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

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

[1, 2, 3, 4].reduce((t, c) => {
    let currentNode = new ListNode(c);
    t ? t.next = currentNode : headerNode = currentNode
    return currentNode;
}, null);

/**
 * 常规迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let tempNode = new ListNode();
//     tempNode.next = head;

//     let temp = tempNode;

//     while (temp.next && temp.next.next) {
//         let node1 = temp.next;
//         let node2 = node1.next;
//         temp.next = node2;
//         node1.next = node2.next;
//         node2.next = node1;
//         temp = temp.next.next
//     }

//     return tempNode.next;
// };
/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let tempNode = new ListNode();
//     tempNode.next = head;

//     let node1 = tempNode.next;
//     let node2 = node1.next;

//     tempNode.next = node2;
//     node1.next = node2.next;
//     node2.next = node1;
//     tempNode.next.next.next = swapPairs(tempNode.next.next.next);
//     return tempNode.next;

// };

/**
 * 优化前
 * @param {*} head 
 */

// var swapPairs = function (head) {
//     if (!head || !head.next) {
//         return head;
//     }

//     let resultNode = new ListNode();
//     let resultP = resultNode;

//     let curr = head;

//     while (curr) {
//         if (!curr.next) {
//             resultP.next = curr;
//             break;
//         }
//         let temp = curr.next.next; // 3

//         let node1 = curr;  //1
//         let node2 = curr.next; //2

//         node2.next = node1;
//         node1.next = null;

//         resultP.next = node2;
//         resultP = node1;

//         curr = temp;
//     }

//     return resultNode.next

// };

/**
 * 优化后
 */
var swapPairs = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let resultNode = new ListNode();
    let resultP = resultNode;

    let curr = head;

    while (curr) {
        if (!curr.next) {
            resultP.next = curr;
            break;
        }
        let temp = curr.next.next; // 3

        let node1 = curr;  //1
        let node2 = curr.next; //2

        node2.next = node1;
        node1.next = null;

        resultP.next = node2;
        resultP = node1;

        curr = temp;
    }

    return resultNode.next

};
console.log(swapPairs(headerNode))