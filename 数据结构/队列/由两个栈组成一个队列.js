const Stack = require('./../栈/js实现一个栈')


function Queue() {
    let stackData = new Stack();
    let stackHelp = new Stack();
    this.add = function (v) {
        // 倒进来
        while (stackHelp && stackHelp.size()) {
            stackData.push(stackHelp.pop().node)
        }
        // 添加
        stackData.push(v);
        // 倒出去
        while (stackData && stackData.size()) {
            stackHelp.push(stackData.pop().node)
        }
    }

    this.poll = function () {
        return stackHelp.pop().node;
    }

    this.peek = function () {
        return stackHelp.toString();
    }
}

let q = new Queue();
q.add(1);
q.add(2);
q.add(3);

console.log(q.peek())
console.log(q.poll())
console.log(q.peek())