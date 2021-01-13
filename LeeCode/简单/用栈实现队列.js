// https://leetcode-cn.com/problems/implement-queue-using-stacks/

function MyQueue() {
    let stackData = [];
    let stackHelp = [];
    this.pushToHelp = function () {
        if (!stackHelp.length) {
            while (stackData && stackData.length) {
                stackHelp.push(stackData.pop())
            }
        }
    }
    this.push = function (v) {
        stackData.push(v);
        this.pushToHelp();
    }

    this.pop = function () {
        if (stackHelp.length) {
            return stackHelp.pop()
        } else {
            this.pushToHelp();
            return stackHelp.length ? stackHelp.pop() : '-1'
        }
    }

    this.peek = function () {
        if (stackHelp.length) {
            return stackHelp[stackHelp.length - 1]
        } else if (stackData.length) {
            return stackData[0]
        }
        return null
    }

    this.empty = function () {
        return !(stackData.length || stackHelp.length);
    }
}