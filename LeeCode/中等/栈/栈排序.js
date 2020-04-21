// https://leetcode-cn.com/problems/sort-of-stacks-lcci/

function Stack() {
    let stackData = [];
    stackData.__proto__.top = function () {
        let length = this.length;
        if (length) {
            return this[length - 1]
        } else throw 'stack is null'
    }
    return stackData;
}

var SortedStack = function () {
    this.stackData = new Stack();
    this.stackHelp = new Stack();
};

/**
 * @description stackHelp 还给 stackData
 */
SortedStack.prototype.tranStrack = function () {
    if (this.stackHelp.length) {
        this.stackData.push(this.stackHelp.pop());
        this.tranStrack()
    }
}

SortedStack.prototype.push = function (val) {
    if (this.stackData.length && this.stackData.top() < val) {
        this.stackHelp.push(this.stackData.pop());
        this.push(val);
    } else {
        this.stackData.push(val);
        this.tranStrack();
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
    this.stackData.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
    let length = this.stackData.length;
    return length ? this.stackData[length - 1] : -1
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
    return !this.stackData.length
};


let sortedStack = new SortedStack();
sortedStack.push(1);
sortedStack.push(2);
console.log(sortedStack.peek());
console.log(sortedStack.pop());
console.log(sortedStack.peek());
console.log(sortedStack.isEmpty());