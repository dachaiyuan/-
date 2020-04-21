// function Stack() {
//     this.stackData = [];
//     this.push = function (value) {
//         this.stackData.push(value);
//     }
//     this.pop = function () {
//         this.stackData.pop();
//     }
//     this.top = function () {
//         let length = this.stackData.length;
//         if (length) {
//             return this.stackData[length - 1]
//         } else throw 'stack is null'
//     }
// }

function Stack() {
    let stackData = [];
    stackData.__proto__.top = function () {
        let length = stackData.length;
        if (length) {
            return stackData[length - 1]
        } else throw 'stack is null'
    }
    return stackData;
}

let stack = new Stack();
stack.push(1);
stack.push(8);
stack.push(10);
console.log(stack);
stack.pop()
console.log(stack);
console.log(stack.top())