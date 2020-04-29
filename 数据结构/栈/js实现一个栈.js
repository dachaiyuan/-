function Stack() {
    function Node(n) {
        this.node = n;
        this.next = null;
    }

    let top = null;
    let length = 0;

    // 压栈
    this.push = function (n) {
        let currentNode = new Node(n);
        top && (currentNode.next = top);
        top = currentNode;
        length++;
    }

    // 出栈
    this.pop = function () {
        let currentNode = top;
        if (top) {
            top = top.next;
            delete currentNode.next;
            length--;
            return currentNode;
        } else {
            return 'stack is null'
        }
    }

    // 栈顶
    this.top = function () {
        return top;
    }

    // 栈长度
    this.size = function () {
        return length;
    }

    // 栈元素
    this.toString = function () {
        let currentNode = top;
        let str = '';
        while (currentNode) {
            str += (' ' + currentNode.node);
            currentNode = currentNode.next;
        }
        return str;
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