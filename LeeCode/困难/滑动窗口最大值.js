// https://leetcode-cn.com/problems/sliding-window-maximum/


// 双端队列
var maxSlidingWindow = function(nums, k) {

    if(k == 1) return nums;

    let queue = [];
    let maxArr = [];
    function clearQueue(i,k){
        if(queue.length && queue[0]==i-k){
            queue.shift();
        }
        while(queue.length && nums[i] > nums[queue[queue.length -1]]) queue.pop();
    }
    for(let i = 0; i< k; i++){
        clearQueue(i,k)
        queue.push(i);
    }
    maxArr[0] = nums[queue[0]];
    for(let j = k; j<nums.length;j++){
        clearQueue(j,k)
        queue.push(j);
        maxArr[j - k + 1] = nums[queue[0]];
    }
    return maxArr
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
console.log(maxSlidingWindow([7,2,4],2))
console.log(maxSlidingWindow([4,-2],2))