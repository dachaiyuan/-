// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 我的解法
// var twoSum = function (nums, target) {
//     let res = deep(0, nums[0])
//     function deep(index, value) {
//         let res = [index]
//         for (let i = index + 1; i < nums.length; i++) {
//             if (nums[i] + value == target) {
//                 res.push(i);
//                 return res;
//             }
//         }
//         return deep(index + 1, nums[index + 1])
//     }
//     return res;
// };

// let nums = [3, 2, 4];
// console.log(twoSum(nums, 6))

var twoSum = function (nums, target) {
    let dir = {};
    for (let i = 0; i < nums.length; i++) {
        if (dir[nums[i]] !== undefined) {
            return [dir[nums[i]], i];
        }
        dir[target - nums[i]] = i;
    }
};
let nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9))


