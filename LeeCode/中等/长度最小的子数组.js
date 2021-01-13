//https://leetcode-cn.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(s, nums) {
//     if(!s || !nums.length) return 0;
//     let res = s+1;
//     let arr = [];
//     let sum = 0;
//     function dp(num){
//         arr.push(num);
//         sum += num;
//         while(sum >=s){
//             res = Math.min(res, arr.length);
//             sum -= arr[0]
//             arr.shift();
//         }
//     }
//     for(let i = 0;i < nums.length; i++){
//         dp(nums[i])
//     }
//     return res == s + 1?0:res;
// };

var minSubArrayLen = function(s, nums) {
    if(!s || !nums.length) return 0;
    let res = s+1;
    let start = 0;
    let end = 0;
    let sum = 0;
    while(end < nums.length){
        sum += nums[end]
        while(sum >= s){
            res = Math.min(end-start+1,res);
            sum -= nums[start]
            start++;
        }
        end++;
    }
    return res == s + 1?0:res;
};

let s = 8;
let data = [2,3,1,2,4,3];
console.log(minSubArrayLen(s,data))

// 1、  k-2   [3,1,2,4,3]
// 2、  k-3   [1,2,4,3]

// k == 0  ===> 0
// k < 0  ===> -1 此路不通
// k > 0 && arr.length < 1 ===> 此路不通