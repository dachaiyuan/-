function add (num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 0;
    }
    const num1sub = num1.toString().split('.')[1]
    const num2sub = num2.toString().split('.')[1]
    let n = Math.pow(10,Math.max(num1sub.length,num2sub.length));
    
    return (num1*n + num2 * n)/n
}

console.log(add(3230.1,3232.2))