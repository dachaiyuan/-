'use strict';

function sum(n, t) {
    if (n == 0) { return 0 }
    return sum(n - 1, t + n)
}

console.log(sum(100000, 0))