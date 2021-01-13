// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/


function CQueue() {
    let stackData = [];
    let stackHelp = [];
    this.pushToHelp = function () {
        if (!stackHelp.length) {
            while (stackData && stackData.length) {
                stackHelp.push(stackData.pop())
            }
        }
    }
    this.appendTail = function (v) {
        stackData.push(v);
        this.pushToHelp();
    }

    this.deleteHead = function () {
        this.pushToHelp();
        return stackHelp.length ? stackHelp.pop() : '-1'
    }
}