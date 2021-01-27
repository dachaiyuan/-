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

function p(num1,num2){
    
    return add(
        p(num1,Math.floor(num2/2)),
        p(num1,Math.floor(num2/2)+1)
    )
}


let x = '83445';
let y = '34554';

console.log(p(x,y))
console.log(Number(x)*Number(y))