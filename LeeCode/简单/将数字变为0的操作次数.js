// https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero

/**
 * @param {number} num
 * @return {number}
 */
// var numberOfSteps = function (num) {
//     let time = 0;
//     deal(num);
//     function deal(n) {
//         if (n === 0) return;
//         time++;
//         return n % 2 ? deal(n - 1) : deal(n / 2)
//     }
//     return time;
// };

var numberOfSteps = function (num) {
    if (num === 0) return 0;
    return 1 + numberOfSteps(num % 2 ? num - 1 : num / 2);
};

console.log(numberOfSteps(10))
