// 找出数组中出现最多的元素和次数（编程题）
var arr = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 7, 7, 10, 10, 10, 10, 10];

function getMaxTimeNum(nums){
    let obj = {};
    let maxNum = '';
    let maxTimes = 0;
    nums.forEach(num => {
        obj[num] = obj[num]?obj[num]+1:1;
        if(maxNum && obj[num] > maxTimes){
            maxNum = num;
            maxTimes = obj[num];
        }else{
           maxNum = num;
           maxTimes = 1;
        }
    });
    return [maxNum,maxTimes]
}


console.log(getMaxTimeNum(arr));