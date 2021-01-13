// https://leetcode-cn.com/problems/hanota-lcci/

// function hanota(n,A,B,C){
//     if(n>0){
//         hanota(n-1,A,C,B)
//         console.log(`${A} to ${C}`)
//         hanota(n-1,B,A,C)
//     }
// }

// hanota(4,'A','B','C');

function hannota(from,ass,to){
    const len = from.length;
    if(!len) return [];
    function move(n, A, B, C){
        if(n === 1){
            C.push(A.pop())
        }else{
            move(n-1, A, C, B);
            move(1, A, B, C);
            move(n-1, B, A, C);
        }
    }
    move(len,from,ass,to)
    return to;
}
console.log(hannota([3,2,1,0],[],[]))