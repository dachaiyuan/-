
function fact(n) {
    if (n <= 0) {
        return Promise.resolve(1);
    } else {
        return new Promise(resolve => {
            setTimeout(async () => {
                let r = await fact(n - 1)
                resolve(n + r);
            }, 0)
        });
    }
}

// fact(100000).then(res => console.log('async:', res));
// console.log('b=zhixingyibu')

function factSync(n) {
    if (n <= 0) {
        return 1;
    } else {
        while (1) {

        }
        return n + factSync(n - 1);
    }
}

// console.log('sync:', factSync(100000))
// console.log('执行同步')

function factEnd(n, r = 1) {
    "use strict";
    if (n <= 0) {
        return r;
    } else {
        return factEnd(n - 1, r * n);
    }
}

console.log('end:', factEnd(100000, 1))
