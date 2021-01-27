function add(num1,num2,up = 0){
    if(!(num1 && num2)){
        if(num1) return +num1 + up;
        if(num2) return +num2 + up;
        if(up) return up;
        return '';
    }
    let end = Number(num1.slice(-1)) + Number(num2.slice(-1)) + up;
    let cup = 0;
    end = end >= 10 ? (cup++,end-10):end;

    return `${add(num1.slice(0,-1),num2.slice(0,-1),cup)}${end}`
}

let x = '8344545454545434';
let y = '3455454545665656454545454545';

console.log(add(x,y))
console.log(Number(x)+Number(y))