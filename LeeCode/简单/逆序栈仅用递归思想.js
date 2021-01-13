const Stack = require('./../../数据结构/栈/js实现一个栈')

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

console.log(stack.toString())

// function getLastStack() {
//     let last = stack.pop();
//     if (stack.empty()) {
//         return last;
//     }
//     let node = getLastStack();
//     stack.push(last);
//     return node;
// }
// // console.log(getLastStack())
// // console.log(stack.toString())

// function reverseStack() {
//     if (stack.empty()) {
//         return;
//     }
//     let node = getLastStack();
//     reverseStack();
//     stack.push(node);
// }

// reverseStack()

// console.log(stack.toString())

function getFirstNode(st) {
    let last = st.pop();
    if (st.empty()) {
        return last;
    }
    let first = getFirstNode(st);
    st.push(last);
    return first
}

function reverseStack(stp) {
    if (stp.empty()) {
        return;
    }
    let node = getFirstNode(stp)
    reverseStack(stp)
    stp.push(node)
}

reverseStack(stack)
console.log(stack.toString())