// https://leetcode-cn.com/problems/min-stack-lcci/

function MinStack() {
    let stackData = [];
    let stackMin = [];

    this.push = function (value) {
        stackData.push(value);
        if (stackMin.length) {
            if (value <= this.getMin()) {
                stackMin.push(value);
            }
        } else stackMin.push(value)
    }

    this.pop = function () {
        if (this.top() <= this.getMin()) {
            stackMin.pop();
        }
        stackData.pop();
    }

    this.top = function () {
        let length = stackData.length;
        if (length) {
            return stackData[length - 1]
        } else throw 'stack is null';
    }

    this.getMin = function () {
        let len = stackMin.length;
        if (len > 0) {
            return stackMin[len - 1];
        } else {
            throw 'stackMin is null'
        }
    }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //返回 -3.
minStack.pop();
console.log(minStack.top());      // 返回 0.
console.log(minStack.getMin());   // 返回 -2.