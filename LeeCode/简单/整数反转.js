// var reverse = function (x) {
//     const min = -2147483648;
//     const max = 2147483647;
//     let s = Math.abs(x).toString();
//     let r = x < 0 ? '-' : '';
//     for (let i = s.length - 1; i >= 0; i--) {
//         r += s[i];
//     }
//     r = Number(r);
//     if (r > max || r < min) r = 0
//     return r;
// };

var reverse = function (x) {
    const min = -2147483648;
    const max = 2147483647;
    let r = 0;
    while (x != 0) {
        r = r * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return (r > max || r < min) ? 0 : r
}

console.log(reverse(-123578))