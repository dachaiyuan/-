// 1 1 2 3 5 8 13 21
1 2 4 7 12 20 33 54
Sn = a1 + a2 + a3 + ... + an
Sn = a3 + a5 + a7 + ... + a(2n - 1)



// function sum(n) {
//     function bofei(c) {
//         if (c == 1 || c == 2) return 1;
//         return bofei(c - 1) + bofei(c - 2)
//     }
//     let s = 0
//     for (let i = 1; i <= n; i++) {
//         s += bofei(i)
//     }
//     return s;
// }

// console.log(sum(8))

function feb(n) {
    let first = 0;
    let second = 1;
    let result = 0;
    if (n == 0) return first;
    if (n == 1) return second;
    for (let i = 2; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}

console.log(feb(8))



