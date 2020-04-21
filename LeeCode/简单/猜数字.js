// https://leetcode-cn.com/problems/guess-numbers

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
    return guess.reduce((r, c, i) => c === answer[i] ? r + 1 : r, 0)
};

console.log(game([1, 2, 3], [5, 2, 3]))