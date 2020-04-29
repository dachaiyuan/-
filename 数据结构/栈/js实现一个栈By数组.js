function Stack() {
    let arr = [];

    // 压栈
    this.push = function (n) {
        arr.push(n)
    }

    // 出栈
    this.pop = function () {
        return arr.pop()
    }

    // 栈元素
    this.toString = function () {
        return arr.join(' ');
    }

    // 栈长度
    this.size = function () {
        return arr.length;
    }

    // 栈顶
    this.top = function () {
        return arr[arr.length - 1]
    }
}


let stack = new Stack();
stack.push(2)
stack.push(8)
stack.push(4)
stack.push(3)
console.log(stack.toString())
console.log(stack.top())
console.log(stack.size())
stack.pop()
stack.pop()
// stack.pop()
console.log(stack.pop())
console.log(stack.toString())